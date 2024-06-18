import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Counters } from "@/utils/types/admin_types";
import { Minus } from "lucide-react";

export default function CounterCards(counter: Counters) {
  //   const initials = getInitials(counter.userName);

  return (
    <Card className="flex flex-col  justify-between lg:h-[16rem] lg:w-[15.5rem] xl:h-[18rem] xl:w-[17.5rem]  bg-blue-100 rounded-xl py-5">
      <div>
        <CardHeader className="flex flex-col justify-center items-center py-0">
          <div className="text-main_primary font-bold lg:text-xl">adsa</div>
          <div className="justify-center flex">
            {counter.status === "Unoccupied" && (
              <div className=" lg:px-3 lg:h-4 flex justify-center bg-green-100 text-green-500 font-light gap-1 rounded-full items-center">
                <div className="lg:size-1 xl:size-1.5 bg-green-500 rounded-full" />
                <p className="text-xs font-normal">{counter.status}</p>
              </div>
            )}
            {counter.status === "Occupied" && (
              <div className=" lg:px-3 lg:h-4 flex justify-center bg-red-100 text-red-500 font-light gap-1 rounded-full items-center">
                <div className="size-1.5 bg-red-500 rounded-full" />
                <p className="text-xs font-normal">{counter.status}</p>
              </div>
            )}
          </div>
        </CardHeader>
      </div>

      <CardContent className="lg:text-xs xl:text-sm text-main_primary flex flex-col justify-center py-0">
        <div className="flex justify-center flex-col flex-1  font-normal">
          <p>{counter.userName}</p>
          <p>{counter.position}</p>
          <p>{counter.email}</p>
        </div>
      </CardContent>

      <div>
        <CardFooter className="flex justify-center flex-col gap-5 py-0">
          <div className="bg-white text-main_primary w-full flex flex-col mx-4 rounded-xl h-14 justify-center px-3 mt-2  lg:text-xs xl:text-sm ">
            <div className="flex-row text-right flex justify-between items-center gap-7 ">
              <p>Managed</p>
              <p>{counter.managed}</p>
            </div>
          </div>
          <button className="w-auto px-4 h-7 bg-main_primary text-white lg:text-xs xl:text-sm rounded-sm">
            <div className="flex flex-row items-center gap-3">
              <Minus size={20} strokeWidth={4} />
              <p>Remove Counter</p>
            </div>
          </button>
        </CardFooter>
      </div>
    </Card>
    // <Card className="flex flex-col  justify-between lg:size-full 4k:h-[18rem] 4k:w-[15.5rem] bg-blue-100 rounded-xl ">
    //   <div>
    //     <CardHeader className="flex flex-col justify-center items-center">
    //       <CardTitle className="text-main_primary font-bold lg:text-lg xl:text-xl">
    //         {counter.counterName}
    //       </CardTitle>
    //       <CardDescription className="justify-center flex">
    //         {counter.status === "Unoccupied" && (
    //           <div className=" lg:px-3 lg:h-4 flex justify-center bg-green-100 text-green-500 font-light gap-1 rounded-full items-center">
    //             <div className="lg:size-1 xl:size-1.5 bg-green-500 rounded-full" />
    //             <p className="text-xs font-normal">{counter.status}</p>
    //           </div>
    //         )}
    //         {counter.status === "Occupied" && (
    //           <div className=" lg:px-3 lg:h-4 flex justify-center bg-red-100 text-red-500 font-light gap-1 rounded-full items-center">
    //             <div className="size-1.5 bg-red-500 rounded-full" />
    //             <p className="text-xs font-normal">{counter.status}</p>
    //           </div>
    //         )}
    //       </CardDescription>
    //     </CardHeader>

    //     <CardContent className="lg:text-xs xl:text-sm text-main_primary flex flex-col  justify-center py-0">
    //       <div className="flex justify-center flex-col flex-1  font-normal  ">
    //         <p className="break-all">{counter.userName}</p>
    //         <p className="break-all">{counter.position}</p>
    //         <p className="break-all">{counter.email}</p>
    //       </div>
    //     </CardContent>
    //   </div>

    //   <CardFooter className="flex justify-center flex-col gap-2">
    //     <div className="bg-white text-main_primary w-full flex flex-col mx-4 rounded-xl py-2 justify-center px-3 mt-2  lg:text-xs xl:text-sm">
    //       <div className="flex-row text-right flex justify-between gap-4 items-center">
    //         <p>Managed</p>
    //         <p>{counter.managed}</p>
    //       </div>
    //     </div>
    //     <button className="w-auto px-4 py-2 bg-main_primary text-white lg:text-xs xl:text-sm rounded-sm">
    //       <div className="flex flex-row items-center gap-3">
    //         <Minus size={20} strokeWidth={4} />
    //         <p>Remove Counter</p>
    //       </div>
    //     </button>
    //   </CardFooter>
    // </Card>
  );
}
