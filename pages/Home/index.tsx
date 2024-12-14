import Header from "@/components/Home/Header";
import HeroSection from "@/components/Home/Hero";
import PropertyProcess from "@/components/Home/property-process";
import WhatWeDo from "@/components/Home/we-do";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PropertyProcess />
      <WhatWeDo/>
    </div>
  );
};

export default HomePage;
