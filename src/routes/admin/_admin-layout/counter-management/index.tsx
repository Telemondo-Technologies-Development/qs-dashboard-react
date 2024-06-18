import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import CounterCards from "./-CounterCards";
// import UserCard from "./components/-UserCard";
import { countertypes } from "@/utils/variables/admin_variables";

export const Route = createFileRoute(
  "/admin/_admin-layout/counter-management/"
)({
  component: () => <CounterManagement />,
});

function CounterManagement() {
  return (
    <div className=" flex  flex-col size-full overflow-hidden mb-0.5">
      {/* <Toaster /> */}
      <div className="h-24 flex justify-end my-5">
        <div className="flex  justify-end  items-center ">
          <button className="bg-main_primary text-white px-5 h-8 mr-9  rounded-sm flex flex-row items-center justify-center ">
            <div className="flex flex-row gap-3 items-center">
              <Plus strokeWidth={5} size={15} />
              <p>Add Counter</p>
            </div>
          </button>

          {/* <AddEmployee /> */}
        </div>
      </div>

      {/* <div className="mx-8 flex flex-row flex-wrap gap-5 basis-10 ">
        {countertypes.map((countertypes) => {
          return (
            <UserCard
              key={countertypes.userId}
              userId={countertypes.userId}
              image={countertypes.image}
              userName={countertypes.userName}
              status={countertypes.status}
              role={countertypes.role}
              position={countertypes.position}
              email={countertypes.email}
              joined={countertypes.joined}
              dept={countertypes.dept}
            />
          );
        })}
      </div> */}

      {/* <div className="overflow-y-scroll">
        <div className="mx-5 my-10 mt-0 flex flex-row justify-between flex-wrap gap-5 basis-10 ">
          {countertypes.map((countertypes) => {
            return (
              <CounterCards
                key={countertypes.counterId}
                counterId={countertypes.counterId}
                counterName={countertypes.counterName}
                userName={countertypes.userName}
                status={countertypes.status}
                position={countertypes.position}
                email={countertypes.email}
                managed={countertypes.managed}
              />
            );
          })}
          <div className="flex-1"></div>
        </div>
      </div> */}

      {/* <div className="px-10 auto-cols-auto grid  xl:gap-8 ">
        {countertypes.map((countertypes) => {
          return (
            <UserCard
              key={countertypes.userId}
              userId={countertypes.userId}
              image={countertypes.image}
              userName={countertypes.userName}
              status={countertypes.status}
              role={countertypes.role}
              position={countertypes.position}
              email={countertypes.email}
              joined={countertypes.joined}
              dept={countertypes.dept}
            />
          );
        })}
      </div> */}

      <div className="overflow-y-scroll pb-8">
        <div className="grid lg:grid-cols-3 lg:px-10  lg:gap-10 xl:gap-x-10 1500:grid-cols-4    1800:grid-cols-5 4k:flex 4k:flex-wrap place-items-center  ">
          {countertypes.map((countertypes) => {
            return (
              <CounterCards
                key={countertypes.counterId}
                counterId={countertypes.counterId}
                counterName={countertypes.counterName}
                userName={countertypes.userName}
                status={countertypes.status}
                position={countertypes.position}
                email={countertypes.email}
                managed={countertypes.managed}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
