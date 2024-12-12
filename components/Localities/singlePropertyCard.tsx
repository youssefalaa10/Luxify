import React from "react";
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaCar,
  FaSwimmingPool,
} from "react-icons/fa";

const SinglePropertyCard = () => {
  return (
    <div
      className=" mx-auto bg-white shadow-lg overflow-hidden border border-gray-200 p-5"
      style={{ width: "calc(70% - 400px)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Main Image */}
        <div className="relative md:col-span-2 ">
          <img
            src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="LaQue House"
            className="w-full h-full object-cover rounded-lg"
          />
          <button className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full shadow-md">
            360°
          </button>
        </div>

        {/* Thumbnails */}
        <div className="px-4">
          <div className="grid grid-cols-1 gap-2 h-full">
            <img
              src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Bedroom"
              className="w-full max-h-32 object-cover rounded-md"
            />
            <img
              src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Bathroom"
              className="w-full max-h-32 object-cover rounded-md"
            />
            <img
              src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Kitchen"
              className="w-full max-h-32 object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="p-6">
        <div className="w-full flex justify-between">
          <div className="">
            <h2 className="text-2xl font-semibold mb-2">LaQue House</h2>
            <p className="text-gray-500 flex items-center mb-4">
              <FaMapMarkerAlt className="mr-2" /> 19 LanaSanta St, NY
            </p>
          </div>
          <h3 className="text-blue-500 text-2xl font-semibold mb-1">
            $2,960 <span className=" font-normal text-gray-500">/ month</span>
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
          <div className="flex items-center justify-center gap-1 rounded-lg bg-slate-200 w-32">
            <FaBed /> 5 Bedrooms
          </div>
          <div className="flex items-center justify-center gap-1 rounded-lg bg-slate-200 w-32">
            <FaBath /> 2 Bathrooms
          </div>
          <div className="flex items-center justify-center gap-1 rounded-lg bg-slate-200 w-32">
            <FaCar /> 1 Garage
          </div>
          <div className="flex items-center justify-center gap-1 rounded-lg bg-slate-200 w-32">
            <FaSwimmingPool /> Pool
          </div>
        </div>

        <div className="text-gray-600 mb-4">
          <h3 className="text-xl font-semibold">Properties details</h3>
          <p>
            The modern house offered for rent is an ideal option for those who
            appreciate a high quality of life. The house has large, spacious
            rooms with high ceilings and large windows that let in lots of
            natural light. The interior is decorated in a modern style with high
            quality materials and stylish details...
          </p>
        </div>

        <div className="flex items-center gap-4 border-t pt-4 mt-4">
          <img
            src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Michael Joseph"
            className="w-12 h-12 rounded-full border"
          />
          <div>
            <p className="font-semibold">Michael Joseph</p>
            <p className="text-gray-500 text-sm">4.8 (15 reviews)</p>
          </div>
          <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
            Contact
          </button>
          <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-300">
            Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePropertyCard;
