"use client";

/* eslint-disable @next/next/no-img-element */

import { prata } from "@/styles/fonts";
import InfoTimeLocation from "./InfoTimeLocation";
import { useTranslations } from "next-intl";

const WhenWhere = () => {
  const t = useTranslations("TimeLocation");
  return (
    <div className="flex flex-col items-center my-20" id="detail">
      <div className={`${prata.className} font-bold text-3xl`}>
        {t("time")} & {t("location")}
      </div>
      <div className="mt-2 mb-10">
        <img src="flower.png" alt="flower" />
      </div>
      <div className="flex flex-col items-center space-y-8">
        <InfoTimeLocation
          time={{ hour: "18", minute: "00", second: "00" }}
          date={{ weekday: t("sunday"), day: "05", month: "01", year: "2025" }}
          location={{
            name: "Champa Island Nha Trang",
            address: "304 2/4, Vĩnh Phước, Nha Trang, Khánh Hoà",
            lobby: t("lobbyNT"),
            googleMap: "https://maps.app.goo.gl/mxvoj2s1ZiUvo5ZS7",
          }}
          imageLocation={"/location-champa.jpg"}
        />
        <InfoTimeLocation
          time={{ hour: "17", minute: "30", second: "00" }}
          date={{
            weekday: t("saturday"),
            day: "11",
            month: "01",
            year: "2025",
          }}
          location={{
            name: "Pavillon Tan Son Nhat",
            address: "202 Hoàng Văn Thụ, Phường 9, Phú Nhuận, TP HCM",
            lobby: "Sảnh Amber",
            googleMap: "https://maps.app.goo.gl/cnqiomsNWwr3wsgd8",
          }}
          imageLocation={"/location-pavillon.jpg"}
        />
      </div>
    </div>
  );
};

export default WhenWhere;
