

import React, { useEffect, useState, useRef } from "react";

const CarbonFootprint = () => {
  // Manual Calculation States
  const [manualDistance, setManualDistance] = useState("");
  const [vehicleType, setVehicleType] = useState("car");
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  const emissionFactors = {
    car: 120,
    bike: 0,
    bus: 60,
    train: 40,
  };

  const handleCalculate = () => {
    if (manualDistance && vehicleType) {
      const emission = emissionFactors[vehicleType] * manualDistance;
      setCarbonFootprint(emission);
    }
  };

  // Live Tracking States
  const [distance, setDistance] = useState(0);
  const [footprint, setFootprint] = useState(0);
  const [tracking, setTracking] = useState(false);
  const watchIdRef = useRef(null);
  const lastPositionRef = useRef(null);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const toRad = (angle) => (angle * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const startTracking = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
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
          setFootprint((prev) => prev + d * 0.21); // 0.21 kg/km
        }
        lastPositionRef.current = { lat: latitude, lng: longitude };
      },
      (err) => {
        console.error("Geolocation error:", err);
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
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Manual Calculation */}
      <section className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-xl mb-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Calculate Your Carbon Footprint
          </h2>
          <p className="text-gray-600">
            Enter your travel distance and mode of transport.
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Distance (in km):</label>
          <input
            type="number"
            value={manualDistance}
            onChange={(e) => setManualDistance(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Enter distance"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Mode of Transport:</label>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
          >
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="bus">Bus</option>
            <option value="train">Train</option>
          </select>
        </div>

        <div className="text-center">
          <button
            onClick={handleCalculate}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Calculate
          </button>
        </div>

        {carbonFootprint !== null && (
          <div className="mt-6 text-center text-xl text-gray-800">
            <p>
              Estimated CO₂:{" "}
              <span className="font-bold">{carbonFootprint.toFixed(2)}</span>{" "}
              grams
            </p>
          </div>
        )}
      </section>

      {/* Live Tracker */}
      <section className="max-w-md mx-auto p-6 bg-white rounded shadow text-center">
        <h2 className="text-xl font-bold mb-4">
          Live Carbon Footprint Tracker
        </h2>
        <p>Distance Traveled: {distance.toFixed(0.5)} km</p>
        <p>Estimated CO₂: {footprint.toFixed(0.5)} kg</p>

        {!tracking ? (
          <button
            onClick={startTracking}
            className="bg-green-600 text-white px-4 py-2 mt-4 rounded"
          >
            Start Tracking
          </button>
        ) : (
          <button
            onClick={stopTracking}
            className="bg-red-600 text-white px-4 py-2 mt-4 rounded"
          >
            Stop Tracking
          </button>
        )}
      </section>
    </div>
  );
};

export default CarbonFootprint;




