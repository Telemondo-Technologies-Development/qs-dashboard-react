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
    <header className="w-screen bg-[#2F4E6E] text-white py-3 px-12">
      <div className="flex justify-between">
        <div className="flex ">
          <img
            src="/kiosk-logo.png"
            alt="kbqs logo"
            className="size-[70px] self-center"
          />
          <div className="self-center pl-5">
            <h1 className="text-2xl font-bold">KIOSK</h1>
            <p className="text-base">Queuing and Billing System</p>
          </div>
        </div>
        <div className="self-center">
          <h1 className="text-base font-bold text-right">{date}</h1>
          <p className="text-base text-right ">{time}</p>
        </div>
      </div>
    </header>
  );
}
