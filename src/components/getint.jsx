import React, { useState } from "react";

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // Added phone state
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (name && email && message && phone) {
      const formData = { name, email, phone, message };

      try {
        // Send the data to the backend API
        const response = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.success) {
          setIsSubmitted(true);
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        alert("Error submitting the form. Please try again.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section className="py-20 px-4 md:px-20 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Get in Touch</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Have questions or feedback? We'd love to hear from you. Fill out the form below to get in touch.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Your Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Your Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Your Phone Number:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Your Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Write your message"
              rows="4"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg"
            >
              Send Message
            </button>
          </div>
        </form>

        {isSubmitted && (
          <div className="mt-6 text-center text-xl text-gray-800">
            <p className="font-semibold">Thank you for reaching out!</p>
            <p className="text-gray-600">
              We'll get back to you as soon as possible. Stay connected!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GetInTouch;
