import { createFileRoute, Outlet, Navigate } from "@tanstack/react-router";
import { useMonitorManagementStore } from "@/stores/admin/monitorMgmt";
import { useUserData } from "@/api/auth";
import Navbar from "../-Navbar";
import AdminHeader from "../-AdminHeader";
import Footer from "@/routes/kiosk/components/kiosk_dashboard/-Footer";
import PageNotFoundComponent from "@/routes/-PageNotFoundComponent";
import PreviewDialog from "./-PreviewDialog";
import AddCounterSheet from "./_role-admin-layout/monitor-management/add-monitor/-AddCounterSheet";

export const Route = createFileRoute("/admin/role-admin/_role-admin-layout")({
  component: () => <RoleAdminLayout />,
});

function RoleAdminLayout() {
  const { showAddCounterSheet: showAddCategoryDialog } =
    useMonitorManagementStore();
  const { data: userData, isLoading } = useUserData();

  if (isLoading) {
    return (
      <div className="grid h-screen text-3xl place-items-center font-poppins text-main_primary">
        Checking credentials...
      </div>
    );
  }

  if (userData) {
    if (userData.authorities[0].authority === "ROLE_ADMIN") {
      return (
        <div className="flex h-screen font-poppins text-main_primary">
          {showAddCategoryDialog && (
            <div className="absolute top-0 left-0 z-20 w-screen h-screen bg-black/30"></div>
          )}
          <PreviewDialog />
          <AddCounterSheet />
          <Navbar role="admin" />
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
