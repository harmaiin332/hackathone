import React from 'react';

function MeetOurChef() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Chef</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Chef 1 */}
          <div className="text-center">
            <img src="/cheif1.jpg" alt="Chef 1" className="w-391 h-312px radius-6 mb-4" />
            <h3 className="text-lg font-bold mb-2">D.Estwood</h3>
            <p className="text-sm">Chief Chef</p>
          </div>

          {/* Chef 2 */}
          <div className="text-center">
            <img src="/cheif2.jpg" alt="Chef 2" className="w-391 h-312px radius-6px mb-4" />
            <h3 className="text-lg font-bold mb-2">D.Scoriesh</h3>
            <p className="text-sm">Assistant Chef</p>
          </div>

          {/* Chef 3 */}
          <div className="text-center">
            <img src="/cheif3.jpg" alt="Chef 3" className="w-391 h-312px radius-6px mb-4" />
            <h3 className="text-lg font-bold mb-2">M. William</h3>
            <p className="text-sm">Advertising Chef</p>
          </div>

          {/* Chef 4 */}
          <div className="text-center">
            <img src="/cheif4.jpg" alt="Chef 4" className="w-391 h-312px radius-6 " />
            <h3 className="text-lg font-bold mb-2">W.Readfroad</h3>
            <p className="text-sm">Chef</p>
          </div>
        </div>

        <div className="text-center mt-4">
          <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">See More</a>
        </div>
      </div>
    </div>
  );
}

export default MeetOurChef;