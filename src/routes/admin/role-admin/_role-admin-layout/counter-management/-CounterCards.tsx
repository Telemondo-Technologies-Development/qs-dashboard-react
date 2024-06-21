import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Counters } from "@/utils/types/admin_types";
import { Minus } from "lucide-react";

export default function CounterCards(counter: Counters) {

  return (
    <Card className="flex flex-col  justify-between lg:h-[16rem] lg:w-[15.5rem] xl:h-[18rem] xl:w-[17.5rem]  bg-blue-100 rounded-xl py-5">
      <div>
        <CardHeader className="flex flex-col items-center justify-center py-0">
          <div className="font-bold text-main_primary lg:text-xl">adsa</div>
          <div className="flex justify-center">
            {counter.status === "Unoccupied" && (
              <div className="flex items-center justify-center gap-1 font-light text-green-500 bg-green-100 rounded-full  lg:px-3 lg:h-4">
                <div className="lg:size-1 xl:size-1.5 bg-green-500 rounded-full" />
                <p className="text-xs font-normal">{counter.status}</p>
              </div>
            )}
            {counter.status === "Occupied" && (
              <div className="flex items-center justify-center gap-1 font-light text-red-500 bg-red-100 rounded-full  lg:px-3 lg:h-4">
                <div className="size-1.5 bg-red-500 rounded-full" />
                <p className="text-xs font-normal">{counter.status}</p>
              </div>
            )}
          </div>
        </CardHeader>
      </div>

      <CardContent className="flex flex-col justify-center py-0 lg:text-xs xl:text-sm text-main_primary">
        <div className="flex flex-col justify-center flex-1 font-normal">
          <p>{counter.userName}</p>
          <p>{counter.position}</p>
          <p>{counter.email}</p>
        </div>
      </CardContent>

      <div>
        <CardFooter className="flex flex-col justify-center gap-5 py-0">
          <div className="flex flex-col justify-center w-full px-3 mx-4 mt-2 bg-white text-main_primary rounded-xl h-14 lg:text-xs xl:text-sm ">
            <div className="flex flex-row items-center justify-between text-right gap-7 ">
              <p>Managed</p>
              <p>{counter.managed}</p>
            </div>
          </div>
          <button className="w-auto px-4 text-white rounded-sm h-7 bg-main_primary lg:text-xs xl:text-sm">
            <div className="flex flex-row items-center gap-3">
              <Minus size={20} strokeWidth={4} />
              <p>Remove Counter</p>
            </div>
          </button>
        </CardFooter>
      </div>
    </Card>
  );
}
