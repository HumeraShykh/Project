import React from 'react';

const Detailcards = () => {
  return (
    <div className="max-container flex flex-col md:flex-row items-center justify-center">
      <div className="">
        <a href="#" className="flex flex-col flexStart max-w-sm m-4 p-6 bg-light border-blue-500 btn-round shadow hover:bg-blue-500 dark:bg-blue-500 dark:border-gray-700 dark:hover:bg-blue-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">Trades Details</h5>
        <p className="font-normal text-white dark:text-white">
          View and analyze your trade details effortlessly. Explore comprehensive information about your trade, including entry/exit prices, position sizes, and durations. Capture a snapshot for a detailed trade overview.
        </p>
        <img src="card1.jpg" alt="image" className="mx-auto mt-4 mr-2 pr-2" />
      </a>
      </div>
      <div className="align-vertically2">
      <a href="#" className="flex flex-col flexStart max-w-sm m-4 p-6 bg-light border-gray-400 btn-round shadow hover:bg-gray-400 dark:bg-gray-400 dark:border-gray-400 dark:hover:bg-gray-400 md:mt-0 md:ml-12">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-900 ">Create Your Team</h5>
        <p className="font-normal text-white dark:text-blue-900">
          Build and manage trading teams effortlessly. Create teams, track team members' trading details, and gain insights into overall performance. Stay competitive with the leader board and foster collaboration for trading success.
        </p>
        <img src="card2.jpg" alt="image" className="mx-auto mt-4 mr-2 pr-2" />
      </a>
      </div>
    </div>
  );
};

export default Detailcards;
