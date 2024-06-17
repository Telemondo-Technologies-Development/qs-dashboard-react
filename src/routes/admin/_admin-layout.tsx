import { Outlet, createFileRoute } from "@tanstack/react-router";
import Navbar from "./-Navbar";
import Footer from "../kiosk/components/kiosk_dashboard/-Footer";
import AdminHeader from "./-AdminHeader";
import AddCategoryDialog from "./_admin-layout/monitor-management/add-monitor/-AddCategoryDialog";

export const Route = createFileRoute("/admin/_admin-layout")({
  component: () => (
    <div className="flex h-screen font-poppins text-main_primary">
      <Navbar />
      <div className="relative flex flex-col flex-1">
        <AddCategoryDialog/>
        <AdminHeader/>
        <Outlet />
        <Footer />
      </div>
    </div>
  ),
});
