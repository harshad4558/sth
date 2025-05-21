import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../index.css";
import { SignIn } from '@clerk/clerk-react';
import { UserButton } from '@clerk/clerk-react';



const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <nav 
      className={`text-black fixed top-0 left-0 right-0 w-full z-50 p-4  mx-auto px-6 h-25 flex items-center justify-between  ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } transition-all duration-300`}
    >
      
      <div className="flex items-center justify-between w-full">
        {/* Left: Logo */}
        <div className="flex items-center" >
          <Link to="/home" className="block w-full">
            <img
              src="./logo1.png"
              alt="Logo"
              className="h-10 w-full object-contain"
            />
          </Link>
        </div>

        {/* Right: Links + Button */}
        <Link to="/" className="hover:text-cyan-600 font-medium transition-colors">Home</Link>
        <Link to="/EvCharging" className="hover:text-cyan-600 font-medium transition-colors">EV Charging</Link>
<Link to="/CyclingInfrastructure" className="hover:text-cyan-600 font-medium transition-colors">Cycling Infrastructure</Link>
<Link to="/PublicTransit" className="hover:text-cyan-600 font-medium transition-colors">Public Transit</Link>
<Link to="/CommunityFeedback" className="hover:text-cyan-600 font-medium transition-colors">Community and Feedback</Link>
<UserButton />

      </div>
  
    </nav>
  );
};

export default Navbar;
