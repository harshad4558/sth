import React, { useState } from "react";
import Navbar from "./Navbar";




const CommunityFeedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setFormData({
      name: "",
      email: "",
      feedback: "",
    });
  };

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto pt-30">
      <Navbar />
      <h1 className="text-4xl font-bold text-green-700 mb-6">Community & Feedback</h1>
      <p className="text-lg text-gray-700 mb-10">
        Your opinion matters! We value your feedback on how we can improve sustainable transportation systems in our community. Share your ideas, suggestions, and experiences to help us grow.
      </p>

      {/* Feedback Form */}
      <div className="bg-white p-8 rounded-xl shadow-md mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">We'd Love to Hear from You</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="feedback" className="block text-gray-700 font-medium mb-2">
              Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              rows="6"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>

      {/* Community Insights */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Community Insights</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-4">How Can We Improve Public Transit?</h3>
            <p className="text-gray-600">
              Many community members have shared ideas on making public transit more accessible, affordable, and environmentally friendly. Here are some common suggestions:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-600">
              <li>Better frequency and timeliness of buses</li>
              <li>Enhanced safety and security features on public transit</li>
              <li>Expanded routes to underserved areas</li>
              <li>Subsidized fares for low-income passengers</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Cycling Infrastructure Suggestions</h3>
            <p className="text-gray-600">
              With growing interest in cycling, the community has expressed support for better cycling infrastructure, such as:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-600">
              <li>Protected bike lanes in high-traffic areas</li>
              <li>Increased bike-sharing stations</li>
              <li>More bike repair stations and parking spaces</li>
              <li>Integration of cycling routes with public transportation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-green-600 text-white p-8 rounded-xl text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Join the Movement</h2>
        <p className="mb-4">Stay connected with us and advocate for a cleaner, healthier transportation system.</p>
        <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
          Subscribe for Updates
        </button>
      </div>
    </div>
  );
};

export default CommunityFeedback;
