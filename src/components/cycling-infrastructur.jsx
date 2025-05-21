import React from "react";
import Footer from "./Footer";
import MapPage from "./MapPage";
import "../index.css"

const cyclingBenefits = [
  {
    title: "Improved Health",
    description:
      "Cycling regularly can improve cardiovascular health, boost immunity, and reduce stress.",
  },
  {
    title: "Environmental Impact",
    description:
      "Cycling is a zero-emission mode of transport, significantly reducing air pollution and traffic congestion.",
  },
  {
    title: "Cost-Effective",
    description:
      "Cycling is an affordable alternative to fuel-powered transport and can reduce travel costs.",
  },
  {
    title: "Increased Mobility",
    description:
      "Dedicated cycling lanes improve safety and efficiency, offering a quick mode of transport in crowded urban areas.",
  },
];

const CyclingInfrastructure = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto pt-30">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Cycling Infrastructure for a Sustainable Future</h1>
      <p className="text-lg text-gray-700 mb-10">
        Investing in cycling infrastructure is essential to create a safe, healthy, and eco-friendly transportation system.
      </p>

      {/* Benefits of Cycling */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {cyclingBenefits.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow border-l-4 border-green-500 hover:shadow-md transition"
          >
            <h3 className="text-xl font-bold text-green-700 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Cycling Infrastructure in Cities */}
      <div className="mb-16">
       
        

        <div className="grid md:grid-cols-2 gap-8">
          <div>
          <h1 className="text-2xl font-semibold mb-4 text-gray-800">Current State of Cycling Infrastructure</h1>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Infrastructure Components</h3>
            <p className="text-lg text-gray-700 mb-6">
          Many cities worldwide are investing in safe and accessible cycling infrastructure, including dedicated lanes, bike-sharing stations, and traffic-free routes. Some notable examples include Amsterdam, Copenhagen, and Bogota, where cycling is part of the city's core transport system.
        </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Dedicated cycling lanes</li>
              <li>Bike parking and storage facilities</li>
              <li>Bike-sharing programs</li>
              <li>Eco-friendly bike repair stations</li>
            </ul>
          </div>
          <div>
            <img
              src="./images/cycling-infra.png"
              alt="Cycling Infrastructure"
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Interactive Cycling Map */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 justify-center">Explore Cycling Routes in Your City</h2>
        
        <MapPage />
      </div>

      {/* CTA */}
      <div className="bg-green-600 text-white p-8 rounded-xl text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Join the Cycling Revolution</h2>
        <p className="mb-4">Let's build a cleaner, greener, and healthier future. Advocate for better cycling infrastructure in your city.</p>
        <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
          Learn More About Local Cycling Initiatives
        </button>
      </div>
      <section className="bg-gray-50 py-12 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between flex">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Discover Seamless Cycling with Us</h1>
          <p className="text-lg text-gray-600">
            Explore a safer, greener, and more connected way to commute. Join the cycling revolution with routes, rentals, and secure parking!
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="./images/cyc-health.png" alt="Cycling Hero" className="w-full h-120 rounded-lg shadow-md" />
        </div>
      </section>
      <section className="py-10 px-4 md:px-20">
        <h2 className="text-2xl font-semibold mb-3"> Define Safe & Scenic Cycling Routes</h2>
        <p className="text-gray-700">
          Our curated cycling paths prioritize rider safety, minimal traffic, and picturesque surroundings. Perfect for daily commutes or weekend rides.
        </p>
        </section>
      <div className="flex">
       
       

     
      <section className="py-10 px-4 md:px-20">
      
        <div className="mb-4">

        
          <img src="./images/intractive_map.png" alt="Interactive Route Map" className="w-full rounded-lg shadow" />
        </div>
        <h2 className="text-2xl font-semibold mb-3">Interactive Route Map</h2>
        <p className="text-gray-700">
          Plan your journey with ease using our interactive route map powered by real-time data and user feedback.
        </p>
      </section>

      <section className="py-10 px-4 md:px-20">
        <div className="mb-4">
          <img src="./images/parking.webp" alt="Secure Parking" className="w-full rounded-lg shadow" />
        </div>
        <h2 className="text-2xl font-semibold mb-3">Secure Cycle Parking</h2>
        <p className="text-gray-700">
          Leave your bike stress-free at our monitored, well-lit parking zones located near major destinations.
        </p>
      </section>

      <section className="py-10 px-4 md:px-20">
        <div className="mb-4">
          <img src="./images/rental.webp" alt="Bike Rentals" className="w-full rounded-lg shadow" />
        </div>
        <h2 className="text-2xl font-semibold mb-3">Bike Rentals</h2>
        <p className="text-gray-700">
          Access affordable, convenient bike rentals around the city to get you moving whenever you need.
        </p>
      </section>
      
      </div>
    </div>
    
    
  );
};

export default CyclingInfrastructure;