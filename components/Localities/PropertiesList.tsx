import React from "react";
import PropertyCard from "./PropertyCard";

const PropertiesList: React.FC = () => {
  const properties = [
    {
      price: "3,095",
      title: "RedStone Station",
      address: "22 Crystal St, NY",
      bedrooms: 6,
      area: 200,
      garages: 2,
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with a real image URL
    },
    {
      price: "2,500",
      title: "GreenField Villas",
      address: "45 Elm St, CA",
      bedrooms: 4,
      area: 150,
      garages: 1,
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with a real image URL
    },
    {
      price: "4,200",
      title: "BlueOcean Estate",
      address: "12 Harbor Rd, FL",
      bedrooms: 5,
      area: 250,
      garages: 3,
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      price: "4,200",
      title: "BlueOcean Estate",
      address: "12 Harbor Rd, FL",
      bedrooms: 5,
      area: 250,
      garages: 3,
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="h-full bg-transparent  p-4 ml-4 ">
      <h1 className="text-3xl font-bold mb-6 text-start">Property Listings</h1>
      <div className="h-[calc(100vh-200px)] overflow-y-scroll">
        <div className="flex flex-col justify-between">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              price={property.price}
              title={property.title}
              address={property.address}
              bedrooms={property.bedrooms}
              area={property.area}
              garages={property.garages}
              image={property.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesList;
