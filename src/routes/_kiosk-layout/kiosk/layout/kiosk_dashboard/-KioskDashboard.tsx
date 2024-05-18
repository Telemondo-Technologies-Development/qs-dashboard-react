import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useDialogStore } from "../../state_management/-dialog_states";
import { Counter } from "@/utils/types/kiosk_types";
import { counterTypes } from "@/utils/variables/kiosk_variables";

export default function KioskDashboard() {
  
  const [selectedCounter, setSelectedCounter] = useState<Counter | undefined>(undefined)

  const setShowDialog = useDialogStore((state) => state.toggleShowDialog);
  const resetVariant = useDialogStore((state) => state.resetVariant);
  const setSelectedDialogCounter = useDialogStore((state) => state.setSelectedCounter)
  const setSelectedDialogTicket = useDialogStore((state) => state.setSelectedTicket)

  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-white font-poppins text-main_primary">
      <h1 className="mb-3 text-5xl font-bold">Queue</h1>
      <p className="text-xl mb-11">
        Select one of the following to generate a QR queue ticket.
      </p>
      <div className="flex flex-row gap-10 ">
        {counterTypes.map((counterType) => {
          return (
            <button
              key={counterType.counterID}
              className={`flex justify-center flex-col items-center font-bold text-xl gap-4 `}
              onClick={() => {
                if (selectedCounter?.counterID === counterType.counterID) {
                  setSelectedCounter(undefined)
                } else {
                  setSelectedCounter(counterType)
                }
              }}
            >
              <img
                className={`size-56 ${!selectedCounter ? "brightness-100" : `${selectedCounter.counterID === counterType.counterID ? "brightness-100 border-4 border-main_primary rounded-2xl " : "brightness-50 transition duration-300"}`} `}
                src={counterType.counterImage}
                alt={counterType.counterName}
              />
              <p className="text-lg">{counterType.counterName}</p>
            </button>
          );
        })}
      </div>
      <div className="flex gap-48 mt-16 text-lg">
        <Button
          onClick={() => {
            resetVariant();
            setSelectedDialogCounter(selectedCounter!)
            setSelectedDialogTicket(1);
            setShowDialog();
          }}
          className="w-64 h-16 text-lg bg-main_primary"
        >
          Regular Citizen
        </Button>

        <Button
          onClick={() => {
            resetVariant();
            setSelectedDialogCounter(selectedCounter!)
            setSelectedDialogTicket(2);
            setShowDialog();
          }}
          className="w-64 h-16 text-lg bg-main_primary"
        >
          Senior Citizen / <br /> Pregnant / PWD
        </Button>
      </div>
    </div>
  );
}
