import { Button } from "@/components/ui/button";

type DialogButtonsProps = {
  variant: string;
};

export default function DialogButtons({ variant }: DialogButtonsProps) {
  return (
    <div className="flex justify-center w-full gap-20 py-6 bg-gray-200">
      {variant === "confirmation" ? (
        <>
          <Button className="w-48 text-base rounded-sm lg:text-lg lg:w-52 py-7 bg-main_secondary text-main_primary hover:bg-main_secondary">
            Cancel
          </Button>
          <Button className="w-48 text-base text-white rounded-sm lg:text-lg lg:w-52 py-7 bg-main_primary hover:bg-main_primary">
            Continue
          </Button>
        </>
      ) : variant === "success" ? (
        <>
          <Button className="w-48 text-base text-white rounded-sm lg:text-lg lg:w-52 py-7 bg-main_primary hover:bg-main_primary">
            Okay
          </Button>
        </>
      ) : (
        <Button className="w-48 text-base text-white rounded-sm lg:text-lg lg:w-52 py-7 bg-main_primary hover:bg-main_primary">
          Try Again
        </Button>
      )}
    </div>
  );
}
