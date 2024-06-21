import { Navigate, Outlet, createFileRoute } from "@tanstack/react-router";
import Navbar from "./-Navbar";
import Footer from "../kiosk/components/kiosk_dashboard/-Footer";
import AdminHeader from "./-AdminHeader";
import AddCategoryDialog from "./_admin-layout/monitor-management/add-monitor/-AddCategoryDialog";
import { useMonitorManagementStore } from "@/stores/admin/monitorMgmt";
import PreviewDialog from "./-PreviewDialog";
import { useUserData } from "@/api/auth";

export const Route = createFileRoute("/admin/_admin-layout")({
  component: () => <AdminLayout />,
});

function AdminLayout() {
  const { showAddCategoryDialog } = useMonitorManagementStore();
  const { data: userData } = useUserData();
  if (userData) {
    return (
      <div className="flex h-screen font-poppins text-main_primary">
        {showAddCategoryDialog && (
          <div className="absolute top-0 left-0 z-20 w-screen h-screen bg-black/30"></div>
        )}
        <Navbar />
        <div className="relative flex flex-col flex-1">
          <PreviewDialog />
          <AddCategoryDialog />
          <AdminHeader />
          <Outlet />
          <Footer />
        </div>
      </div>
    );
  }
  return <Navigate to="/admin/login" />;
}
