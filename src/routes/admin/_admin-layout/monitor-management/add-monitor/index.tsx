import { Link, createFileRoute } from "@tanstack/react-router";
import CounterCard from "./-CounterCard";
import VideoPlaybackControls from "./-VideoPlaybackControls";
import VideoListItem from "./-VideoListItem";
import { useState } from "react";
import { useTempStore } from "@/stores/admin/monitorMgmt";

export const Route = createFileRoute(
  "/admin/_admin-layout/monitor-management/add-monitor/"
)({
  component: () => <AddMonitor />,
});

function AddMonitor() {
  const { showAddCategoryDialog, toggleShowAddCategoryDialog } = useTempStore();

  return (
    <div className="flex flex-col flex-1 gap-4 p-8 pt-5 pr-16 overflow-y-auto text-main_primary">
      <div className="flex justify-between">
        <Link
          to="/admin/monitor-management"
          className="flex items-center gap-2 px-5 py-1 text-white rounded-sm bg-main_primary"
        >
          <img src="/back_icon.svg" className="size-3" />
          <p className="font-semibold">Monitor Selection</p>
        </Link>
        <button className="px-5 py-1 font-semibold rounded-sm bg-main_secondary text-main_primary">
          Preview Monitor
        </button>
        <button className="flex items-center gap-2 px-5 py-1 text-white rounded-sm bg-main_primary">
          <img src="/minus_icon.svg" className="size-3" />
          <p className="font-semibold">Remove Monitor</p>
        </button>
      </div>
      <div className="flex justify-end gap-4">
        <button className="px-5 py-1 font-semibold rounded-sm bg-main_secondary text-main_primary">
          Discard Changes
        </button>
        <button className="flex items-center gap-2 px-5 py-1 text-white rounded-sm bg-main_primary">
          <p className="font-semibold">Save Changes</p>
        </button>
      </div>
      <div className="flex flex-1 gap-8 overflow-y-auto">
        <div className="flex flex-col flex-1 gap-4 p-5 overflow-y-auto rounded-2xl bg-main_extra">
          <div className="flex items-center">
            <p className="text-xl font-semibold">Counters</p>
          </div>
          <div className="grid flex-1 grid-flow-col grid-cols-2 grid-rows-4 px-3 pb-3 gap-x-6 gap-y-6">
            {Array.from({ length: 5 }).map((counterCard, index) => {
              return <CounterCard index={index} />;
            })}
            <button
              onClick={() => toggleShowAddCategoryDialog()}
              className="rounded-xl aspect-[16/7.5] border-2 border-gray-400 border-dashed relative grid place-items-center"
            >
              <p className="text-2xl font-semibold text-gray-400">
                ADD CATEGORY
              </p>
              <div className="absolute p-3 bg-green-500 rounded-full -top-3 -right-3">
                <div className="absolute w-[40%] h-[2px] -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2"></div>
                <div className="absolute w-[2px] h-[40%] -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2"></div>
              </div>
            </button>
          </div>
        </div>
        <section className="flex flex-col flex-1 gap-4 p-5 rounded-2xl bg-main_extra">
          <p className="text-lg font-semibold">Video Playback</p>
          <section className="flex flex-col flex-1 overflow-y-auto">
            <img
              src="/justforlaughs.png"
              className="object-cover object-center w-full h-60"
            />
            <VideoPlaybackControls />
            <section className="w-full overflow-y-auto h-96 bg-calendar_borders">
              {Array.from({ length: 3 }).map((video, index) => {
                return <VideoListItem />;
              })}
              <div className="flex justify-center w-full py-4">
                <button className="px-8 py-2 text-sm font-semibold text-white rounded-md bg-main_primary">
                  Upload Video
                </button>
              </div>
            </section>
          </section>
        </section>
      </div>
    </div>
  );
}
