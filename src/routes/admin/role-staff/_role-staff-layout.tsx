import { createFileRoute, Navigate, Outlet } from "@tanstack/react-router";
import Navbar from "../-Navbar";
import AdminHeader from "../-AdminHeader";
import Footer from "@/routes/kiosk/components/kiosk_dashboard/-Footer";
import { useUserData } from "@/api/auth";
import PageNotFoundComponent from "@/routes/-PageNotFoundComponent";

export const Route = createFileRoute("/admin/role-staff/_role-staff-layout")({
  component: () => <RoleStaffLayout />,
});

function RoleStaffLayout() {
  const { data: userData, isLoading } = useUserData();

  if (isLoading) {
    return (
      <div className="grid h-screen text-3xl place-items-center font-poppins text-main_primary">
        Checking credentials...
      </div>
    );
  }

  if (userData) {
    if (userData.authorities[0].authority === "ROLE_STAFF") {
      return (
        <div className="flex h-screen font-poppins text-main_primary">
          <Navbar role="staff" />
          <div className="relative flex flex-col flex-1">
            <AdminHeader />
            <Outlet />
            <Footer />
          </div>
        </div>
      );
    }
    return <PageNotFoundComponent />;
  }

  return <Navigate to="/admin/login" />;
}
