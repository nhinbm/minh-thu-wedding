"use client";

import { monsieurLaDoulaise } from "@/styles/fonts";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className={`${monsieurLaDoulaise.className} text-[80px] md:text-[176px] relative z-10 text-white -top-20p`}
      >
        With Love
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/parallax-full.jpg)`,
          backgroundPosition: "55% center",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/parallax-bottom.png)`,
          backgroundPosition: "55% center",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};

export default Hero;
