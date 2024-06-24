export default function VideoListItem() {
    return (
      <div className="flex items-center w-full px-5 py-4 bg-main_tertiary">
        <div className="flex items-center h-full gap-3">
          <img src="/videolistitem_playicon.svg" className="size-4" />
          <div className="grid self-stretch text-xs text-white w-28 bg-main_primary place-items-center">
            thumbnail
          </div>
          <div className="flex flex-col justify-between gap-2 py-2">
            <p className="text-sm">Video Name</p>
            <div className="self-start px-5 py-1 text-xs text-center text-white rounded-lg bg-gray-600/80">
              3:25
            </div>
          </div>
        </div>
        <button className="relative p-3 ml-auto bg-red-500 rounded-full">
          <div className="absolute w-[40%] h-[2px] rounded-full -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2"></div>
        </button>
      </div>
    );
  }