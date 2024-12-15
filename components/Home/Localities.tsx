"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import saopaulo from '@/public/saopaulo.jpg';

const Localities = () => {
  const images = [
    { src: saopaulo, title: 'Sao Paulo', description: 'Urban, vibrant' },
    { src: saopaulo, title: 'Rio de Janeiro', description: 'Beachside, lively' },
    { src: saopaulo, title: 'Tokyo', description: 'Modern, bustling' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="px-4 py-8 lg:px-16">
      <div className="text-center mb-8">
        <h2 className="font-[900] text-[35px] text-center ">Localities</h2>
        <p className="text-gray-600 mt-2">
          Discover beautiful and vibrant cities across the world.
        </p>
      </div>
      <div className="relative flex justify-center items-center  h-80">
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + images.length) % images.length;
          const isNext = index === (currentIndex + 1) % images.length;

          return (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out 
                ${isActive ? 'w-1/3 h-72 scale-110 z-10' : 
                  isPrev ? 'w-1/3 h-64 -translate-x-full z-0' : 
                  isNext ? 'w-1/3 h-64 translate-x-full z-0' : 'hidden'}`}
            >
              <div className="relative w-full h-full bg-gray-300 rounded-lg  m-6">
                <Image
                  src={image.src}
                  alt={image.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white rounded-b-lg">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Localities;
