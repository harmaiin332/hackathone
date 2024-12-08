import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold  flex text-center mb-8">Testimonials</h2>
        <p className="text-lg text-white text-center mb-16">What our clients are saying</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">01</h3>
            <img src='testinomial-man.jpg' alt="Testimonial 1" className="w-132px h-132px rounded-lg mb-4" />
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <p className="text-gray-500">
              Alamin Hasan
              <br />
              Food Specialist
            </p>
          </div>
          {/* Add more testimonial cards here */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;