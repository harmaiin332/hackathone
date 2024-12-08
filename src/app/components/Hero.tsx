import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <div className="flex items-center justify-between h-[950px] w-full px-8 bg-black text-white">
      {/* Left Content */}
      <div className="max-w-[50%] space-y-6">
        <p className="text-orange-500 italic text-lg">It’s Quick & Amusing</p>
        <h1 className="text-6xl font-bold leading-tight">
          The Art of Speed <br />
          <span className="text-orange-500">Food Quality</span>
        </h1>
        <p className="text-gray-300 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          dictum neque massa congue.
        </p>
        <button className="px-6 py-3 text-black bg-orange-500 rounded-md hover:bg-orange-600 transition">
          See Menu
        </button>
      </div>

      {/* Right Content */}
      <div className="relative w-[900px] h-full flex justify-center items-center">
        <div className="relative w-[600px] h-[600px] rounded-full overflow-hidden border-8 border-white">
          <Image
            src="/Image.png" // Replace with your image path
            alt="Food"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
