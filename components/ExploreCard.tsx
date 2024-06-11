"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Image from "next/image";

const ExploreCard = ({
  id,
  imgUrl,
  title,
  width,
  index,
  active,
  handleClick,
}: any) => {
  return (
    <motion.div
      variants={fadeIn({
        direction: "right",
        time: "spring",
        delay: index * 0.5,
        duration: 0.75,
      })}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt="planets"
        width={width}
        height={1689}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-[24px] md:rounded-t-none">
          <div
            className="flex justify-center items-center w-[60px] md:h-[60px] h-[55px] rounded-[24px] glassmorphism mb-[16px]"
          >
            <Image
              src="/headset.svg"
              alt="headset"
              width={24}
              height={18}
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            Enter Metaverse
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};
export default ExploreCard;
