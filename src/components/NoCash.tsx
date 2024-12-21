"use client";

/* eslint-disable @next/next/no-img-element */

import { prata } from "@/styles/fonts";
import { motion } from "framer-motion";

const NoCash = () => {
  const containerVariants = {
    initial: { opacity: 0, x: "-100%" },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "linear" },
    },
  };

  return (
    <div className="flex flex-col items-center my-20">
      <div className={`${prata.className} font-bold text-3xl`}>
        No Cash? Đừng lo lắng...
      </div>
      <div className={`${prata.className} mt-2`}>
        Hãy gửi kèm cùng với tên của bạn nhé
      </div>
      <div className="mt-2 mb-10">
        <img src="flower.png" alt="flower" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <motion.img
          src="/qr-minh.jpg"
          alt="qr-minh"
          className="w-[70%] h-[70%] md:w-[30%] md:h-[20%] object-contain"
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
        />
        <motion.img
          src="/qr-thu.jpg"
          alt="qr-thu"
          className="w-[70%] h-[70%] md:w-[30%] md:h-[20%] object-contain"
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
        />
      </div>
    </div>
  );
};

export default NoCash;
