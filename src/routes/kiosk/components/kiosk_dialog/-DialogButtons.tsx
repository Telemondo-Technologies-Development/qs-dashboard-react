import { useDialogStore } from "@/stores/kiosk/dialogMgmt";

type DialogButtonsProps = {
  variant: string;
};

export default function DialogButtons({ variant }: DialogButtonsProps) {
  const toggleShowDialog = useDialogStore((state) => state.toggleShowDialog);
  const setVariant = useDialogStore((state) => state.setVariant);

  return (
    <div className="flex flex-col-reverse items-center justify-center w-full gap-2 px-4 py-4 bg-gray-200 sm:gap-12 sm:flex-row">
      {variant === "confirmation" ? (
        <>
          <button
            onClick={toggleShowDialog}
            className="w-full py-2 text-base rounded-sm sm:w-40 sm:py-3 lg:py-4 bg-main_secondary text-main_primary hover:bg-main_secondary"
          >
            Cancel
          </button>
          <button
            onClick={() => setVariant("error")}
            className="w-full py-2 text-base text-white rounded-sm sm:w-40 sm:py-3 lg:py-4 bg-main_primary hover:bg-main_primary"
          >
            Continue
          </button>
        </>
      ) : variant === "success" ? (
        <>
          <button
            onClick={() => {
              toggleShowDialog();
            }}
            className="w-40 py-3 text-base text-white rounded-sm lg:w-48 lg:py-4 bg-main_primary hover:bg-main_primary"
          >
            Okay
          </button>
        </>
      ) : (
        <button
          onClick={toggleShowDialog}
          className="w-40 py-3 text-base text-white rounded-sm lg:w-48 lg:py-4 bg-main_primary hover:bg-main_primary"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
