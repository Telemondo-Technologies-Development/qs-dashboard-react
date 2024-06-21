import { createFileRoute } from '@tanstack/react-router'
import AppointmentsSection from './-AppointmentsSection';
import AdminDashboard from './-AdminDashboard';

export const Route = createFileRoute('/admin/role-admin/_role-admin-layout/dashboard/')({
  component: () => <Dashboard/>
})

function Dashboard() {
  return (
    <div className="flex flex-1 gap-5 px-8 pb-6">
      <AdminDashboard/>
      <AppointmentsSection />
    </div>
  );
}