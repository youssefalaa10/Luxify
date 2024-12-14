import React from 'react';
import { BiCube } from 'react-icons/bi';
import { BsGrid } from 'react-icons/bs';
import { BiSolidMegaphone } from 'react-icons/bi';

const WhatWeDo = () => {
  const services = [
    {
      icon: <BiCube size={32} className="text-cyan-400" />,
      title: "3D Planning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
    },
    {
      icon: <BsGrid size={32} className="text-cyan-400" />,
      title: "Web Platform",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
    },
    {
      icon: <BiSolidMegaphone size={32} className="text-cyan-400" />,
      title: "Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-14">
      <h4 className="font-[900] text-[35px] text-center lg:mb-20">
        What We Do
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="flex flex-col items-center text-center"
          >
            <div className="relative mb-6">
              {/* Main circle with outer shadow */}
              <div className="w-28 h-28 rounded-full bg-gray-50 shadow-lg relative">
                {/* Inner shadow overlay */}
                <div className="absolute inset-0 rounded-full shadow-inner bg-gradient-to-b from-gray-100 to-transparent opacity-80" />
                
                {/* Additional inner shadow for depth */}
                <div className="absolute inset-3 rounded-full bg-white shadow-inner" />
                
                {/* Icon container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h3>
            
            <p className="text-gray-600 max-w-xs">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;