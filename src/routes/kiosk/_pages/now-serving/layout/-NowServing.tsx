import QueueTicket from "./-QueueTicket";

export default function NowServing() {
  return (
    <div className="flex flex-col gap-3 py-4 overflow-auto justify-center items-center w-[35%] font-poppins">
      <h1 className="text-2xl font-bold">NOW SERVING</h1>
      <div className="flex flex-col gap-4">
        {Array.from({ length: 3 }).map((n, i) => {
          return <QueueTicket key={i} />;
        })}
      </div>
    </div>
  );
}
