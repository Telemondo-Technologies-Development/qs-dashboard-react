import { Navigate, createFileRoute } from "@tanstack/react-router";
import Login from "./components/-Login";
import { useUserData } from "@/api/auth";

export const Route = createFileRoute("/admin/login/")({
  component: () => <AdminLogin />,
});


function AdminLogin() {
  const {
    data: userData,
    isLoading,
  } = useUserData();

  if (isLoading) {
    return (
      <div className="grid h-screen text-3xl place-items-center text-main_primary">
        Checking credentials...
      </div>
    );
  }
  if (userData) {
    return <Navigate to="/admin/dashboard"/>;
  }
  
  return (
    <div className="grid h-screen bg-main_primary place-items-center">
      <Login />
    </div>
  );
}
