import React, { useEffect, useState, useRef } from 'react';

function CarbonFootprint() {
  const [distance, setDistance] = useState(0);
  const [footprint, setFootprint] = useState(0);
  const [tracking, setTracking] = useState(false);
  const watchIdRef = useRef(null);
  const lastPositionRef = useRef(null);

  // Haversine Formula to calculate distance between two coordinates
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in km
    const toRad = angle => (angle * Math.PI) / 180;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const startTracking = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    setTracking(true);
    watchIdRef.current = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        if (lastPositionRef.current) {
          const last = lastPositionRef.current;
          const d = calculateDistance(last.lat, last.lng, latitude, longitude);
          setDistance((prev) => prev + d);
          setFootprint((prev) => prev + d * 0.21); // 0.21 kg/km factor
        }

        lastPositionRef.current = { lat: latitude, lng: longitude };
      },
      (err) => {
        console.error('Geolocation error:', err);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 5000,
      }
    );
  };

  const stopTracking = () => {
    navigator.geolocation.clearWatch(watchIdRef.current);
    setTracking(false);
  };

  return (
    <div className="max-w-md p-4 bg-white rounded shadow text-center">
      <h2 className="text-xl font-bold mb-4">Live Carbon Footprint Tracker</h2>
      <p>Distance Traveled: {distance.toFixed(2)} km</p>
      <p>Estimated CO₂ Footprint: {footprint.toFixed(2)} kg</p>

      {!tracking ? (
        <button onClick={startTracking} className="bg-green-600 text-white px-4 py-2 mt-4 rounded">
          Start Tracking
        </button>
      ) : (
        <button onClick={stopTracking} className="bg-red-600 text-white px-4 py-2 mt-4 rounded">
          Stop Tracking
        </button>
      )}
    </div>
  );
}

export default CarbonFootprint;