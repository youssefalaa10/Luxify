import React, { useState, useRef } from "react";

const PriceSlider: React.FC = () => {
  // State for single value slider
  const [singleValue, setSingleValue] = useState<number>(92);

  // State for double value slider
  const [minValue, setMinValue] = useState<number>(15);
  const [maxValue, setMaxValue] = useState<number>(30);

  const minRange = 10;
  const maxRange = 150;

  // Refs to access the slider
  const sliderRef = useRef<HTMLDivElement>(null);

  // Calculate width percentage for single value slider
  const singleWidth = ((singleValue - minRange) / (maxRange - minRange)) * 100;

  // Calculate width and left position for double value slider
  const minWidth = ((minValue - minRange) / (maxRange - minRange)) * 100;
  const maxWidth = ((maxValue - minRange) / (maxRange - minRange)) * 100;
  const doubleWidth = maxWidth - minWidth;

  const handleMouseMove = (e: MouseEvent, isMin: boolean) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newValue = Math.round(
      (offsetX / rect.width) * (maxRange - minRange) + minRange
    );

    if (isMin) {
      setMinValue(Math.max(minRange, Math.min(newValue, maxValue - 5)));
    } else {
      setMaxValue(Math.min(maxRange, Math.max(newValue, minValue + 5)));
    }
  };

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
    isMin: boolean
  ) => {
    const handleMouseMoveBound = (event: MouseEvent) =>
      handleMouseMove(event, isMin);
    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMoveBound);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMoveBound);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      <div className="flex flex-col items-center mb-8 ">
        <h2 className="w-full">Price Range</h2>
        {/* Double Value Slider */}

        <div
          className="flex w-64 items-center h-28 justify-center"
          ref={sliderRef}
        >
          <div className="py-1 relative min-w-full">
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="absolute h-2 rounded-full bg-blue-600"
                style={{ width: `${doubleWidth}%`, left: `${minWidth}%` }}
              ></div>
              <div
                className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
                style={{ left: `${minWidth}%` }}
                onMouseDown={(e) => handleMouseDown(e, true)}
              >
                <div
                  className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
                  style={{ marginLeft: "-25px" }}
                >
                  <div className="relative shadow-md">
                    <div className="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">
                      ${minValue}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
                style={{ left: `${maxWidth}%` }}
                onMouseDown={(e) => handleMouseDown(e, false)}
              >
                <div
                  className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
                  style={{ marginLeft: "-25px" }}
                >
                  <div className="relative shadow-md">
                    <div className="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">
                      ${maxValue}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute text-gray-800 -ml-1 bottom-0 left-1 top-5 -mb-6 w-16 h-8 bg-white text-center pt-1 rounded-md">
                ${minRange}
              </div>
              <div className="absolute text-gray-800 -mr-1 bottom-0 right-1 top-5 -mb-6 w-16 h-8 bg-white text-center pt-1 rounded-md">
                ${maxRange}
              </div>
              <div className="absolute flex justify-between w-full top-14">
                <span className="ml-5">min</span>
                <span className="mr-5">max</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceSlider;
