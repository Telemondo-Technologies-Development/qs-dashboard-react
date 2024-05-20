type DialogHeaderProps = {
  variant: string;
};

export default function DialogHeader({ variant }: DialogHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-5 mt-6">
      <div className="rounded-[100%] size-16 bg-main_primary grid place-items-center">
        <img
          src={variant === "confirmation" ? "/question_mark.png" : variant === "success" ? "/success.png" : "/error.png"}
          alt=""
          className="size-[60%]"
        />
      </div>
      <div className="space-y-1 text-center">
        <h1 className="text-lg font-bold lg:text-xl">
          {variant === "confirmation"
            ? "Would you like to print your ticket?"
            : variant==="success" ? "Success!" : "Error!"}
        </h1>
        <p className="text-sm lg:text-base">
          {variant === "confirmation"
            ? 'If no, press "Cancel", if yes, press "Continue" to proceed.'
            : variant==="success" ? "Your ticket number is" : "Oh no... Something went wrong."}
        </p>
      </div>
    </div>
  );
}
