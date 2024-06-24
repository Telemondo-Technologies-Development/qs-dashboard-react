import { createFileRoute } from "@tanstack/react-router";
import AdminDashboard from "./-AdminDashboard";
import AppointmentsSection from "./-AppointmentsSection";
import StaffDashboard from "./-StaffDashboard";
import RenderBasedOnRole from "../-RenderBasedOnRole";

export const Route = createFileRoute("/admin/dashboard/")({
  component: () => <Dashboard />,
});

function Dashboard() {
  const Admin = (
    <div className="flex flex-1 gap-5 px-8 pb-6">
      <AdminDashboard />
      <AppointmentsSection />
    </div>
  );

  const Staff = (
    <div className="flex flex-1 gap-5 px-8 pb-6">
      <StaffDashboard />
      <AppointmentsSection />
    </div>
  );

  return <RenderBasedOnRole adminComponent={Admin} staffComponent={Staff} />;
}
