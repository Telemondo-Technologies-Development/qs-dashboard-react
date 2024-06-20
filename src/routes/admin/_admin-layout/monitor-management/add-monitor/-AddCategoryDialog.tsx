import { useMonitorManagementStore } from "@/stores/admin/monitorMgmt";

export default function AddCategoryDialog() {
  const { showAddCategoryDialog, toggleShowAddCategoryDialog } =
    useMonitorManagementStore();

  return (
    <>
      <div
        className={`absolute transition-all h-full top-0 py-8 px-6 bg-main_extra z-50 w-[50%] ${showAddCategoryDialog ? "right-0" : "-right-[50%]"} text-main_primary`}
      >
        <div className="flex flex-col gap-6 size-full">
          <div className="flex justify-between">
            <p className="text-xl font-bold">Counter Selection</p>
            <button className="px-5 py-1 font-semibold rounded-sm bg-main_secondary text-main_primary">
              Counter Management
            </button>
          </div>
          <div className="flex flex-col flex-1 gap-3 overflow-y-auto">
            <div className="flex w-full py-3 text-white bg-main_primary">
              <div className="flex justify-center flex-1">
                <button className="flex items-center justify-center gap-2">
                  <p>Counter</p>
                  <img src="/filter_icon.svg" className="size-3" />
                </button>
              </div>
              <div className="flex justify-center flex-1">
                <button className="flex items-center justify-center gap-2">
                  <p>Managed</p>
                  <img src="/filter_icon.svg" className="size-3" />
                </button>
              </div>
              <div className="flex justify-center flex-1">
                <button className="flex items-center justify-center gap-2">
                  <p>Staff</p>
                </button>
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-3 overflow-y-auto scrollbar-none">
              {Array.from({ length: 10 }).map((counter, index) => {
                return (
                  <div
                  key={index}
                    className={`flex ${index + 1 < 4 ? "bg-calendar_borders" : index + 1 === 4 ? "bg-main_primary text-white" : "bg-white"} rounded-lg min-h-24`}
                  >
                    <div className="flex items-center justify-center flex-1 text-3xl font-bold">
                      {index + 1}
                    </div>
                    <div className="flex items-center justify-center flex-1 text-sm font-semibold">
                      Accounts
                    </div>
                    <div className="flex flex-col items-start justify-center flex-1 text-sm">
                      <p>Juan Dela Cruz</p>
                      <p>Queueing Staff</p>
                      <p>juandelacruz@gmail.com</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button
            onClick={() => toggleShowAddCategoryDialog()}
            className="w-full py-2 font-semibold rounded-sm bg-main_secondary text-main_primary"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}