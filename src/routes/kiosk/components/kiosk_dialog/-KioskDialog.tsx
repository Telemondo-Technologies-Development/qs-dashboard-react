import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import DialogButtons from "./-DialogButtons";
import DialogContent from "./-DialogContent";
import DialogHeader from "./-DialogHeader";
import { useDialogStore } from "@/stores/kiosk/dialogMgmt";

export default function KioskDialog() {
  const isOpen = useDialogStore((state) => state.isOpen);
  const variant = useDialogStore((state) => state.variant);

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className={`${variant==="confirmation" ? "w-[80vw] max-w-3xl" : "w-[80vw] mobile-m:w-[70vw] mobile-l:w-[60vw] sm:w-[40vw] md:w-[35vw] lg:w-[30vw] max-w-xs"} overflow-hidden rounded-md transition-none`}>
        <div className="flex flex-col items-center justify-center font-poppins">
          <div
            className={`px-4 flex flex-col w-full`}
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
