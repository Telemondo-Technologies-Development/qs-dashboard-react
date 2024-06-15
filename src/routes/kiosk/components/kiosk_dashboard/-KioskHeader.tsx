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
    <header className="w-screen bg-[#2F4E6E] text-white py-3 px-4 md:px-12 font-poppins">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/kiosk-logo.png"
            alt="kbqs logo"
            className="size-20 sm:size-20  md:size-[90px] lg:size-[90px]"
          />
          <div className="pl-3 md:pl-5">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl hidden sm:block">
              KIOSK
            </h1>
            <p className="text-base sm:text-sm md:text-base lg:text-lg hidden sm:block">
              Queuing and Billing System
            </p>
          </div>
        </div>
        <div className="text-right">
          <h1 className="text-sm md:text-base font-bold">{date}</h1>
          <p className="text-sm md:text-base">{time}</p>
        </div>
      </div>
    </header>
  );
}
