import { appointment } from "./-AppointmentsCalendar";

type AppointmentCardProps = {
    startTimeTopOffset : number
    appointmentBlockHeight : number
    appointmentDayIndex: number
    appointmentDay: appointment
}

export default function AppointmentCard({startTimeTopOffset, appointmentBlockHeight, appointmentDay, appointmentDayIndex}:AppointmentCardProps) {
    const startTimeHour = appointmentDay.startTime.getHours()
    const startTimeMinute = appointmentDay.startTime.getMinutes()
    const endTimeHour = appointmentDay.endTime.getHours()
    const endTimeMinute = appointmentDay.endTime.getMinutes()
  return (
    <div
      style={{
        transform: `translateY(${startTimeTopOffset}px)`,
        height: `${appointmentBlockHeight}px`,
      }}
      key={appointmentDayIndex}
      className="absolute w-[90%] bg-white px-2 flex flex-col items-center justify-center gap-1 rounded-3xl text-sm text-center border-2 border-green-500"
    >
      <p>Consulation with {appointmentDay.name}</p>
      <p>{`${startTimeHour < 10 ? "0" : ""}${startTimeHour}:${startTimeMinute}${
        startTimeMinute < 10 ? "0" : ""
      } - ${endTimeHour < 10 ? "0" : ""}${endTimeHour}:${endTimeMinute}${
        endTimeMinute < 10 ? "0" : ""
      }`}</p>
    </div>
  );
}
