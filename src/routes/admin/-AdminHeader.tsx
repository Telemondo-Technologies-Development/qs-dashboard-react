import { useCachedUserData } from "@/api/auth";
import { useQueryClient } from "@tanstack/react-query";
import { LoginData } from "@/utils/types/auth_types";

export default function AdminHeader() {
  // const queryClient = useQueryClient();
  const { data: cachedUserData, error } = useCachedUserData();
  const getUserDataLocalStorage = localStorage.getItem("userDataLocalStorage")
  const userDataLocalStorage = getUserDataLocalStorage && JSON.parse(getUserDataLocalStorage) as LoginData
  // const cachedUserData = queryClient.getQueryData<LoginData>(["userData"]);
  // console.log("THIS IS FROM ADMINHEADER", userDataLocalStorage);
  console.log("THIS IS FROM ADMINHEADER", cachedUserData);

  return (
    <div className="flex items-center justify-between px-8 pt-6 pb-3">
      <p className="text-xl font-bold">
        <span className="font-normal">Good Morning,</span> User!
      </p>
      <div className="flex items-center gap-10">
        <img src="/notification.svg" className="size-5" />
        <div className="flex items-center gap-[10px]">
          <img src="/user-icon.svg" className="size-5" />
          <p className="text-sm font-bold">
            {userDataLocalStorage
                ? `${userDataLocalStorage.firstName} ${userDataLocalStorage.lastName}`
                : "Loading..."}
            {/* {error
              ? error.message
              : cachedUserData
                ? `${cachedUserData.firstName} ${cachedUserData.lastName}`
                : "Loading..."} */}
          </p>
        </div>
      </div>
    </div>
  );
}
