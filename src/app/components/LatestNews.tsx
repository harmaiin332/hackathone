import React from 'react';

function LatestNews() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Latest News & Blog</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Blog Post 1 */}
          <div className="bg-black border-orange-500p-6 rounded-lg">
            <img src="/latest1.jpg" alt="Blog Post 1" className="w-full rounded-lg mb-4" />
            <p className="text-lg font-bold mb-2">10 February 2022</p>
            <p className="text-lg mb-4">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>
            <div className="flex justify-between items-center">
              <a href="#" className="text-orange-500 hover:text-orange-600">Learn More</a>
              <div className="flex space-x-2">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Like</button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Share</button>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-black border-white p-6 rounded-lg">
            <img src="/latest2.jpg" alt="Blog Post 2" className="w-full rounded-lg mb-4" />
            <p className="text-lg font-bold mb-2">10 February 2022</p>
            <p className="text-lg mb-4">Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A</p>
            <div className="flex justify-between items-center">
              <a href="#" className="text-orange-500 hover:text-orange-600">Learn More</a>
              <div className="flex space-x-2">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Like</button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Share</button>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-black border-white p-6 rounded-lg">
            <img src="/latest3.jpg" alt="Blog Post 3" className="w-full rounded-lg mb-4" />
            <p className="text-lg font-bold mb-2">10 February 2022</p>
            <p className="text-lg mb-4">Curabitur rutrum velit ac congue malesuada</p>
            <div className="flex justify-between items-center">
              <a href="#" className="text-orange-500 hover:text-orange-600">Learn More</a>
              <div className="flex space-x-2">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Like</button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Share</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;