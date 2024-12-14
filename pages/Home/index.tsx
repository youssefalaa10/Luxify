import Header from "@/components/Home/Header";
import HeroSection from "@/components/Home/Hero";
import PropertyProcess from "@/components/Home/property-process";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PropertyProcess />
    </div>
  );
};

export default HomePage;
