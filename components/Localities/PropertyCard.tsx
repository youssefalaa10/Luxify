import React from "react";

interface PropertyCardProps {
  price: string;
  title: string;
  address: string;
  bedrooms: number;
  area: number;
  garages: number;
  image: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  price,
  title,
  address,
  bedrooms,
  area,
  garages,
  image,
}) => {
  return (
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden max-w-3xl my-2 h-[210px] mr-4">
      {/* Image Section */}
      <div className="w-2/5 p-4">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Details Section */}
      <div className="p-4 w-[50%] h-full flex flex-col justify-between ">
        <h3 className="text-blue-500 text-2xl font-semibold mb-1">
          ${price} <span className=" font-normal text-gray-500">/ month</span>
        </h3>
        <p className="text-black font-bold text-lg ">{title}</p>
        <p className="text-gray-400 text-md mb-4">{address}</p>
        <div className="flex text-sm text-gray-700 flex-wrap gap-1 h-[60px]">
          {/* Bedrooms */}
          <div className="flex items-center gap-1 rounded-lg bg-slate-200 w-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 8.25h3m0 0v-3m0 3H18m-4.5 0H6"
              />
            </svg>
            {bedrooms} Beds
          </div>
          {/* Area */}
          <div className="flex items-center gap-1 rounded-lg bg-slate-200 w-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v18m-6-6h12"
              />
            </svg>
            {area} m²
          </div>
          {/* Garages */}
          <div className="flex items-center gap-1 rounded-lg bg-slate-200 w-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10.5V6.75A1.5 1.5 0 014.5 5.25h15a1.5 1.5 0 011.5 1.5v3.75m-18 0v7.5a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-7.5m-18 0h18"
              />
            </svg>
            {garages} Garage
          </div>
        </div>
      </div>
      <div className="py-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          width="24"
          height="24"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </div>
    </div>
  );
};

export default PropertyCard;
