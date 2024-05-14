import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import DialogButtons from "./-DialogButtons";
import DialogContent from "./-DialogContent";
import DialogHeader from "./-DialogHeader";
import { Button } from "@/components/ui/button";

export default function KioskDialog() {
  let variant = "confirmation";

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className="w-64 h-16 overflow-hidden text-lg bg-main_primary">
          Regular Citizen
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent
        className={`w-fit overflow-hidden`}
      >
        <div className="flex flex-col items-center justify-center font-poppins">
          <div className={`${variant==="confirmation" ? "mx-12 px-4 md:px-6" : "mx-12 px-6"} w-full`}>
            <DialogHeader variant={variant} />
            <DialogContent variant={variant} />
          </div>
          <DialogButtons variant={variant} />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

{/* <div className={`${variant==="confirmation" ? "mx-24" : "mx-12 px-6"} w-full`}> */}

