import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-500  py-10 mt-16 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6 text-sm ">
        
        {/* Links */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 ">
          <a href="/EvCharging" className="hover:underline ">EV Charging</a>
          <a href="/CyclingInfrastructure" className="hover:underline ">Cycling Infrastructure</a>
          <a href="/PublicTransit" className="hover:underline ">Public Transit</a>
        </div>

        {/* Social Media */}
        <div className="flex justify-center items-center gap-4 ">
          <a href="#" className="hover:underline ">Twitter</a>
          <a href="#" className="hover:underline ">Facebook</a>
        </div>

        {/* Description */}
        <p className="text-black-300">
          Empowering sustainable transport through community and innovation.
        </p>

        {/* Copyright */}
        <div className="text-black-400 ">
          &copy; {new Date().getFullYear()} Sustainable Hub. | 
          <a href="#" className="hover:underline px-2">Terms & Conditions</a> | 
          <a href="#" className="hover:underline px-2">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 
