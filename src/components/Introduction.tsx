"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { carattere, prata } from "@/styles/fonts";
import { useTranslations } from "next-intl";

const Introduction = () => {
  const containerVariants = {
    initial: { opacity: 0, y: "100%" },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "linear" },
    },
  };

  const t = useTranslations("Introduction");

  return (
    <div
      className="flex flex-col md:flex-row items-center md:justify-evenly space-y-8 md:py-20 md:my-5"
      id="introduction"
    >
      <div className="relative max-w-64 h-[450px] rounded-[175px_175px_175px_0px] overflow-hidden md:translate-y-20">
        <img
          src="/info-thu.jpg"
          alt="info-thu"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute left-[3%] top-[2%] w-[94%] h-[95%] border border-white box-border rounded-[175px_175px_175px_0px]"
          style={{ content: "" }}
        ></div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white text-2xl text-start px-5 py-16"
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
        >
          <div className={`${prata.className} text-lg`}>{t("bride")}</div>
          <div className={`${carattere.className} text-2xl`}>
            {t("brideName")}
          </div>
        </motion.div>
      </div>

      <div className="relative md:max-w-64 h-[256px] md:h-[450px] text-center">
        <img
          src="/info-flower.jpg"
          alt="info-minh"
          className="w-full h-full rounded-[50%] object-cover"
        />
        <div
          className="absolute left-0 top-0 w-[100%] h-[100%] border border-[#5D7C78] box-border rounded-[50%] rotate-[26.25deg]"
          style={{ content: "" }}
        ></div>
      </div>

      <div className="relative max-w-64 h-[450px] rounded-[175px_0px_175px_175px] overflow-hidden md:-translate-y-20">
        <img
          src="/info-minh.jpg"
          alt="info-minh"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute left-[3%] top-[2%] w-[94%] h-[95%] border border-white box-border rounded-[175px_0px_175px_175px]"
          style={{ content: "" }}
        ></div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white text-2xl text-end px-5 py-16"
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
        >
          <div className={`${prata.className} text-lg`}>{t("groom")}</div>
          <div className={`${carattere.className} text-2xl`}>
            {t("groomName")}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
