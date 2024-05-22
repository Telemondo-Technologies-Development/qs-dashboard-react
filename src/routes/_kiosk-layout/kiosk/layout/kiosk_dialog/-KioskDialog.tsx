import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import DialogButtons from "./-DialogButtons";
import DialogContent from "./-DialogContent";
import DialogHeader from "./-DialogHeader";
import { useDialogStore } from "@/stores/kiosk/dialog_states";

export default function KioskDialog() {
  const isOpen = useDialogStore((state) => state.isOpen);
  const variant = useDialogStore((state) => state.variant);

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className={`w-fit overflow-hidden`}>
        <div className="flex flex-col items-center justify-center font-poppins">
          <div
            className={`${variant === "confirmation" ? "mx-12 px-4 md:px-6" : "mx-12 px-6"} w-full`}
          >
            <DialogHeader variant={variant} />
            <DialogContent variant={variant} />
          </div>
          <DialogButtons variant={variant} />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

{
  /* <div className={`${variant==="confirmation" ? "mx-24" : "mx-12 px-6"} w-full`}> */
}
