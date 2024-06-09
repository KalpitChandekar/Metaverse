"use client";
import { motion } from "framer-motion";
import styles from "@/styles";
import { navVariants } from "@/utils/motion";
import Image from "next/image";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <Image
          src="/search.svg"
          alt="search"
          width={24}
          height={24}
          className="rounded-full"
        />
        <h2 className="text-[24px] leading-[30px] font-extrabold text-white">METAVERSUS</h2>
      </div>
    </motion.nav>
  );
};
export default Navbar;
