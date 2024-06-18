import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import Footer from "@/routes/kiosk/components/kiosk_dashboard/-Footer";
import { useAdminGlobalStore } from "@/stores/admin/adminGlobalStore";

type PreviewDialogProps = {
  type: "monitor" | "kiosk";
};

export default function PreviewDialog({ type }: PreviewDialogProps) {
  const { showPreviewDialog, togglePreviewDialog } = useAdminGlobalStore();

  return (
    <AlertDialog open={showPreviewDialog}>
      <AlertDialogContent className="sm:rounded-none w-[80vw] h-[90vh] gap-4 border-none shadow-none overflow-hidden flex flex-col items-center bg-transparent font-poppins">
        <div className="flex flex-col flex-1 w-full">
          <div className="flex justify-between w-full px-12 py-4 text-white bg-main_primary">
            <div className="flex items-center gap-3">
              <img src="/kiosk-logo.png" className="size-16" />
              <div className="font-semibold">
                <p className="text-2xl">KIOSK</p>
                <p className="text-sm">Queueing and Billing System</p>
              </div>
            </div>
            <div className="flex flex-col items-end justify-center text-sm">
              <p className="font-semibold">January 46, 5032</p>
              <p>09:50:54 PM</p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1 bg-white">
            {type === "monitor" ? "MONITOR PREVIEW" : "KIOSK PREVIEW"}
          </div>
          <Footer />
        </div>
        <button
          onClick={() => togglePreviewDialog()}
          className="w-[70%] py-2 rounded-md font-semibold text-sm bg-main_secondary text-main_primary text-center"
        >
          Close Preview
        </button>
      </AlertDialogContent>
    </AlertDialog>
  );
}
