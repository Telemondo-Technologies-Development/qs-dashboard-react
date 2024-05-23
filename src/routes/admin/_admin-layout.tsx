import { Outlet, createFileRoute } from "@tanstack/react-router";
import Navbar from "./-Navbar";
import Footer from "../kiosk/components/kiosk_dashboard/-Footer";
import AdminHeader from "./-AdminHeader";

export const Route = createFileRoute("/admin/_admin-layout")({
  component: () => (
    <div className="flex h-screen font-poppins">
      <Navbar />
      <div className="flex flex-col flex-1">
        <AdminHeader/>
        <Outlet />
        <Footer />
      </div>
    </div>
  ),
});
