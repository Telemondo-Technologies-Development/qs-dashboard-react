import { createFileRoute } from "@tanstack/react-router";
import { counterTypes } from "@/utils/variables/kiosk_variables";
import { useKioskManagementStore } from "@/stores/admin/kiosk_mgmt_states";
import PreviewKioskDialog from "./-PreviewKioskDialog";

export const Route = createFileRoute("/admin/_admin-layout/kiosk-management/")({
  component: () => <KioskManagement />,
});

function KioskManagement() {
  const { isEdit, toggleEdit, togglePreviewKiosk } = useKioskManagementStore();
  return (
    <div className="flex-1 p-8 transition-all">
      <PreviewKioskDialog />
      <div className="flex flex-col gap-8 p-6 bg-main_extra size-full rounded-3xl">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-main_primary">Categories</p>
          <div className="flex gap-3">
            <button
              onClick={() => togglePreviewKiosk()}
              className="px-6 py-1 font-semibold rounded-sm bg-main_secondary text-main_primary"
            >
              Preview Kiosk
            </button>
            <button
              onClick={() => toggleEdit()}
              className="px-6 py-1 font-semibold text-white rounded-sm bg-main_primary"
            >
              {isEdit ? "Cancel Edit" : "Edit Kiosk"}
            </button>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-5 grid-rows-2 gap-y-8 gap-x-8">
          {counterTypes &&
            counterTypes.map((counterType) => {
              return (
                <div className="relative flex flex-col gap-3 text-center">
                  {isEdit && (
                    <div className="absolute z-10 p-3 bg-red-500 rounded-full -top-3 -right-3">
                      <div className="absolute w-[40%] h-[2px] -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2"></div>
                    </div>
                  )}
                  <div
                    key={counterType.counterID}
                    style={{
                      backgroundImage: `url(${counterType.counterImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="overflow-hidden rounded-lg size-full"
                  >
                    {isEdit && (
                      <div className="flex flex-col items-center justify-center gap-3 px-6 size-full bg-black/50">
                        <button className="w-full py-1 text-sm font-medium text-white rounded-md bg-main_primary">
                          Change Image
                        </button>
                        <button className="w-full py-1 text-sm font-medium rounded-md text-main_primary bg-main_secondary">
                          Remove Image
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="text-sm whitespace-nowrap">
                    {counterType.counterName}
                  </p>
                </div>
              );
            })}
          {isEdit && (
            <button className="relative flex flex-col items-center justify-center text-2xl font-semibold text-gray-400 border-2 border-gray-400 border-dashed rounded-lg">
              <div className="absolute p-3 bg-green-500 rounded-full -top-3 -right-3">
                <div className="absolute w-[40%] h-[2px] -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2"></div>
                <div className="absolute w-[2px] h-[40%] -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2"></div>
              </div>
              <p>ADD</p>
              <p>CATEGORY</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
