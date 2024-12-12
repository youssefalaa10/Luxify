import FilteringBar from "@/components/Localities/filtering";
import PriceSlider from "@/components/Localities/PriceRange";
import PropertiesList from "@/components/Localities/PropertiesList";
import SinglePropertyCard from "@/components/Localities/singlePropertyCard";
import React from "react";

function Localities() {
  return (
    <div className="h-full">
      <div className="flex flex-1 h-full text-black w-full">
        <aside className="w-[350px] bg-transparent p-4 h-full border-r border-[#d1d1d1] px-10">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="h-[95%] flex flex-col justify-between">
            <FilteringBar />

            <div className="w-[250px]">
              <label className="block mb-2">Location</label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Enter location"
                  className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg
                  className="absolute left-3 top-2.5 w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C9.243 2 7 4.243 7 7c0 3 5 9 5 9s5-6 5-9c0-2.757-2.243-5-5-5zm0 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                </svg>
                <svg
                  className="absolute right-3 top-2.5 w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 15l-4-4h8l-4 4z"></path> {/* Down arrow icon */}
                </svg>
              </div>
            </div>

            <PriceSlider />

            <div>
              <label className="block mb-1">Rooms</label>

              <div className="flex justify-between p-1">
                <div className=" text-gray-800 -ml-1 -mb-6 w-12 h-8 bg-white text-center pt-1 rounded-md">
                  1
                </div>
                <div className=" text-gray-800 -ml-1 -mb-6 w-12 h-8 bg-white text-center pt-1 rounded-md">
                  2
                </div>
                <div className=" text-gray-800 -ml-1 -mb-6 w-12 h-8 bg-white text-center pt-1 rounded-md">
                  3
                </div>
                <div className=" text-gray-800 -ml-1 -mb-6 w-12 h-8 bg-white text-center pt-1 rounded-md">
                  4+
                </div>
              </div>
            </div>

            <div className="mt-8">
              <label className="block mb-2">Additional conveniences</label>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Garage
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Pet allowed
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Furnished
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Land plot
                </label>
              </div>
            </div>
          </div>
        </aside>
        {/* 
        <main className="w-3/4 p-4 overflow-y-scroll">
          <h2 className="text-2xl font-semibold mb-4">Search results (587)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Property"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">RedStone Station</h3>
                <p className="text-gray-400">22 Crystal St, NY</p>
                <p className="mt-2 text-xl font-bold">$3,095 / month</p>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-400">6 beds / 200m²</span>
                  <span className="text-gray-400">2 Garage</span>
                </div>
              </div>
            </div>

          </div>
        </main> */}
        <div className=" w-[33%]">
          <PropertiesList />
        </div>
        <SinglePropertyCard />
        {/* <aside className="w-1/3 bg-gray-700 p-4">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-2">LaQue House</h3>
            <p className="text-gray-400">19 LanaSanta St, NY</p>
            <p className="text-lg font-bold">$2,960 / month</p>
            <div className="grid grid-cols-3 gap-2">
              <img
                src="https://via.placeholder.com/100"
                alt="Detail 1"
                className="w-full h-24 object-cover"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Detail 2"
                className="w-full h-24 object-cover"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Detail 3"
                className="w-full h-24 object-cover"
              />
            </div>
            <p className="mt-4 text-gray-300">
              Properties details: The modern house offered for rent...
            </p>
            <button className="w-full mt-4 bg-blue-600 py-2 rounded-lg text-white font-semibold">
              Contact
            </button>
          </div>
        </aside> */}
      </div>
    </div>
  );
}

export default Localities;
