import Header from "@/components/Home/Header";
import HeroSection from "@/components/Home/Hero";
import Localities from "@/components/Home/Localities";
import PropertyProcess from "@/components/Home/property-process";
import WhatWeDo from "@/components/Home/we-do";
import AboutUs from "../../components/Home/AboutUs";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PropertyProcess />
      <WhatWeDo/>
      <Localities />
      <AboutUs/>
    </div>
  );
};

export default HomePage;
