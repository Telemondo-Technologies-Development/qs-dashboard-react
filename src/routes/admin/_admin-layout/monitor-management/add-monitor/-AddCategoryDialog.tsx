import { useTempStore } from "@/stores/admin/monitorMgmt";
import { useEffect, useRef, useState } from "react";

export default function AddCategoryDialog() {
  const { showAddCategoryDialog, toggleShowAddCategoryDialog } = useTempStore();
  // const [dialogWidth, setDialogWidth] = useState(0);
  // const dialogRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   if (!dialogRef.current) return;

  //   setDialogWidth(dialogRef.current.getBoundingClientRect().width);
  // }, []);

  return (
    //negative right pos is dynamic because div will have different widths depending on breakpoints
    // <div
    //   ref={dialogRef}
    //   style={{
    //     right: `${showAddCategoryDialog ? `-${dialogWidth}px` : `0px`}`,
    //   }}
    //   className={`absolute transition-all h-full top-0 bg-main_extra z-20 w-[50%] max-w-[600px]`}
    // ></div>
    <div
      className={`absolute transition-all h-full top-0 py-8 px-6 bg-main_extra z-20 w-[50%] ${showAddCategoryDialog ? "right-0" : "-right-[50%]"} text-main_primary`}
    >
      <div className="flex flex-col max-w-[630px] size-full gap-6">
        <div className="flex justify-between">
          <p className="text-xl font-bold">Counter Selection</p>
          <button className="px-5 py-1 font-semibold rounded-sm bg-main_secondary text-main_primary">
            Counter Management
          </button>
        </div>
        <div className="flex-1 bg-green-500">
          <div className="flex w-full py-2 text-white bg-main_primary">
            <div className="flex justify-center flex-1">
              <button className="flex items-center justify-center gap-2">
                <p>Counter</p>
                <img src="/filter_icon.svg" className="size-4" />
              </button>
            </div>
            <div className="flex justify-center flex-1">
              <button className="flex items-center justify-center gap-2">
                <p>Managed</p>
                <img src="/filter_icon.svg" className="size-4" />
              </button>
            </div>
          </div>
        </div>
        <button className="w-full py-2 font-semibold rounded-sm bg-main_secondary text-main_primary">
          Close
        </button>
      </div>
    </div>
  );
}
