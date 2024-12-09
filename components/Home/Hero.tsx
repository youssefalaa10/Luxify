import Image from "next/image";
import saopaulo from "@/public/saopaulo.jpg";

const HeroSection = () => {
  return (
    <section className="relative mx-auto max-w-7xl mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Title and Search Field */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl font-semibold text-black leading-tight">
            Inspiring <br />
            Locations <br />
            to Lodge
          </h1>
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white shadow-md">
            <input
              type="text"
              placeholder="Search destinations, properties, or experiences"
              className="flex-grow text-gray-700 focus:outline-none"
            />
            <button className="px-6 py-2 bg-black text-white rounded-full hover:opacity-90">
              Search
            </button>
          </div>
        </div>

        {/* Right Section: Image Background, Button, and Stats Section */}
        <div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={saopaulo}
              alt="Exceptional Properties"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2 space-y-4">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold">
                Exceptional Properties Located In Stunning Surroundings
              </h2>
              <button className="flex items-center px-6 py-3 bg-white text-black rounded-full shadow-md hover:shadow-lg">
                Show Top-Rated Villas <span className="ml-2">➔</span>
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-black text-white rounded-full py-2 px-4 mx-auto mt-3">
            <div className="flex justify-between">
              <h2 className="text-3xl font-extrabold">2,000+</h2>
              <p className="text-xl font-medium">Unique Places</p>
            </div>
          </div>

          {/* Recommended Places Section */}
          <div className="flex justify-center gap-4 mt-3">
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src={saopaulo}
                alt="Recommended Places"
                className="object-cover w-80 h-50"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">
                  Recommended Places
                </h3>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src={saopaulo}
                alt="Private Island Rentals"
                className="object-cover w-80 h-50"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">
                  Private Island Rentals
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
