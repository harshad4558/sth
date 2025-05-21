import React from 'react';

const Features = () => {
  return (
    <section className="p-10 bg-gray-100 mt-20">
      <h2 className="text-3xl font-bold text-center mb-8">Features of Sustainable Transportation Platform</h2>
      <div className="flex justify-center gap-6 flex-wrap md:flex-nowrap max-w-7xl mx-auto">
        {/* EV Charging */}
        <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/3 text-center">
          <img src="/images/ev.png" alt="EV Charging" className="w-full h-48 object-cover rounded-md mb-4" style={{ height: '440px', width: '400px' }} />
          <h3 className="mt-2 font-semibold">EV Charging Locator</h3>
          <p>Find the nearest electric vehicle charging stations easily.</p>
        </div>
        {/* Cycling */}
        <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/3 text-center">
          <img src="/images/cycling.webp" alt="Cycling Routes" className="rounded-lg" style={{ height: '440px', width: '400px' }} />
          <h3 className="mt-2 font-semibold">Cycling Routes Discovery</h3>
          <p>Explore scenic and safe bike routes in your city.</p>
        </div>
        {/* Public Transit */}
        <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/3 text-center">
          <img src="/images/planner.png" alt="Transit Planner" className="rounded-lg" style={{ height: '440px', width: '400px' }} />
          <h3 className="mt-2 font-semibold">Public Transit Planner</h3>
          <p>Plan smart, efficient travel with real-time schedules.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
