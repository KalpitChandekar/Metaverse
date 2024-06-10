"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "./CustomTexts";

const About = () => {
  return (
    <section className="sm:px-16 px-6 relative z-10">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="lg:w-[80%] w-[100%] mx-auto flex justify-center items-center flex-col"
      >
        <TypingText title="| About Metaversus" textStyles="text-centre" />

        <motion.p
          variants={fadeIn({
            direction: "up",
            type: "tween",
            delay: 0.2,
            duration: 1,
          })}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">Metaverse</span> is a new
          thing in the future, where you can enjoy the virtual world by feeling
          like it`s really real, you can feel what you feel in this metaverse
          world, because this is really the{" "}
          <span className="font-extrabold text-white">
            madness of the metaverse
          </span>{" "}
          of today, using only{" "}
          <span className="font-extrabold text-white">VR</span> devices you can
          easily explore the metaverse world you want, turn your dreams into
          reality. Let`s{" "}
          <span className="font-extrabold text-white">explore</span> the madness
          of the metaverse by scrolling down
        </motion.p>

        <motion.img
          variants={fadeIn({
            direction: "up",
            type: "tween",
            delay: 0.3,
            duration: 1,
          })}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
};
export default About;
