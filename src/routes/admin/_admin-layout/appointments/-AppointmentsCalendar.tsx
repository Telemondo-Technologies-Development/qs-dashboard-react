import { useRef, useEffect, useState, Fragment } from "react";
import {
  endOfWeek,
  startOfWeek,
  addDays,
  startOfToday,
  subDays,
  format,
} from "date-fns";
import AppointmentCard from "./-AppointmentCard";

export type appointment = {
  name: string;
  startTime: Date;
  endTime: Date;
  dayIndex?: number;
};

const appointments: appointment[] = [
  {
    name: "Sir Bon",
    startTime: new Date(2024, 5, 4, 1, 30),
    endTime: new Date(2024, 5, 4, 3, 22),
  },
  {
    name: "Gab",
    startTime: new Date(2024, 5, 7, 15, 0),
    endTime: new Date(2024, 5, 7, 17, 45),
  },
  {
    name: "Rendell",
    startTime: new Date(2024, 5, 6, 0, 15),
    endTime: new Date(2024, 5, 6, 3, 13),
  },
];

function getDatesOfWeek(date: Date): Date[] {
  // Get the start and end of the week (Monday to Sunday)
  const start = startOfWeek(date, { weekStartsOn: 1 }); // weekStartsOn: 1 means Monday
  const end = endOfWeek(date, { weekStartsOn: 1 });

  // Initialize an array to hold the dates
  const datesOfWeek: Date[] = [];

  // Loop from start of the week to end of the week
  for (let day = start; day <= end; day = addDays(day, 1)) {
    datesOfWeek.push(day);
  }

  return datesOfWeek;
}

function getCalendarSelectionButtonFormat(startDate: Date): string {
  const firstDate = startDate;
  const secondDate = endOfWeek(startDate);
  console.log(firstDate);
  if (format(firstDate, "yyyy") === format(secondDate, "yyyy")) {
    if (firstDate.getMonth === secondDate.getMonth) {
      return `${format(firstDate, "MMMM dd")} - ${format(secondDate, "dd, yyyy")}`;
    }
    return `${format(firstDate, "MMM dd")} - ${format(secondDate, "MMM dd, yyyy")}`;
  }
  return `${format(firstDate, "MMM dd yyyy")} - ${format(secondDate, "MMM dd yyyy")}`;
}

export default function AppointmentCalendar() {
  const firstTimeBlockRef = useRef<HTMLDivElement>(null);
  const [timeBlockHeight, setTimeBlockHeight] = useState(0);
  const today = startOfToday();
  const [weekDates, setWeekDates] = useState<Date[]>([]);
  const [startDate, setStartDate] = useState<Date>(getDatesOfWeek(today)[0]);
  const calendarContainerRef = useRef<HTMLDivElement>(null);
  const [calendarContainerWidth, setCalendarContainerWidth] = useState(0);

  useEffect(() => {
    if (!firstTimeBlockRef.current) return;
    if (!calendarContainerRef.current) return;
    setTimeBlockHeight(
      firstTimeBlockRef.current.getBoundingClientRect().height
    );
    setCalendarContainerWidth(
      calendarContainerRef.current.getBoundingClientRect().width
    );
  }, []);

  //for next/prev week button
  useEffect(() => {
    setWeekDates(getDatesOfWeek(startDate));
  }, [startDate, setWeekDates]);

  return (
    <Fragment>
      <div className="flex items-center justify-between px-6 py-3 text-sm rounded-tl-lg rounded-tr-lg bg-main_primary">
        <button className="flex items-center gap-2">
          <img src="/calendar.svg" className="size-5" />
          <p className="text-lg text-white">
            {getCalendarSelectionButtonFormat(startDate)}
          </p>
        </button>
        <button className="flex items-center gap-2">
          <p className="text-white">Time</p>
          <img src="/filter_icon.svg" className="size-4" />
        </button>
        <button className="flex items-center gap-2">
          <p className="text-white">Customer</p>
          <img src="/filter_icon.svg" className="size-4" />
        </button>
        <button className="flex items-center gap-2">
          <p className="text-white">Status</p>
          <img src="/filter_icon.svg" className="size-4" />
        </button>
        <button className="px-6 py-2 text-sm font-semibold rounded-sm bg-main_secondary text-main_primary">
          Create Appointment
        </button>
      </div>
      <div className="flex w-full text-sm header-scrollbar">
        <div className="w-[10%] bg-calendar_borders grid place-items-center"></div>
        {weekDates.map((weekDate, dateIndex) => {
          return (
            <div
              key={dateIndex}
              className={`flex-1 py-4 text-center bg-calendar_bg border-calendar_borders border-b ${
                dateIndex !== weekDates.length - 1 ? "border-r" : ""
              }`}
            >
              <p className="font-bold">{format(weekDate, "EEEE")}</p>
              <p>{format(weekDate, `MMMM d, yyyy`)}</p>
            </div>
          );
        })}
      </div>
      <div
        ref={calendarContainerRef}
        className="flex-1 overflow-x-hidden overflow-y-auto text-sm rounded-bl-lg rounded-br-lg scrollbar-none"
      >
        <div className="flex">
          <div className="w-[10%] relative">
            {Array.from({ length: 24 }).map((hour, index) => {
              return (
                <Fragment key={index}>
                  {index !== 0 && (
                    <div
                      style={{
                        width: `${calendarContainerWidth}px`,
                      }}
                      className="absolute h-[1px] bg-calendar_borders"
                    ></div>
                  )}
                  <div
                    className={`pb-16 text-center bg-calendar_borders`}
                    key={index}
                    ref={index === 0 ? firstTimeBlockRef : null}
                  >
                    <p>{`${index < 10 ? "0" : ""}${index}:00`}</p>
                  </div>
                </Fragment>
              );
            })}
          </div>
          <div className="flex flex-1 bg-calendar_bg">
            {weekDates.map((weekDate, dateIndex) => {
              return (
                <div
                  className={`relative flex-1 flex flex-col items-center ${
                    dateIndex !== weekDates.length - 1 ? "border-r" : ""
                  } border-calendar_borders`}
                >
                  {appointments
                    .filter((appointment) => {
                      return (
                        format(appointment.startTime, "MMM dd yyyy") ===
                        format(weekDate, "MMM dd yyyy")
                      );
                    })
                    .map((appointmentDay, appointmentDayIndex) => {
                      const minToHr = (min: number) => min / 60;
                      //function that calulcates top offset of element
                      const getTopOffset = (
                        timeHour: number,
                        timeMinute: number
                      ) => {
                        const timeTotalHrs = timeHour + minToHr(timeMinute);
                        return timeTotalHrs * timeBlockHeight;
                      };

                      //getting start time top offset
                      const startTimeHour = appointmentDay.startTime.getHours();
                      const startTimeMinute =
                        appointmentDay.startTime.getMinutes();
                      const startTimeTopOffset = getTopOffset(
                        startTimeHour,
                        startTimeMinute
                      );

                      //getting end time top offset
                      const endTimeHour = appointmentDay.endTime.getHours();
                      const endTimeMinute = appointmentDay.endTime.getMinutes();
                      const endTimeTopOffset = getTopOffset(
                        endTimeHour,
                        endTimeMinute
                      );

                      //calculating height of appointment block
                      const appointmentBlockHeight =
                        endTimeTopOffset - startTimeTopOffset;
                      return (
                        <AppointmentCard
                          startTimeTopOffset={startTimeTopOffset}
                          appointmentBlockHeight={appointmentBlockHeight}
                          appointmentDay={appointmentDay}
                          appointmentDayIndex={appointmentDayIndex}
                        />
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
