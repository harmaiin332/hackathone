import React from 'react';
import { IoFastFoodOutline } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";
function OurAchievements() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Professional Chefs */}
          <div className="text-center p-6">
            <svg className="w-16 h-16 mx-auto mb-4 text-orange-500" >
              </svg>
            <h3 className="text-2xl font-bold mb-2">Professional Chefs</h3>
            <p className="text-4xl font-bold">420</p>
          </div>

          {/* Items of Food */}
          <div className="text-center p-6">>
            
              <IoFastFoodOutline/>< h3 className="text-2xl font-bold mb-2">Items of Food</h3>
            <p className="text-4xl font-bold">320</p>
          </div>

          {/* Years of Experience */}
          <div className="text-center p-6">
            <svg className="mx-auto mb-4 text-orange-500" >
            </svg>
            <ImSpoonKnife className='w-120px h-120px ' />< h3 className="text-2xl font-bold mb-2">Years of Experience</h3>
            <p className="text-4xl font-bold">30+</p>
          </div>

          {/* Happy Customers */}
          <div className="text-center p-6">
            <svg className="w-16 h-16 mx-auto mb-4 text-orange-500"  >
            </svg>
            <h3 className="text-2xl font-bold mb-2">Happy Customers</h3>
            <p className="text-4xl font-bold">220</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurAchievements;
