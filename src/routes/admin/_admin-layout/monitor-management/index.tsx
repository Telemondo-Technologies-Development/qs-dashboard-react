import { Link, createFileRoute } from "@tanstack/react-router";
import MonitorCard from "./-MonitorCard";

export const Route = createFileRoute(
  "/admin/_admin-layout/monitor-management/"
)({
  component: () => <MonitorManagement />,
});

function MonitorManagement() {
  return (
    <div className="flex flex-col flex-1 gap-6 p-8 pr-16 overflow-y-auto">
      <div className="flex justify-end ">
        <Link
          to="/admin/monitor-management/add-monitor"
          className="flex items-center justify-between flex-grow-0 gap-3 px-5 py-1 rounded-md bg-main_primary"
        >
          <img src="/plus_icon.svg" className="size-3" />
          <p className="font-semibold text-white">Add Monitor</p>
        </Link>
      </div>
      <div className="grid flex-1 grid-cols-3 gap-x-5 gap-y-5">
        {Array.from({ length: 6 }).map((item, index) => {
          return <MonitorCard index={index} />;
        })}
      </div>
    </div>
  );
}