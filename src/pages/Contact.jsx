import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent ✅");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us 📩</h1>
      <p className="text-center text-gray-600 mb-8">
        Have any questions? We'd love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-gray-100 p-6 rounded-lg space-y-4">
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <p className="text-gray-600">
            You can reach us via email, phone, or visit us at our office.
          </p>

          <div>
            <p className="font-medium">📍 Address:</p>
            <p className="text-gray-600">123 E-commerce St, New Delhi, India</p>
          </div>

          <div>
            <p className="font-medium">📧 Email:</p>
            <p className="text-gray-600">support@yourshop.com</p>
          </div>

          <div>
            <p className="font-medium">📞 Phone:</p>
            <p className="text-gray-600">+91 9876543210</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
