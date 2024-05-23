import { useDialogStore } from "@/stores/kiosk/dialog_states";


type DialogContentProps = {
  variant: string;
};
export default function DialogContent({ variant }: DialogContentProps) {
  const selectedCounter = useDialogStore(
    (state) => state.selectedCounter
  );
  const selectedTicket = useDialogStore(
    (state) => state.selectedTicket
  );
  const eta = "30";
  const errorMessage = "Check your internet\nconnectivity\nor try again later.";
  const ticketNumber = "T-179";

  return (
    <div
      className={`flex h-40 justify-center items-center text-center my-7 lg:my-10 text-main_primary text-sm lg:text-base`}
    >
      {variant === "confirmation" ? (
        <>
          <div className="flex gap-4 size-full">
            <div className="flex flex-col flex-1 ">
              <p>Chosen Category</p>
              <p className="my-auto text-base font-bold text-black whitespace-pre md:text-lg lg:text-xl">
                {selectedCounter!.counterName?.replace(/\s+/g, "\n")}
              </p>
            </div>
            <div className="h-full w-[1px] bg-main_primary"></div>
            <div className="flex flex-col flex-1">
              <p>Ticket Type</p>
              <p className="my-auto text-base font-bold text-black whitespace-pre md:text-lg lg:text-xl">
                {selectedTicket!.ticketName}
              </p>
            </div>
            <div className="h-full w-[1px] bg-main_primary"></div>
            <div className="flex flex-col flex-1 ">
              <p className="whitespace-nowrap">Estimated Waiting Time</p>
              <p className="my-auto text-base font-bold text-black md:text-lg lg:text-xl">
                {eta} minutes
              </p>
            </div>
          </div>
        </>
      ) : variant === "success" ? (
        <>
          <p className="text-6xl font-bold text-black">{ticketNumber}</p>
        </>
      ) : (
        <>
          <p className="text-lg font-bold text-black whitespace-pre lg:text-xl">
            {errorMessage}
          </p>
        </>
      )}
    </div>
  );
}
