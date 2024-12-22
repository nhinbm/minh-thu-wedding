"use client";

/* eslint-disable @next/next/no-img-element */

import { prata } from "@/styles/fonts";
import { useTranslations } from "next-intl";

const RSVP = () => {
  const t = useTranslations("RSVP");
  return (
    <div className="flex flex-col items-center my-20" id="rsvp">
      <div className={`${prata.className} font-bold text-3xl`}>{t("rsvp")}</div>
      <div className="mt-2 mb-10">
        <img src="flower.png" alt="flower" />
      </div>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScEiFR4VlnRshV2PD5cwSKJ9Jfl4khMy4pN4WJIfwXFFzwE8Q/viewform?embedded=true"
        width="640"
        height="560"
        className="w-[80%] md:w-[640px]"
        style={{ border: "none", margin: 0, padding: 0 }}
      >
        {t("loading")}
      </iframe>
    </div>
  );
};

export default RSVP;
