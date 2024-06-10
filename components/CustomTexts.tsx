"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/utils/motion";

interface props {
  title: string;
  textStyles: string;
}

export const TypingText = ({ title, textStyles }: props) => {
  return (
    <motion.p
      variants={textContainer as any}
      className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span key={index} variants={textVariant2}>
          {letter === "" ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

// export const TitleText = ({ title, textStyles }: any) => {
//   <motion.h2
//     variants={textVariant2}
//     initial="hidden"
//     whileInView="show"
//     className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
//   >
//     {title}
//   </motion.h2>;
// };
