import React from "react";

const PublicTransit = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto pt-30">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Public Transit Solutions</h1>
      <p className="text-lg text-gray-700 mb-10">
        Public transportation is essential for a sustainable and inclusive future. We're
        working on modernizing and expanding transit options that are efficient,
        affordable, and eco-friendly.
      </p>

      {/* Transit Benefits */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Invest in Public Transit?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Reduces road traffic and air pollution</li>
            <li>Provides affordable transport options for all</li>
            <li>Promotes inclusive urban growth</li>
            <li>Decreases reliance on personal vehicles</li>
          </ul>
        </div>
        <div>
          <img
            src="./images/public-transit.png"
            alt="Public Transit"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Ongoing Projects */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Initiatives</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Electric Buses",
              desc: "Introducing clean, electric-powered buses for urban routes.",
            },
            {
              title: "Metro Expansion",
              desc: "Supporting metro rail projects in fast-growing cities.",
            },
            {
              title: "Unified Transit Pass",
              desc: "One card for all transport modes—bus, metro, train, and more.",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-green-700 mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 text-white p-8 rounded-xl text-center shadow-lg mb-12">
        <h2 className="text-3xl font-bold mb-4">Transforming Commutes, One Route at a Time</h2>
        <p className="mb-6">
          Experience the future of smart and connected public transport.
        </p>
        <button className="bg-white text-green-700 font-bold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Plan Your Transit Route
        </button>
      </div>

      {/* Commuter Stories */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">What Commuters Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Neha Patil",
              text: "The new electric buses are quiet, clean, and always on time!",
            },
            {
              name: "Raj Singh",
              text: "I save so much money using the city metro every day.",
            },
            {
              name: "Meena D’Souza",
              text: "With one smart card, I travel between bus, train, and metro—it’s so easy!",
            },
          ].map((story, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow border">
              <p className="text-gray-700 italic mb-2">“{story.text}”</p>
              <p className="text-green-700 font-bold">– {story.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicTransit;