import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-24 mt-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Contact Us
        </h2>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white shadow-md rounded-lg p-8">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message"
                  className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-secondary text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-orange-600 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <div className="bg-white shadow-md rounded-lg p-8 h-[500px]">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-4">
                We're here to answer your questions and help you with our
                services. Reach out to us anytime.
              </p>
              <p className="text-gray-800 mb-2">
                📞 <strong>Phone:</strong> +94 33 223 4567
              </p>
              <p className="text-gray-800 mb-2">
                📧 <strong>Email:</strong> support@fruitshop.lk
              </p>
              <p className="text-gray-800">
                📍 <strong>Address:</strong> 45 Main Road, Gampaha, Sri Lanka
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
