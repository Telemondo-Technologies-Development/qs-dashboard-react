import { createFileRoute } from '@tanstack/react-router'
import AdminDashboard from './components/admin/-AdminDashboard'
import StaffDashboard from './components/staff/-StaffDashboard'

const temp_user = "admin"

export const Route = createFileRoute('/admin/_admin-layout/dashboard/')({
  component: () => <Dashboard/>
})


function Dashboard() {
  return (
    temp_user==="admin" ? <AdminDashboard/> : <StaffDashboard/>
  )
}