
import React from 'react';
import MapSection from '../components/MapSection'; 

const MapPage = () => {
  return (
    
    
    <section id="map" className="p-8 bg-gray-100 mt-30">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Explore Sustainable Transportation with Our Maps</h2>
      <p className="text-gray-600 mb-8">
        Find real-time information based on your location.
      </p>
  
      {/* Map container */}
      <div className="rounded-lg overflow-hidden shadow-lg">
      <MapSection />
      </div>
    </div>
  </section>
  );
};

export default MapPage;
