export default function MiniMonitorPreview() {
  return (
    <div className="flex flex-col w-full h-48 bg-white">
      <div className="flex justify-between px-4 py-1 bg-main_primary">
        <div className="flex items-center gap-2">
          <img src="/kiosk-logo.png" className="size-4" />
          <div className="space-y-[1px] text-white">
            <p className="text-[7px] font-bold">KIOSK</p>
            <p className="text-[4px]">Queueing and Billing System</p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center gap-[1px] text-white text-[4px]">
          <p className="">January 15, 2025</p>
          <p>03:34:12 PM</p>
        </div>
      </div>
      <div className="flex flex-1 mb-4">
        <div className="flex-1 space-y-[1px] flex flex-col py-2 pr-2 pl-6 gap-1">
          <p className="font-bold text-[7px]">Now Serving</p>
          <div className="grid flex-1 grid-cols-2 grid-rows-4 gap-x-1 gap-y-1 py-[1px] px-[1px]">
            {Array.from({ length: 8 }).map((_, index) => {
              return (
                <div
                  key={index}
                  className="rounded-md minimonitorcard-shadow text-main_primary size-full py-[1px] flex flex-col items-center justify-center"
                >
                  <p className="text-[4px]">Counter 1</p>
                  <p className="text-[8px] font-bold">S-003</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-1">
          <img
            src={"/justforlaughs.png"}
            className="object-cover object-center size-full"
          />
        </div>
      </div>
    </div>
  );
}
