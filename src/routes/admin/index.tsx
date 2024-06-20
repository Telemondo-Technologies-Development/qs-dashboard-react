import { Navigate, createFileRoute } from "@tanstack/react-router";
import { useCachedUserData } from "@/api/auth";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
import { LoginData } from "@/utils/types/auth_types";

export const Route = createFileRoute("/admin/")({
  component: () => <Admin />,
});

function Admin() {
  // const queryClient = useQueryClient()
  const getUserDataLocalStorage = localStorage.getItem("userDataLocalStorage")
  const userDataLocalStorage = getUserDataLocalStorage && JSON.parse(getUserDataLocalStorage) as LoginData
  // const cachedUserData = queryClient.getQueryData<LoginData>(['userData'])
  const { data: cachedUserData } = useCachedUserData();
  console.log("THIS IS FROM INDEX.TSX", cachedUserData);

  if (userDataLocalStorage) {
    return <Navigate to="/admin/dashboard" replace={true} />;
  }
  return <Navigate to="/admin/login" replace={true} />;
}
