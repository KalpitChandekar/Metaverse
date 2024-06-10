"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/utils/motion";
import { ReactElement } from "react";

interface typingProps {
  title: string;
  textStyles?: string;
}

interface titleProps {
  title: ReactElement;
  textStyles?: string;
}

export const TypingText = ({ title, textStyles }: typingProps) => {
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

export const TitleText = ({ title, textStyles }: titleProps) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
    >
      {title}
    </motion.h2>
  );
};
