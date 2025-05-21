import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";



const EvCharging = () => {
  const navigate = useNavigate();
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto text-gray-800 pt-30">
      {/* Hero */}
      <Navbar />
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold leading-snug mb-4">
            Find the Perfect <span className="text-green-600">EV Charging</span> Station Near You
          </h1>
          <p className="text-lg mb-4">
            Our interactive map helps you locate EV charging stations effortlessly. Filter by charging speed,
            availability, and payment options. We provide real-time updates and detailed information to ensure a
            seamless charging experience.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li><strong>Fast Chargers:</strong> Quickly power up your EV.</li>
            <li><strong>Normal Chargers:</strong> Convenient for longer stops.</li>
            <li><strong>Superchargers:</strong> Ultra-fast charging for long journeys.</li>
          </ul>
        </div>
        <img
          src="/images/station.webp"
          alt="EV charging map"
          className="rounded-xl shadow-md"
        />
      </div>

      {/* Station Details */}
    <div className="flex h-150">
    <div className="mb-12" >
        <h2 className="text-2xl font-semibold mb-2 p-15">Find Your Perfect Charge</h2>
        <p className="mb-4 text-gray-700">
          Explore detailed information about each charging station, including its name, address, charging type (AC/DC),
          availability, and more. Get real-time availability updates and estimated charging times and costs.
        </p>
        
      </div>

      {/* Image */}
      <div className="mb-12">
        <img
          src="/images/chrge.png"
          alt="EV Charging"
          className="rounded-xl shadow-md h-100 w-full"
        />
      </div>
    </div>

      {/* FAQs */}
      <div className="mb-12 flex pl-50 ">
        <h2 className="text-2xl font-semibold mb-4 p-4">EV Charging FAQs</h2>
        <div className="space-y-4">
          <details className="bg-gray-100 p-4 rounded-md">
            <summary className="font-semibold cursor-pointer">How to find a station?</summary>
            <p className="mt-2 text-gray-700">Use our interactive map or the “Explore Now” button in the navbar.</p>
          </details>
          <details className="bg-gray-100 p-4 rounded-md">
            <summary className="font-semibold cursor-pointer">How much does charging cost?</summary>
            <p className="mt-2 text-gray-700">Costs vary by location and charger type. Pricing is available in the station details.</p>
          </details>
          <details className="bg-gray-100 p-4 rounded-md">
            <summary className="font-semibold cursor-pointer">Best apps for tracking EV stations.</summary>
            <p className="mt-2 text-gray-700">Apps like PlugShare, ChargePoint, and EVgo are recommended.</p>
          </details>
        </div>
      </div>
      {/* Simple Charging Steps */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Charging Your EV in 4 Simple Steps</h2>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          {["Locate Station", "Plug-In", "Track Charging", "Unplug & Go"].map((step, i) => (
            <div
              key={i}
              className="p-6 bg-green-100 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl font-bold text-green-700 mb-2">{i + 1}</div>
              <p className="text-gray-800">{step}</p>
            </div>
          ))}
        </div>
      </div>


      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Get Started Now</h2>
        <p className="mb-4">Find the nearest EV chargers quickly.</p>
        <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
         
          <a href="/MapPage" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition">
          Find Nearby Chargers
  </a>
        </button>
      </div>
       
    

      
    </section>
  );
};

export default EvCharging;
