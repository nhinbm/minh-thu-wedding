"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface TimeCount {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const getTimeLeft = (expiry: string): TimeCount => {
  let days = "00";
  let hours = "00";
  let minutes = "00";
  let seconds = "00";

  const difference = new Date(expiry).getTime() - new Date().getTime();

  if (difference <= 0) return { days, hours, minutes, seconds };

  const dys = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((difference / (1000 * 60 * 6)) % 24);
  const mnt = Math.floor((difference / (1000 * 60)) % 60);
  const snd = Math.floor((difference / 1000) % 60);

  days = dys < 10 ? `0${dys}` : dys.toString();
  hours = hrs < 10 ? `0${hrs}` : hrs.toString();
  minutes = mnt < 10 ? `0${mnt}` : mnt.toString();
  seconds = snd < 10 ? `0${snd}` : snd.toString();

  return { days, hours, minutes, seconds };
};

const CountdownTimer = ({ launchDate }: { launchDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeCount>(getTimeLeft(launchDate));
  const t = useTranslations("TimeLocation");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <div className="flex justify-start my-10 gap-3">
      <span className="flex flex-col justify-center items-center bg-beige text-xl lg:text-3xl w-12 lg:w-20 p-1 lg:p-3 shadow-lg rounded-md text-white">
        {timeLeft.days}
        <small className="text-sm font-semibold">{t("days")}</small>
      </span>
      <span className="flex flex-col justify-center items-center bg-beige text-xl lg:text-3xl w-12 lg:w-20 p-1 lg:p-3 shadow-lg rounded-md text-white">
        {timeLeft.hours}
        <small className="text-sm font-semibold">{t("hours")}</small>
      </span>
      <span className="flex flex-col justify-center items-center bg-beige text-xl lg:text-3xl w-12 lg:w-20 p-1 lg:p-3 shadow-lg rounded-md text-white">
        {timeLeft.minutes}
        <small className="text-sm font-semibold">{t("minutes")}</small>
      </span>
      <span className="flex flex-col justify-center items-center bg-beige text-xl lg:text-3xl w-12 lg:w-20 p-1 lg:p-3 shadow-lg rounded-md text-white">
        {timeLeft.seconds}
        <small className="text-sm font-semibold">{t("seconds")}</small>
      </span>
    </div>
  );
};

export default CountdownTimer;
