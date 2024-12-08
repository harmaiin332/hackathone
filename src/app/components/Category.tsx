import React from 'react';

function FoodCategory() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Choose Food Item</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Fast Food Dish */}
          <div className="bg-black p-6 rounded-lg">
            <img src="/categoey1.jpg" alt="Fast Food Dish" className="w-full rounded-lg mb-4" />
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2">Fast Food Dish</h3>
              
            </div>
          </div>

          {/* Burger */}
          <div className="bg-black p-6 rounded-lg">
            <img src="/category2.jpg" alt="Burger" className="w-full rounded-lg mb-4" />
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2">Burger</h3>
            </div>
          </div>

          {/* Salad */}
          <div className="bg-black p-6 rounded-lg">
            <img src="/category4.jpg" alt="Salad" className="w-full rounded-lg mb-4" />
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2">Salad</h3>
            </div>
          </div>

          {/* Donuts */}
          <div className="bg-black p-6 rounded-lg">
            <img src="/category3.jpg" alt="Donuts" className="w-full rounded-lg mb-4" />
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2">Donuts</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCategory;