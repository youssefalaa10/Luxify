"use client"
import { useState } from 'react';
import { IoChevronDown } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import saopaulo from "@/public/saopaulo.jpg";
import Image from 'next/image';

interface AccordionItem {
  title: string;
  content: string;
}

const AboutUs = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const accordionData: AccordionItem[] = [
    {
      title: 'History',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title: 'Quality',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title: 'Future',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="container max-w-full ">
        <div className="flex flex-col lg:flex-row bg-black backdrop-blur-sm rounded-lg overflow-hidden">
          {/* Left Column - Form */}
          <div className="lg:w-1/2 p-8 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-white">About Us</h1>
              <h2 className="text-xl lg:text-2xl text-gray-300">Key points about company</h2>
              <p className="text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {accordionData.map((item) => (
                <div key={item.title} className="border-b border-gray-500/50">
                  <button
                    onClick={() => toggleSection(item.title)}
                    className="w-full flex items-center justify-between py-4 text-left text-gray-200 hover:text-white transition-colors"
                  >
                    <span>{item.title}</span>
                    <IoChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openSection === item.title ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openSection === item.title && (
                    <div className="pb-4 text-gray-200">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
            <Image
              src={saopaulo}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;