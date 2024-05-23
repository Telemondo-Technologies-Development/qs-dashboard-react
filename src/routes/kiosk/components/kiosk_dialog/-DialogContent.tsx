import { useDialogStore } from "@/stores/kiosk/dialog_states";

type DialogContentProps = {
  variant: string;
};
export default function DialogContent({ variant }: DialogContentProps) {
  const selectedCounter = useDialogStore((state) => state.selectedCounter);
  const selectedTicket = useDialogStore((state) => state.selectedTicket);
  const eta = "30";
  const errorMessage = "Check your internet connectivity or try again later.";
  const ticketNumber = "T-179";

  return (
    <div
      className={`flex justify-center text-center text-main_primary text-sm md:text-base`}
    >
      {variant === "confirmation" ? (
        <>
          <div className="flex flex-col flex-1 gap-4 my-6 sm:h-32 md:h-40 sm:flex-row">
            <div className="flex flex-col flex-1 gap-2">
              <p className="whitespace-nowrap">Chosen Category</p>
              <p className="my-auto font-bold text-black text-basmy-auto e md:text-lg">
                {selectedCounter!.counterName}
              </p>
            </div>
            <div className="w-full h-[1px] sm:h-full sm:w-[1px] bg-main_primary"></div>
            <div className="flex flex-col flex-1 gap-2">
              <p className="whitespace-nowrap">Ticket Type</p>
              <p className="my-auto text-base font-bold text-black md:text-lg">
                {selectedTicket!.ticketName}
              </p>
            </div>
            <div className="w-full h-[1px] sm:h-full sm:w-[1px] bg-main_primary"></div>
            <div className="flex flex-col flex-1 gap-2">
              <p className="whitespace-nowrap">Estimated Waiting Time</p>
              <p className="my-auto text-base font-bold text-black md:text-lg">
                {eta} minutes
              </p>
            </div>
          </div>
        </>
      ) : variant === "success" ? (
        <>
          <p className="my-10 text-5xl font-bold text-black sm:my-16 lg:my-20 sm:text-6xl lg:text-7xl">{ticketNumber}</p>
        </>
      ) : (
        <>
          <p className="my-10 text-base font-bold text-black md:text-lg sm:my-16 lg:my-20">{errorMessage}</p>
        </>
      )}
    </div>
  );
}
