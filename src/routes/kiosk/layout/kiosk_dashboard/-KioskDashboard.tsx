import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import KioskDialog from "../kiosk_dialog/-KioskDialog";
import {
  useSelectedCounterStore,
  counterTypes,
} from "../../state_management/-CounterType";

export default function KioskDashboard() {
  const selectedCounter = useSelectedCounterStore(
    (state) => state.selectedCounter
  );
  const setSelectedCounterType = useSelectedCounterStore(
    (state) => state.setSelectedCounter
  );
  const resetSelectedCounter = useSelectedCounterStore(
    (state) => state.resetSelectedCounter
  );

  useEffect(() => {
    console.log(selectedCounter);
  }, [selectedCounter]);

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
                if (selectedCounter.counterID === counterType.counterID) {
                  resetSelectedCounter();
                } else {
                  setSelectedCounterType(counterType.counterID);
                }
              }}
            >
              <img
                className={`size-56 ${!selectedCounter.counterID ? "brightness-100" : `${selectedCounter.counterID === counterType.counterID ? "brightness-100 border-4 border-main_primary rounded-2xl " : "brightness-50 transition duration-300"}`} `}
                src={counterType.counterImage}
                alt={counterType.counterName}
              />
              <p className="text-lg">{counterType.counterName}</p>
            </button>
          );
        })}
      </div>
      <div className="flex gap-48 mt-16 text-lg">
        {/* placeholder lang ni kay need og button pang open sa dialog */}
        <KioskDialog />
        {/* <Link to="/">
          <Button className="w-64 h-16 text-lg bg-main_primary">
            Regular Citizen
          </Button>
        </Link> */}
        <Link to="/admin">
          <Button className="w-64 h-16 text-lg bg-main_primary">
            Senior Citizen / <br /> Pregnant / PWD
          </Button>
        </Link>
      </div>
    </div>
  );
}
