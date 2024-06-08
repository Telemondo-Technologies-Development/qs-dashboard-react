import formatDateAndTime from "@/utils/dateFormatter";
import { useEffect, useState } from "react";

export default function KioskHeader() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const updateCurrentTime = () => {
    setCurrentTime(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const { date, time } = formatDateAndTime(currentTime);
  return (
    <header className="w-full bg-[#2F4E6E] text-white py-3 px-4 md:px-12 font-poppins">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/kiosk-logo.png"
            alt="kbqs logo"
            className="size-20 sm:size-20  md:size-[90px] lg:size-[90px]"
          />
          <div className="pl-3 md:pl-5">
            <h1 className="hidden text-lg sm:text-xl md:text-2xl lg:text-3xl sm:block">
              KIOSK
            </h1>
            <p className="hidden text-base sm:text-sm md:text-base lg:text-lg sm:block">
              Queuing and Billing System
            </p>
          </div>
        </div>
        <div className="text-right">
          <h1 className="text-sm font-bold md:text-base">{date}</h1>
          <p className="text-sm md:text-base">{time}</p>
        </div>
      </div>
    </header>
  );
}
