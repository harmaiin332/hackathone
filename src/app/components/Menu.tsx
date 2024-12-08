
function Menu() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Choose & Pick</h2>
        <h2 className="text-3xl font-bold mb-8 text-center">From Our Menu</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-4">
          {/* Category Headers */}
          <div className="text-center">Breakfast</div>
          <div className="text-center">Lunch</div>
          <div className="text-center">Dinner</div>
          <div className="text-center">Dessert</div>
          <div className="text-center">Drink</div>
          <div className="text-center">Snack</div>
          <div className="text-center">Suops</div>

          {/* Menu Items */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <img src="/menu1.jpg" alt="Menu Item 1" className="w-full rounded-lg mb-4" />
            <h3 className="text-lg font-bold mb-2">Lettuce Leaf</h3>
            <p className="text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
            <p className="text-lg font-bold">$12.55</p>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <img src="/menu2.jpg" alt="Menu Item 2" className="w-full rounded-lg mb-4" />
            <h3 className="text-lg font-bold mb-2">Fresh Breakfast</h3>
            <p className="text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
            <p className="text-lg font-bold">$14.55</p>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <img src="/menu3.jpg" alt="Menu Item 3" className="w-full rounded-lg mb-4" />
            <h3 className="text-lg font-bold mb-2">Mild Butter</h3>
            <p className="text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
            <p className="text-lg font-bold">$12.55</p>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <img src="/menu4.jpg" alt="Menu Item 4" className="w-full rounded-lg mb-4" />
            <h3 className="text-lg font-bold mb-2">Fresh Bread</h3>
            <p className="text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
            <p className="text-lg font-bold">$12.55</p>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <img src="/menu5.jpg" alt="Menu Item 5" className="w-full rounded-lg mb-4" />
            <h3 className="text-lg font-bold mb-2">Glow Cheese</h3>
            <p className="text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
            <p className="text-lg font-bold">$12.55</p>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <img src="/menu6.jpg" alt="Menu Item 6" className="w-full rounded-lg mb-4" />
            <h3 className="text-lg font-bold mb-2">Italian Pizza</h3>
            <p className="text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
            <p className="text-lg font-bold">$14.55</p>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <img src="/menu7.jpg" alt="Menu Item 7" className="w-full rounded-lg mb-4" />
            <h3 className="text-lg font-bold mb-2">Silice Beef</h3>
            <p className="text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
            <p className="text-lg font-bold">$12.55</p>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Menu;