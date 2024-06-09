"use client";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import Image from "next/image";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="sm:px-16 px-6 py-8 relative"
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className="2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8">
        <Image
          src="/search.svg"
          alt="search"
          width={24}
          height={24}
          className="rounded-full"
        />
        <h2 className="text-[24px] leading-[30px] font-extrabold text-white">
          METAVERSUS
        </h2>
        <Image
          src="/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="rounded-full"
        />
      </div>
    </motion.nav>
  );
};
export default Navbar;
