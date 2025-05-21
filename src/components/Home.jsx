import React from 'react';
import { useNavigate } from "react-router-dom";
// import Features from '../components/Features';
// import Mission from '../components/Mission';
// import CarbonFootprint from '../components/Carbon';
// import CommunityFeedback from '../components/Feedback';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <>
    {/* Hero Section */}
      
    <section 
        className="mix-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white text-center px-4 py-40" 
        style={{
          //  height: '840px',
          backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)),url('/images/hero.png')",
        }}
      >
        
        {/* <Navbar /> */}
        <div className="flex flex-col justify-center items-center space-y-6 pt-5">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 pt-6">Sustainable Transportation: A Guide to Eco-Friendly Travel</h1>
        <p className="max-w-xl text-lg md:text-xl mb-6 pt-4 ">
          Discover and connect with eco-friendly travel options—EV charging, public transit, and more!
        </p>
        <p className="max-w-xl text-lg md:text-xl mb-6 pt-0 pl-10 pb-20 pr-10"> 
        Discover eco-friendly travel options with our platform. We provide real-time updates, community feedback, and comprehensive tools to help you find EV charging stations, cycling routes, and public transit options. Join us in making sustainable travel accessible and easy for everyone.

        </p>
        <button
          onClick={()=>navigate('/MapPage')}
          className="bg-green-600 hover:bg-green-700 mt-6 px-16 py-6 rounded text-black font-semibold transition"
     >
          Find Route
        </button>
        </div>
        {/* <div className="rounded-lg overflow-hidden shadow-lg">
        <Mission />
        </div>
       <div className="rounded-lg overflow-hidden shadow-lg">
       <Features />
       </div>
       <div className="rounded-lg overflow-hidden shadow-lg">
       <CarbonFootprint />
       </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
        <GetInTouch />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
        <WhyUs />
        </div> */}
       

        {/* <Features />
      <Mission />
      <CarbonFootprint />
      <CommunityFeedback /> */}
      

      

      </section>
      

      
    </>
  );
};

export default Home;
