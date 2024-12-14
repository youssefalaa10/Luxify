import React, { useState } from "react";

const PropertyForm = () => {
  const [unitName, setUnitName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("Indonesia");
  const [rentalCost, setRentalCost] = useState(750);
  const [minDuration, setMinDuration] = useState(6);
  const [additionalRules, setAdditionalRules] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className=" mx-auto p-4 w-full">
      {/* Form Container */}
      <div className="flex gap-2 w-5/6 mx-auto justify-around">
        <div className="flex flex-col w-4/5 mx-auto">
          <h2 className="text-2xl font-semibold mb-4 w-4/5  text-black mx-auto">
            About Properties
          </h2>
          {/* Left Side: Input Fields */}
          <div className="rounded-lg bg-white w-4/5  p-[5%] m-auto">
            {/* Unit Information */}
            <div className="mb-4">
              <label
                htmlFor="unit_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Unit Name*
              </label>
              <input
                type="text"
                id="unit_name"
                value={unitName}
                onChange={(e) => setUnitName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter unit name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="unit_image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Unit Image*
              </label>
              <input
                type="file"
                id="unit_image"
                onChange={handleImageUpload}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            {/* Location */}
            <div className="mb-4">
              <label
                htmlFor="street_address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Street Address*
              </label>
              <input
                type="text"
                id="street_address"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Street address"
                required
              />
            </div>

            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label
                  htmlFor="zip_code"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Zip Code*
                </label>
                <input
                  type="text"
                  id="zip_code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter zip code"
                  required
                />
              </div>

              <div className="w-1/2">
                <label
                  htmlFor="state"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  State*
                </label>
                <select
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="Indonesia">Indonesia</option>
                  <option value="India">India</option>
                  <option value="England">England</option>
                </select>
              </div>
            </div>

            {/* Price & Duration */}
            <div className="mb-4">
              <label
                htmlFor="rental_cost"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Rental Cost*
              </label>
              <div className="flex items-center gap-2">
                <span className="text-gray-700 dark:text-white">$</span>
                <input
                  type="number"
                  id="rental_cost"
                  value={rentalCost}
                  onChange={(e) => setRentalCost(Number(e.target.value))}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                <span className="text-gray-700 dark:text-white">Per Month</span>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="min_duration"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Minimum Rental Duration*
              </label>
              <input
                type="number"
                id="min_duration"
                value={minDuration}
                onChange={(e) => setMinDuration(Number(e.target.value))}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Minimum duration in months"
                required
              />
            </div>

            {/* Additional Rules */}
            <div className="mb-4">
              <label
                htmlFor="additional_rules"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Additional Rules
              </label>
              <input
                type="text"
                id="additional_rules"
                value={additionalRules}
                onChange={(e) => setAdditionalRules(e.target.value)}
                placeholder="Add rules"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="w-2/5 h-[400px]">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Quick Preview
          </h2>
          <div className="border rounded-lg shadow-md bg-white p-4 h-[85%]">
            {previewImage ? (
              <img
                src={previewImage}
                alt="Property"
                className="w-full h-40 object-cover rounded mb-4"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                No Image Uploaded
              </div>
            )}
            <h3 className="text-xl font-semibold">{unitName || "Unit Name"}</h3>
            <p className="text-gray-600">{streetAddress || "Street Address"}</p>
            <p className="text-blue-600 font-semibold mt-2">
              ${rentalCost} / month
            </p>
            <p className="text-gray-600">
              Minimum duration: {minDuration} months
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-between mx-auto w-5/6 pl-[5.5%] mt-[3%]">
        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded">
          Back
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Save Draft
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Continue
        </button>
      </div>
    </div>
  );
};

export default PropertyForm;
