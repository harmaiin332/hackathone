import Image from 'next/image';
import React from 'react';

export default function Aboutus() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-562px h-[1320px] bg-black text-white px-8 py-12">
      {/* Left Section */}
      <div className="lg:w-[50%] space-y-6">
        <p className="text-orange-500 italic text-lg">About us</p>
        <h1 className="text-5xl font-bold leading-tight">
          We Create the Best <br />
          <span className="text-orange-500">Foody Product</span>
        </h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna,
          elit augue urna, vitae feugiat pretium donec id elementum.
        </p>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">✔</span> Lacus nisi, et ac
            dapibus sit eu velit in consequat.
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">✔</span> Quisque diam
            pellentesque bibendum non dui volutpat fringilla.
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">✔</span> Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </li>
        </ul>
        <button className="px-6 py-3 text-black bg-orange-500 rounded-md hover:bg-orange-600 transition">
          Read More
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-[50%] flex flex-col gap-4">
        {/* Top Image */}
        <div className="w-330px h-[660px] relative rounded-md overflow-hidden">
          <Image
            src="/egg.jpg" // Replace with your image path
            alt="Food"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        {/* Grid of Images */}
        <div className="grid grid-cols-3 gap-4 ">
          <div className="w-322px h-[194px] relative rounded-md overflow-hidden">
            <Image
              src="/aboutpag.jpg" // Replace with your image path
              alt="Food 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="w-322px h-[194px] relative rounded-md overflow-hidden">
            <Image
              src="/about2.jpg" // Replace with your image path
              alt="Food 2"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
         
        </div>
      </div>
    </div>
  );
}