import React from 'react';

function Resturant() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative">
            <img src="/resturant1.jpg" alt="Hero Image" className="w-full rounded-lg"  />
            <div className="absolute top-0 right-0 p-4 bg-black bg-opacity-50 rounded-bl-lg">
              <h3 className="text-lg font-bold">Restaurant Name</h3>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl font-bold mb-4">We Document Every Food Bean Process Until It Is Saved</h2>
            <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Uma, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <div className="flex space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Read More</button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Play Video</button>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Resturant;
