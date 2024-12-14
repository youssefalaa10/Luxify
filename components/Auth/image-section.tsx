import Image from "next/image";
import saopaulo from "@/public/saopaulo.jpg";

const ImageSection = () => {
  return (
    <div className="relative h-full w-full ">
      {/* Background Image */}
      <Image
        src={saopaulo}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full z-0 rounded-xl"
      />

      {/* Back Button */}
      <button className="absolute top-6 left-6 px-4 py-2 text-sm text-white bg-gray-700/50 rounded-lg hover:bg-gray-600/50 z-10">
        Back to website
      </button>

      {/* Text Content */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white">
        <h1 className="text-3xl font-semibold">Capturing Moments,</h1>
        <h1 className="text-3xl font-semibold">Creating Memories</h1>
        <div className="flex items-center justify-center mt-4 space-x-2">
          <span className="h-2 w-2 bg-gray-400 rounded-full"></span>
          <span className="h-2 w-2 bg-gray-400 rounded-full"></span>
          <span className="h-2 w-2 bg-gray-400 rounded-full"></span>
          <span className="h-2 w-2 bg-white rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;