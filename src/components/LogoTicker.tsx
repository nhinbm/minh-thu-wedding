"use client";

import { prata } from "@/styles/fonts";
import { motion } from "framer-motion";

const LogoTicker = () => {
  return (
    <div className="mx-auto w-full overflow-x-hidden py-10">
      <div className="mx-auto">
        <div className="flex my-gradient">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
          >
            {Array.from({ length: 5 }).map((__, index) => (
              <div
                key={index}
                className={`${prata.className} font-bold text-xl text-nowrap pr-20`}
              >
                Hoàng Minh & Xuân Thư
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
          >
            {Array.from({ length: 5 }).map((__, index) => (
              <div
                key={index}
                className={`${prata.className} font-bold text-xl text-nowrap pr-20`}
              >
                Hoàng Minh & Xuân Thư
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
