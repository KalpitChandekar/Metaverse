import About from "@/components/About";
import Explore from "@/components/Explore";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import Navbar from "@/components/Navbar";
import WhatsNew from "@/components/WhatsNew";
import World from "@/components/World";

const page = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        {/* <Feedback /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default page;
