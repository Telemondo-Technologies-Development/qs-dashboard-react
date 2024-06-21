import { Navigate, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/role-staff/')({
  component: () => <Navigate to='/admin/role-staff/dashboard'/>
})