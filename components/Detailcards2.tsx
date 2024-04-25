import React from 'react';

const Detailcards2 = () => {
  return (
    <div className="max-container flex flex-col md:flex-row items-center justify-center">
      <div className="align-vertically3">
      <a href="#" className="flex flex-col flexStart max-w-sm m-4 p-6 bg-light border-white btn-round shadow hover:bg-white dark:bg-white dark:border-gray-700 dark:hover:bg-white-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black ">Daily Insights</h5>
        <p className="font-normal text-black dark:text-black">
          Gain valuable trading insights based on your daily trades. Unlock powerful analysis and personalized recommendations to enhance your trading strategies and capitalize on market opportunities.
        </p>
        <img src="card3.jpg" alt="image" className="mx-auto mt-4 mr-2 pr-2" />
      </a>
      </div>
      <div className="align-vertically4">
      <a href="#" className="flex flex-col flexStart max-w-sm m-4 p-6 bg-light border-black btn-round shadow hover:bg-black dark:bg-black dark:border-black dark:hover:bg-black md:mt-0 md:ml-12">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">Traders LeaderBoard</h5>
        <p className="font-normal text-white dark:text-white">
          Rise to the top of the ranks based on your daily trades. Compete with fellow traders, track your performance, and see how you stack up on the dynamic Leaderboard.
        </p>
        <img src="card4.jpg" alt="image" className="mx-auto mt-4 mr-2 pr-2" />
      </a>
      </div>
    </div>
  );
};

export default Detailcards2;
