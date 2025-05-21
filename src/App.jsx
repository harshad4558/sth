
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import './App.css';
import Navbar from "./components/Navbar";
import Mission from './components/mission' 
import CarbonFootprint from './components/carbon';
import Features from './components/Features';
import CommunityFeedback from "./components/feedback";
import Footer from './components/Footer';
import CyclingInfrastructure from"./components/cycling-infrastructur";
import GetInTouch from "./components/getint";
import PublicTransit from "./components/publicTransit";
import Home from "./components/Home";
import EvCharging from "./components/EvCharging";
import MapPage from "./components/MapPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
function App() {
  
  const {user,isLoaded,isSignedIn } = useUser();
  if(!isSignedIn && isLoaded){
    return <Navigate to={'Authent/sign-in'} />
  }

  

  return (
    <>
   
      <Navbar />
      <Outlet />
      <Routes>
        <Route path="/" element={
          <>
          
          
            <Features />
            <Mission />
            <CarbonFootprint />
            <GetInTouch />
          </>
        } />
        <Route path="/CommunityFeedback" element={<CommunityFeedback />} />
        <Route path="/CyclingInfrastructure" element={<CyclingInfrastructure />} />
        <Route path="/MapPage" element={<MapPage />} />
        <Route path="/PublicTransit" element={<PublicTransit />} />
        <Route path="/EvCharging" element={<EvCharging />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App
