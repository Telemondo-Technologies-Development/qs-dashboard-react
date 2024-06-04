import { Outlet, createFileRoute } from "@tanstack/react-router";
import AdminDashboard from "./components/admin/-AdminDashboard";
import StaffDashboard from "./components/staff/-StaffDashboard";
import AppointmentsSection from "./-AppointmentsSection";

let temp_user = "admin";

export const Route = createFileRoute("/admin/_admin-layout/dashboard/")({
  component: () => <Dashboard />,
});

function Dashboard() {
  return (
    <div className="flex flex-1 gap-5 px-8 pb-6">
      {temp_user === "admin" ? <AdminDashboard /> : <StaffDashboard />}
      <AppointmentsSection />
    </div>
  );
}
