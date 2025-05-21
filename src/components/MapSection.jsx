import React, { useEffect, useRef, useState } from 'react';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder';
import { OpenStreetMapProvider } from "leaflet-geosearch";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';


const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const PLACES_API_KEY = 'YOUR_GOOGLE_API_KEY_HERE'; // Add your Google API key here

const RoutingMachine = ({ from, to }) => {
  const map = useMap();

  useEffect(() => {
    if (!from || !to) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(from.lat, from.lng), L.latLng(to.lat, to.lng)],
      routeWhileDragging: false,
      show: false,
      addWaypoints: false,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [from, to, map]);

  return null;
};

const SearchControl = ({ setDestination }) => {
  const map = useMap();

  useEffect(() => {
    const geocoder = L.Control.geocoder({
      defaultMarkGeocode: false,
      geocoderOptions: {
        key: PLACES_API_KEY, // Include the API key here for Google Geocoding
      }
    })
      .on('markgeocode', function (e) {
        const center = e.geocode.center;
        setDestination({ lat: center.lat, lng: center.lng });
        map.setView(center, 14);
      })
      .addTo(map);

    return () => {
      map.removeControl(geocoder);
    };
  }, [map, setDestination]);

  return null;
};

const MapSection = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [mode, setMode] = useState('ev');
  const mapRef = useRef();
  
  useEffect(() => {
    // Ask for user location
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      },
      () => {
        alert('Please allow location access to use the map.');
      }
    );
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;
    const leafletMap = map.leafletElement || map;

    // Add destination search control
    const geocoder = L.Control.geocoder({
      defaultMarkGeocode: false,
      geocoderOptions: {
        key: PLACES_API_KEY, // Use the API key for geocoding
      },
    })
      .on('markgeocode', function (e) {
        const center = e.geocode.center;
        setDestination({ lat: center.lat, lng: center.lng });
        leafletMap.setView(center, 14);
      })
      .addTo(leafletMap);
  }, []);

  useEffect(() => {
    if (mode === "cycle" && !destination) {
      alert("Please search and select your destination for the cycling route.");
    }
  }, [mode, destination]);
  
  // Static EV stations
  const evStations = [
    { name: 'EV Station 1', lat: 20.5937, lng: 78.9629 },
    { name: 'EV Station 2', lat: 20.601, lng: 78.97 },
  ];

  // Static polyline for cycling route
  const cycleRoute = [
    [20.5937, 78.9629],
    [20.595, 78.965],
    [20.6, 78.97],
  ];

  return (
    <div>
      <div className="flex justify-center my-4">
        <select
          onChange={(e) => setMode(e.target.value)}
          className="border rounded p-2"
        >
          <option value="ev">🚗 EV Station</option>
          <option value="cycle">🚲 Cycling Route</option>
          <option value="transit">🚌 Public Transit</option>
        </select>
      </div>

      <MapContainer
        center={userLocation || [20.5937, 78.9629]}
        zoom={13}
        style={{ height: '80vh', width: '100%' }}
        ref={mapRef}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {mode === "cycle" && (
          <SearchControl setDestination={setDestination} />
        )}
        
        {/* Show user location marker */}
        {userLocation && <Marker position={userLocation} icon={defaultIcon} />}

        {/* Destination marker if selected */}
        {destination && <Marker position={destination} icon={defaultIcon} />}

        {/* EV Station markers */}
        {mode === 'ev' &&
          evStations.map((station, idx) => (
            <Marker
              key={idx}
              position={[station.lat, station.lng]}
              icon={defaultIcon}
            />
          ))}

        {/* Cycling route polyline */}
        {mode === 'cycle' && userLocation && destination && (
          <Polyline
            positions={[userLocation, destination]}
            color="blue"
          />
        )}

        {/* Public transit routing */}
        {mode === 'transit' &&
          userLocation &&
          destination && (
            <RoutingMachine from={userLocation} to={destination} />
          )}
      </MapContainer>
    </div>
  );
};

export default MapSection;
