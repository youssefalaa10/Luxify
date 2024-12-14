import React from 'react';

interface StepItem {
  id: number;
  title: string;
  description: string;
  color: string;
  outline: string;
  text: string;
}

const PropertyProcess: React.FC = () => {
  const data: StepItem[] = [
    {
      id: 1,
      title: "Explore",
      description: "Submit your insurance order through our platform",
      color: "border-[#9dbdba]",
      outline: "outline-[#9dbdba]",
      text: "text-[#01889F]"
    },
    {
      id: 2,
      title: "Select a Property",
      description: "Receive competitive offers from certified workshops",
      color: "border-[#01889F]",
      outline: "outline-[#01889F]",
      text: "text-[#01889F]"
    },
    {
      id: 3,
      title: "Book a site",
      description: "picks up your property",
      color: "border-[#9dbdba]",
      outline: "outline-[#9dbdba]",
      text: "text-[#01889F]"
    },
    {
      id: 4,
      title: "Book your Property",
      description: "Repairs completed with quality assurance",
      color: "border-[#01889F]",
      outline: "outline-[#01889F]",
      text: "text-[#01889F]"
    },
 
  ];

  return (
    <section className="relative mt-20 mb-14 pt-20">
        <h4 className="font-[900] text-[35px] text-center lg:mb-24">
          Property Selection Process
        </h4> 
      {/* Decorative circle */}
      <div className="border-[5px] border-primary size-[300px] rounded-full absolute top-[-100px] left-[-150px] hidden xl:block" />
      
      <div className="container mx-auto px-6 py-6 flex flex-col items-center">
     

        {/* Desktop version */}
        <div className="hidden lg:flex gap-2 justify-center items-center">
          {data.map((item, index) => (
            <div key={index}>
              <div
                className={`flex justify-center items-center w-[200px] h-[100px] border-b-0 rounded-t-full border-[15px] ${
                  item.color
                } ${item.id % 2 === 0 ? "translate-y-[-95px] -ml-[23px]" : "rotate-180 -ml-[23px]"}`}
              >
                <div
                  className={`bg-white w-[100px] h-[100px] flex justify-center items-center text-6xl ${
                    item.text
                  } font-bold outline outline-[11px] ${item.outline} rounded-full ${
                    item.id % 2 === 0 ? "translate-y-[38px]" : "translate-y-[38px] rotate-180"
                  }`}
                >
                  {item.id}
                </div>
              </div>
              <div className="h-[100px]">
                <h4 className={`${item.text} text-center mt-4 font-bold text-[18px]`}>
                  {item.title}
                </h4>
                <p className="max-w-[160px] text-center text-white text-sm mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile version */}
        <div className="flex flex-col items-center gap-6 lg:hidden">
          {data.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col items-center">
                <div className={`size-[150px] border-[15px] ${item.color} rounded-full flex justify-center items-center`}>
                  <div className={`size-[80px] rounded-full border-[10px] ${item.color} flex justify-center items-center bg-white`}>
                    <span className={`${item.text} font-bold text-4xl`}>{item.id}</span>
                  </div>
                </div>
                <div>
                  <h4 className={`${item.text} text-center mt-4 font-bold text-[18px]`}>
                    {item.title}
                  </h4>
                  <p className="max-w-[160px] text-center text-white text-sm mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyProcess;