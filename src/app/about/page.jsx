import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE - TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Qurbani Online Bazar
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Qurbani Online Bazar is a smart platform that helps you buy and sell
            sacrificial animals easily. It removes the hassle of searching for
            healthy animals and trusted sellers during Qurbani season.
          </p>

          <p className="text-gray-600 leading-relaxed">
            You can explore different animals, compare prices, and connect with
            verified sellers — all in one place. Our goal is to make your
            Qurbani experience simple, fast, and reliable.
          </p>
        </div>

        {/* RIGHT SIDE - FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          
          <div className="bg-green-50 p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-1">🐄 Trusted Sellers</h3>
            <p className="text-sm text-gray-600">
              Verified sellers ensure safe and reliable transactions.
            </p>
          </div>

          <div className="bg-green-50 p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-1">💰 Fair Prices</h3>
            <p className="text-sm text-gray-600">
              Transparent pricing with no hidden costs.
            </p>
          </div>

          <div className="bg-green-50 p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-1">📱 Easy Use</h3>
            <p className="text-sm text-gray-600">
              Simple browsing and quick communication.
            </p>
          </div>

          <div className="bg-green-50 p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-1">⚡ Fast Process</h3>
            <p className="text-sm text-gray-600">
              Find and book your animal without hassle.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;