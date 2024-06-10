import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Users } from "@/utils/types/admin_types";

// Utility function to get initials
function getInitials(name: string) {
  const nameArray = name.split(" ");
  if (nameArray.length === 1) {
    return nameArray[0].slice(0, 2).toUpperCase();
  }
  const firstInitial = nameArray[0].charAt(0).toUpperCase();
  const lastInitial = nameArray[nameArray.length - 1].charAt(0).toUpperCase();
  return firstInitial + lastInitial;
}

export default function UserCard(user: Users) {
  const initials = getInitials(user.userName);

  return (
    <Card className="flex flex-col  justify-between lg:h-[17rem] lg:w-[15.5rem] xl:h-[18rem] xl:w-[16.5rem] bg-blue-100 rounded-xl">
      <div>
        <CardHeader className="flex flex-row pb-6">
          <div className="flex justify-center gap-3">
            <Avatar className="lg:size-9   xl:size-12">
              <AvatarImage src={user.image} className="object-cover" />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>

            <div className="flex flex-col justify-between">
              <CardTitle className="text-main_primary font-bold lg:text-lg xl:text-xl">
                {user.userName}
              </CardTitle>
              <CardDescription className="justify-center flex">
                {user.status === "Online" && (
                  <div className=" lg:w-16 lg:h-4  xl:w-20 xl:h-4 flex justify-center bg-green-100 text-green-500 font-light gap-1 rounded-full items-center">
                    <div className="lg:size-1 xl:size-1.5 bg-green-500 rounded-full" />
                    <p className="text-xs font-normal">{user.status}</p>
                  </div>
                )}
                {user.status === "Offline" && (
                  <div className=" lg:w-16 lg:h-4 xl:w-20 xl:h-4 flex justify-center bg-red-100 text-red-500 font-light gap-1 rounded-full items-center">
                    <div className="size-1.5 bg-red-500 rounded-full" />
                    <p className="text-xs font-normal">{user.status}</p>
                  </div>
                )}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="lg:text-xs xl:text-sm text-main_primary flex flex-col justify-center py-0">
          <div className="flex justify-center flex-col font-normal">
            <p>{user.role}</p>
            <p>{user.position}</p>
            <p>{user.email}</p>
          </div>
        </CardContent>

        <div className="bg-white text-main_primary flex flex-col mx-4 rounded-xl h-16 justify-center px-3 mt-2 mb-3 lg:text-xs xl:text-sm">
          <div className="flex-row flex justify-between">
            <p>Joined</p>
            {user.joined > 1 && <p>{user.joined} years ago</p>}
            {user.joined === 1 && <p>{user.joined} year ago</p>}
          </div>
          <div className="flex-row flex justify-between">
            <p>Dept.</p>
            <p>{user.dept}</p>
          </div>
        </div>
      </div>

      <CardFooter className="flex justify-center mt-auto">
        <button className="w-20 h-8 bg-main_primary text-white lg:text-xs xl:text-sm rounded-sm">
          Edit
        </button>
      </CardFooter>
    </Card>
  );
}
