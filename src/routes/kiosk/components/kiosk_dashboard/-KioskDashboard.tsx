import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useDialogStore } from "@/stores/kiosk/dialogMgmt";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useFetchCounterTypes } from "@/api/counterType";
import { CounterType } from "@/utils/types/counterType";

export default function KioskDashboard() {
  const [selectedCounter, setSelectedCounter] = useState<CounterType | undefined>(undefined);

  const setShowDialog = useDialogStore((state) => state.toggleShowDialog);
  const resetVariant = useDialogStore((state) => state.resetVariant);
  const setSelectedDialogCounter = useDialogStore((state) => state.setSelectedCounter);
  const setSelectedDialogTicket = useDialogStore((state) => state.setSelectedTicket);

  const { data, isLoading, error } = useFetchCounterTypes();

  useEffect(() => {
    console.log(selectedCounter);
  }, [selectedCounter]);

  if (isLoading) return <div className="grid flex-1 text-2xl font-semibold place-items-center">Loading...</div>;
  if (error) return <div className="grid flex-1 text-2xl font-semibold place-items-center">Error loading data</div>;

  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-white font-poppins text-main_primary mobile-s:mx-5">
      <h1 className="font-bold mobile-s:text-2xl mobile-s:mt-10 mobile-s:mb-2 sm:mt-7 sm:mb-2 sm:text-2xl md:text-4xl lg:mt-10 lg:mb-4 xl:3xl">
        Queue
      </h1>
      <p className=" mobile-s:text-sm mobile-s:text-center mobile-s:mb-5 sm:text-sm sm:mb-5 md:mb-9 md:text-lg lg:text-base">
        Select one of the following to generate a QR queue ticket.
      </p>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-screen flex justify-center "
      >
        <div className="mobile-s:w-3/4 2xl:w-[90%]">
          <CarouselContent className="-ml-3">
            {data?.content.map((counterType) => (
              <CarouselItem
                key={counterType.id}
                className="mobile-s:basis-full mobile-s:flex mobile-s:justify-center  mobile-l:basis-1/2 sm:basis-1/3  lg:basis-1/4  xl:basis-1/5  pl-3"
              >
                <button
                  className={`flex items-center flex-col font-bold  mobile-s:w-40  mobile-l:w-40  sm:w-36 sm:gap-2 md:w-48 lg:w-44  xl:w-56`}
                  onClick={() => {
                    if (selectedCounter?.id === counterType.id) {
                      setSelectedCounter(undefined);
                    } else {
                      setSelectedCounter(counterType);
                    }
                  }}
                >
                  <div
                    className={`mobile-s:size-40  mobile-l:size-40 sm:size-36 md:size-44 2xl:size-56 flex items-center justify-center ${!selectedCounter ? "brightness-100 transition duration-300" : `${selectedCounter.id === counterType.id ? "brightness-100 border-4 border-main_primary rounded-2xl " : "brightness-50 transition duration-300"}`} `}
                    style={{ backgroundColor: '#f0f0f0', width: '100%', height: '100%' }}
                  >
                    <span className="text-2xl">{counterType.abbrev}</span>
                  </div>
                  <div>
                    <p className="mobile-s:text-sm sm:text-xs md:text-sm lg:text-sm 2xl:text-base">
                      {counterType.name}
                    </p>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselPrevious className="absolute mobile-s:left-5 mobile-l:left-3 sm:left-10" />
        <CarouselNext className="absolute mobile-s:right-5  mobile-l:right-3 sm:right-10" />
      </Carousel>
      <div className="flex mobile-s:my-12 mobile-s:gap-6 sm:my-7 sm:gap-20 md:mt-16 lg:gap-36 xl:gap-48">
        <Button
          disabled={!selectedCounter}
          onClick={() => {
            resetVariant();
            setSelectedDialogCounter(selectedCounter!);
            setSelectedDialogTicket(0); 
            setShowDialog();
          }}
          className="mobile-s:w-28 mobile-s:text-xs sm:w-36 sm:h-10 sm:text-xs md:w-52 md:text-base md:h-14 lg:text-sm lg:w-52 bg-main_primary"
        >
          Regular Citizen
        </Button>

        <Button
          disabled={!selectedCounter}
          onClick={() => {
            resetVariant();
            setSelectedDialogCounter(selectedCounter!);
            setSelectedDialogTicket(1); 
            setShowDialog();
          }}
          className="mobile-s:w-28 mobile-s:text-xs sm:w-36 sm:h-10 sm:text-xs md:w-52 md:text-base md:h-14 lg:text-sm lg:w-52 bg-main_primary"
        >
          Senior Citizen / <br /> Pregnant / PWD
        </Button>
      </div>
    </div>
  );
}
