import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h2 className="text-[44px] font-semibold mb-11">Fix your Sales</h2>
      <h1 className="text-[72px] sm:text-[72px] font-bold text-center leading-snug mb-6">
        Enabling Human Intelligence with <br />
        Artificial Intelligence
      </h1>
      <a
        href="/"
        className="text-orange-500 hover:text-orange-600 mt-4 text-lg"
      >
        Join the waitlist &gt;
      </a>
    </div>
  );
};

export default Hero;