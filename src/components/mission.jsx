import React from 'react';
import '../index.css';

const Mission = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 p-8 max-w-7xl mx-auto">
      {/* Image on the Left */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="./images/cycling.webp"
          alt="Mission"
          className="rounded-lg w-full max-w-md h-auto object-cover shadow-md"
        />
      </div>

      {/* Text Content on the Right */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
        <p className="text-gray-600 text-lg mb-4">
          Our mission is to build a sustainable future by promoting clean, efficient, and inclusive transportation systems.
          We envision a world where every citizen has access to eco-friendly mobility options, reducing carbon emissions
          and enhancing the quality of urban life.
        </p>
        <p className="text-gray-600 text-lg mb-4">
          Through innovation and collaboration with communities and government bodies, we aim to develop an intelligent
          transport network that supports electric vehicles, cycling infrastructure, and smart transit systems.
        </p>
        <p className="text-gray-700 text-lg">
          We aim to provide sustainable transport solutions for cities and individuals alike...
        </p>
      </div>
    </section>
  );
};

export default Mission;
