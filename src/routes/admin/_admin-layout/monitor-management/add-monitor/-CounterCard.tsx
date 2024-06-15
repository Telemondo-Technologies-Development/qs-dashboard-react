type CounterCardProps = {
  index: number;
};

export default function CounterCard({ index }: CounterCardProps) {
  return (
    <div className="bg-white rounded-xl aspect-[16/7.5] flex relative">
      <button className="absolute z-10 p-3 bg-red-500 rounded-full -top-3 -right-3">
        <div className="absolute w-[40%] h-[2px] rounded-full -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2"></div>
      </button>
      <div className="flex flex-col items-center justify-center gap-4 px-3">
        <p>COUNTER</p>
        <p className="text-4xl font-semibold">{index + 1}</p>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 gap-5 bg-gray-200 rounded-e-xl">
        <div className="flex items-center gap-1 px-3 py-1 text-red-500 bg-red-200 rounded-full">
          <div className="bg-red-500 rounded-full size-1"></div>
          <p className="text-[10px]">Occupied</p>
        </div>
        <p className="text-sm font-semibold text-center">
          Deposits and Withdrawals
        </p>
      </div>
    </div>
  );
}
