type PreviewCounterCardProps = {
    counterNumber: number;
    ticket: string;
  };
  
  export default function PreviewCounterCard({
    counterNumber,
    ticket,
  }: PreviewCounterCardProps) {
    return (
      <div
        className={`flex flex-col items-center justify-center py-2 rounded-2xl minimonitorcard-shadow ${counterNumber === 1 ? "text-white bg-main_primary" : "text-main_primary bg-white"} size-full`}
      >
        <p className="font-semibold">COUNTER {counterNumber}</p>
        <p className="text-4xl font-bold">{ticket}</p>
      </div>
    );
  }