"use client";

/* eslint-disable @next/next/no-img-element */

import { prata } from "@/styles/fonts";

const OurStory = () => {
  return (
    <div className="flex flex-col items-center my-20">
      <div className={`${prata.className} font-bold text-3xl`}>
        Câu chuyện tình yêu của chúng tôi
      </div>
      <div className="mt-2 mb-10">
        <img src="flower.png" alt="flower" />
      </div>
    </div>
  );
};

export default OurStory;
