import { createFileRoute } from '@tanstack/react-router'
import AppointmentsSection from './-AppointmentsSection';
import StaffDashboard from './-StaffDashboard';

export const Route = createFileRoute('/admin/role-staff/_role-staff-layout/dashboard/')({
  component: () => <Dashboard/>
})

function Dashboard() {
  return (
    <div className="flex flex-1 gap-5 px-8 pb-6">
      <StaffDashboard />
      <AppointmentsSection />
    </div>
  );
}