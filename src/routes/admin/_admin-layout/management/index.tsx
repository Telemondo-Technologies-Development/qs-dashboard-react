import { createFileRoute } from "@tanstack/react-router";
import UserCard from "./components/-UserCard";
import { usertypes } from "@/utils/variables/admin_variables";
import { Plus } from "lucide-react";
import { AddEmployee } from "./components/-AddEmployee";
import { Toaster } from "@/components/ui/toaster";

export const Route = createFileRoute("/admin/_admin-layout/management/")({
  component: () => <Management />,
});

function Management() {
  return (
    <div className=" flex  flex-col size-full">
      <Toaster />
      <div className="h-24 flex justify-end ">
        <div className="flex  justify-end  items-center ">
          {/* <button className="bg-main_primary text-white w-48 h-8 mr-9 rounded-sm flex flex-row items-center justify-center ">
            <Plus strokeWidth={5} size={15} />
            Add employee
          </button> */}

          <AddEmployee />
        </div>
      </div>

      {/* <div className="mx-8 flex flex-row flex-wrap gap-5 basis-10 ">
        {usertypes.map((usertypes) => {
          return (
            <UserCard
              key={usertypes.userId}
              userId={usertypes.userId}
              image={usertypes.image}
              userName={usertypes.userName}
              status={usertypes.status}
              role={usertypes.role}
              position={usertypes.position}
              email={usertypes.email}
              joined={usertypes.joined}
              dept={usertypes.dept}
            />
          );
        })}
      </div> */}

      <div className="mx-8 my-10 flex flex-row flex-wrap gap-5 basis-10  ">
        {usertypes.map((usertypes) => {
          return (
            <UserCard
              key={usertypes.userId}
              userId={usertypes.userId}
              image={usertypes.image}
              userName={usertypes.userName}
              status={usertypes.status}
              role={usertypes.role}
              position={usertypes.position}
              email={usertypes.email}
              joined={usertypes.joined}
              dept={usertypes.dept}
            />
          );
        })}
      </div>

      {/* <div className="px-10 auto-cols-auto grid  xl:gap-8 ">
        {usertypes.map((usertypes) => {
          return (
            <UserCard
              key={usertypes.userId}
              userId={usertypes.userId}
              image={usertypes.image}
              userName={usertypes.userName}
              status={usertypes.status}
              role={usertypes.role}
              position={usertypes.position}
              email={usertypes.email}
              joined={usertypes.joined}
              dept={usertypes.dept}
            />
          );
        })}
      </div> */}

      {/* <div className="grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-10 xl:grid-cols-4 xl:grid-rows-2 xl:gap-x-36 place-items-center px-20">
        {usertypes.map((usertypes) => {
          return (
            <UserCard
              key={usertypes.userId}
              userId={usertypes.userId}
              image={usertypes.image}
              userName={usertypes.userName}
              status={usertypes.status}
              role={usertypes.role}
              position={usertypes.position}
              email={usertypes.email}
              joined={usertypes.joined}
              dept={usertypes.dept}
            />
          );
        })}
      </div> */}
    </div>
  );
}
