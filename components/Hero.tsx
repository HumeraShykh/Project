import React from 'react';

const Hero = () => {
  return (
    <div className="max-container text-center ">
      <span className="bg-blue-100 dark:text-blue-800 text bold-16 font-medium mt-4 inline-block mb-2 px-2.5 py-0.5 rounded">
        Build For Traders By Traders
      </span>
      <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 dark:text-black">
        Track, Analyze, and Improve Your Trading Performance
      </h1>
      <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-blue-900 dark:text-blue">
        Trading Performance
      </h1>
      <p className="mb-4 text-lg leading-relaxed">
        Edge Tracker is a powerful platform for traders to control their trading activities, improve results, and make data-driven decisions.
      </p>
      <button className="bg-blue-500 text-white px-6 py-3 btn-round mb-8 md:mb-0 md:mr-4">
        Get Started
      </button>
      <img src="Capture_3.png" alt="" className="mx-auto mt-6" />
    </div>
  );
};

export default Hero;
