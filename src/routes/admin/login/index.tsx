import { Navigate, createFileRoute } from "@tanstack/react-router";
import Login from "./components/-Login";
import { useUserData } from "@/api/auth";

export const Route = createFileRoute("/admin/login/")({
  component: () => <AdminLogin />,
});

function AdminLogin() {
  const { data: userData, isLoading } = useUserData();

  if (isLoading) {
    return (
      <div className="grid h-screen text-3xl place-items-center text-main_primary font-poppins">
        Checking credentials...
      </div>
    );
  }
  if (userData) {
    if (userData.authorities[0].authority === "ROLE_ADMIN") {
      return <Navigate to="/admin/role-admin/dashboard" />;
    }
    return <Navigate to="/admin/role-staff/dashboard" />;
  }

  return (
    <div className="grid h-screen bg-main_primary place-items-center">
      <Login />
    </div>
  );
}
