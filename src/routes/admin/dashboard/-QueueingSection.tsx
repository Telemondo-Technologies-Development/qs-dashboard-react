const temp_tickets = [
    {
      counter: 1,
      ticketNum: "R-145",
    },
    {
      counter: 2,
      ticketNum: "R-552",
    },
    {
      counter: 1,
      ticketNum: "T-123",
    },
    {
      counter: 3,
      ticketNum: "X-442",
    },
    {
      counter: 5,
      ticketNum: "Y-111",
    },
    {
      counter: 6,
      ticketNum: "R-888",
    },
  ];
export default function QueueingSection() {
  return (
    <div className="flex-1 p-6 rounded-2xl bg-main_extra">
      <div className="flex flex-col gap-6 size-full">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Queueing</p>
          <button className="py-2 text-sm text-white rounded-md px-7 bg-main_primary">
            Open Queue
          </button>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-y-2 gap-x-2 size-full">
          {temp_tickets.map((ticket, i) => {
            return (
              <div key={i} className="flex flex-col justify-center gap-1 py-2 text-center bg-white rounded-xl ">
                <p className="text-lg">Counter {ticket.counter}</p>
                <p className="text-4xl font-semibold">{ticket.ticketNum}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
