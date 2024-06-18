import PreviewCounterCard from "./-PreviewCounterCard";

export default function MonitorPreview() {
  return (
    <div className="flex flex-1 overflow-y-auto bg-white text-main_primary">
      <div className="flex flex-col w-[50%] gap-1 py-4 pl-16 pr-8 overflow-y-auto">
        <p className="text-xl font-bold">NOW SERVING</p>
        <div className="grid flex-1 grid-cols-2 grid-rows-4 px-2 py-2 gap-x-3 gap-y-3">
          {Array.from({ length: 8 }).map((previewCounterCard, index) => {
            return (
              <PreviewCounterCard key={index} counterNumber={index + 1} ticket="S-003" />
            );
          })}
        </div>
      </div>
      <div className="w-[50%]">
        <img
          className="object-cover object-center size-full"
          src="/justforlaughs.png"
        />
      </div>
      {/* <div className="flex flex-col w-[50%] overflow-y-auto "></div> */}
    </div>
  );
}
