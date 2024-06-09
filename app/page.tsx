import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
};
export default page;
