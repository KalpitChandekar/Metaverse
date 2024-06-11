"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { newFeatures } from "../constants";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "./CustomTexts";
import NewFeatures from "./NewFeatures";
import Image from "next/image";

const WhatsNew = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn({
            direction: "right",
            type: "tween",
            delay: 0.2,
            duration: 1,
          })}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TypingText title="| Whats new?" />
          <TitleText title={<>What`s new about Metaversus?</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={planetVariants("right")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Image
            src="/whats-new.png"
            alt="get-started"
            height={1403}
            width={1404}
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
export default WhatsNew;
