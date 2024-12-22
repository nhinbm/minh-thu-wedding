"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";

const Carousel = () => {
  const images = [
    "/carousel-image-1.jpg",
    "/carousel-image-2.jpg",
    "/carousel-image-3.jpg",
    "/carousel-image-4.jpg",
    "/carousel-image-5.jpg",
    "/carousel-image-6.jpg",
    "/carousel-image-7.jpg",
    "/carousel-image-8.jpg",
    "/carousel-image-9.jpg",
    "/carousel-image-11.jpg",
    "/carousel-image-12.jpg",
    "/carousel-image-13.jpg",
    "/carousel-image-14.jpg",
    "/carousel-image-15.jpg",
    "/carousel-image-16.jpg",
    "/carousel-image-17.jpg",
    "/carousel-image-18.jpg",
    "/carousel-image-19.jpg",
    "/carousel-image-20.jpg",
    "/carousel-image-21.jpg",
    "/carousel-image-22.jpg",
    "/carousel-image-23.jpg",
  ];

  return (
    <div className="mx-auto w-full overflow-x-hidden py-10">
      <div className="mx-auto">
        <div className="flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0 gap-8 ml-8"
          >
            {images.map((item) => {
              return (
                <img
                  key={item}
                  src={item}
                  alt={item}
                  className="min-w-[200px] h-[200px] object-cover"
                />
              );
            })}
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0 gap-8 ml-8"
          >
            {images.map((item) => {
              return (
                <img
                  key={item}
                  src={item}
                  alt={item}
                  className="min-w-[200px] h-[200px] object-cover"
                />
              );
            })}
          </motion.div>

          {/* <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0 gap-8"
          >
            {images.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="relative overflow-hidden h-[200px] min-w-[200px] flex justify-center items-center"
                >
                  <img
                    src={item}
                    alt={item}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
