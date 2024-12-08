import React from 'react';
import { PiHamburgerThin } from "react-icons/pi";
import { CiGlass } from "react-icons/ci";
import { PiCakeThin } from "react-icons/pi";
function WhyChooseUs() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Left Side: Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img src="/exp1.jpg" alt="Image 1" className="w-full rounded-lg" />
            <img src="/exp2.jpg" alt="Image 2" className="w-full rounded-lg" />
            <img src="/exp3.jpg" alt="Image 3" className="w-full rounded-lg" />
            <img src="/exp5.jpg" alt="Image 4" className="w-full rounded-lg" />
          </div>

          {/* Right Side: Text and Icons */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Extra Ordinary Taste And Experienced</h3>
            <p className="text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
              pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
              augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
              sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
              consequat.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-yellow-500 p-4 rounded-lg text-center">
                <PiHamburgerThin     className="w-12 h-12 bg-yellow-500  mx-auto mb-2" />
                <p>Fast Food</p>
              </div>
              <div className="bg-yellow-500 p-4 rounded-lg text-center">
              <CiGlass  className="w-12 h-12 mx-auto mb-2" />
                <p>Lunch</p>
              </div>
              <div className="bg-yellow-500 p-4 rounded-lg text-center">
              <PiCakeThin   className="w-12 h-12 mx-auto mb-2" />
                <p>Dinner</p>
              </div>
            </div>

            <div className="bg-orange-500 text-white p-4 rounded-lg mt-6">
              <h3 className="text-lg font-bold">30+ Years of Experienced</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;