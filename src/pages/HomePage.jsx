import React from "react";
import NavBar from "../assets/components/ui/NavBar";
import Footer from "../assets/components/ui/Footer";
import HeroSection from "../sections/homepage/HeroSection";
import WhyUs from "../sections/homepage/WhyUs";
import Benefits from "../sections/homepage/Benefits";
import FAQs from "../sections/homepage/FAQs";
import ContactUs from "../sections/homepage/ContactUs";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        <NavBar />
      </nav>
      <main className="flex-grow">
        <HeroSection />
        <WhyUs />
        <Benefits />
        <ContactUs />
        <FAQs />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
