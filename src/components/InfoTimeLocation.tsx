"use client";

/* eslint-disable @next/next/no-img-element */

import { prata } from "@/styles/fonts";
import CountdownTimer from "./CountdownTimer";

type InfoTimeLocation = {
  time: {
    hour: string;
    minute: string;
    second: string;
  };
  date: {
    weekday: string;
    day: string;
    month: string;
    year: string;
  };
  location: {
    name: string;
    address: string;
    lobby?: string;
    googleMap?: string;
  };
  imageLocation: string;
};

const Divider = () => {
  return <div className="h-20 w-0.5 bg-gray-300"></div>;
};

const InfoTimeLocation = ({
  time,
  date,
  location,
  imageLocation,
}: InfoTimeLocation) => {
  return (
    <div
      style={{ top: "5%" }}
      className={`${prata.className} border flex flex-col lg:flex-row place-items-center lg:gap-8 rounded-tl-[16px] rounded-tr-[16px] lg:rounded-tr-[0px] lg:rounded-bl-[16px] sticky bg-white max-w-[80%] max-h-[100vh] lg:max-h-[500px] overflow-hidden`}
    >
      <div className="flex flex-col items-center p-8">
        {/* Time */}
        <div className="text-center flex justify-center items-center space-x-4">
          <div className="text-lg">{`${time.hour}:${time.minute}`}</div>
          <Divider />
          <div className="text-lg">
            <div>{date.weekday}</div>
            <div className="text-2xl font-bold">{date.day}</div>
            <div>Tháng {date.month}</div>
          </div>
          <Divider />
          <div className="text-lg">{date.year}</div>
        </div>

        {/* Countdown */}
        <CountdownTimer
          launchDate={`${date.year}-${date.month}-${date.day}T${time.hour}:${time.minute}:${time.second}`}
        />

        {/* Location */}
        <div className="text-center space-y-4 w-64">
          <div className="space-y-2">
            <div className="text-lg font-black">{location.name}</div>
            {location.lobby && (
              <div className="font-semibold">{location.lobby}</div>
            )}
            <div>{location.address}</div>
          </div>
        </div>

        <a
          href={location.googleMap}
          className="mt-8 text-beige underline font-bold"
        >
          Xem địa chỉ
        </a>
      </div>
      <div className="h-[500px] w-[100%]">
        <img
          src={imageLocation}
          alt="location-champa"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default InfoTimeLocation;
