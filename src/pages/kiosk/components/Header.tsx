import { useEffect, useState } from "react";
import KBQSLogo from "/kiosk-logo.png";

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const updateCurrentTime = () => {
    setCurrentTime(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const optionsDate: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const optionsTime: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    const formattedDate = currentDate.toLocaleString("en-US", optionsDate);
    const formattedTime = currentDate.toLocaleString("en-US", optionsTime);
    return { date: formattedDate, time: formattedTime };
  };

  useEffect(() => {
    const intervalId = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(intervalId);
  }, [currentTime]);

  const { date, time } = getCurrentDateTime();
  return (
    <header className="bg-[#2F4E6E] text-white py-3 px-12">
      <div className="flex justify-between">
        <div className="flex ">
          <img
            src={KBQSLogo}
            alt="kbqs logo"
            height={113}
            width={113}
            className=""
          />
          <div className="self-center pl-5">
            <h1 className="text-[48px] font-bold">KIOSK</h1>
            <p className="text-[24px]">Queuing and Billing System</p>
          </div>
        </div>
        <div className="self-center">
          <h1 className="text-[24px] font-bold text-right">{date}</h1>
          <p className="text-[24px] text-right ">{time}</p>
        </div>
      </div>
    </header>
  );
}
