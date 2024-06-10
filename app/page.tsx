import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
      </div>
      <h1>hi</h1>
    </div>
  );
};
export default page;
