"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "./CustomTexts";
import Image from "next/image";

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />

        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "tween",
            delay: 0.3,
            duration: 1,
          })}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <Image
            height={1578}
            width={3510}
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]"
          >
            <Image
              height={122}
              width={122}
              src="/people-01.png"
              alt="people"
              className="w-full h-full"
            />
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]"
          >
            <Image
              height={122}
              width={122}
              src="/people-02.png"
              alt="people"
              className="w-full h-full"
            />
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute top-1/3 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]"
          >
            <Image
              height={122}
              width={122}
              src="/people-03.png"
              alt="people"
              className="w-full h-full"
            />
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
            className="hidden md:block absolute bottom-24 left-36  w-[200px] h-[150px] p-[6px] rounded-2xl bg-[#5D6680]"
          >
            <Image
              height={2200}
              width={4700}
              src="/planet-09.png"
              alt="planet"
              className="w-full h-full rounded-2xl object-cover"
            />
            <div className="absolute bottom-2 p-2 w-full">
              <h2 className="text-[18px] font-semibold text-white text-center">
                The Upside Down
              </h2>
            </div>
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
            className="hidden md:block absolute top-8 right-32  w-[200px] h-[150px] p-[6px] rounded-2xl bg-[#5D6680]"
          >
            <Image
              height={750}
              width={1875}
              src="/planet-07.png"
              alt="planet"
              className="w-full h-full rounded-2xl object-cover"
            />
            <div className="absolute bottom-2 p-2 w-full">
              <h2 className="text-[18px] font-semibold text-white text-center">
                Hawkins Lab
              </h2>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default World;
