import { createFileRoute, Navigate } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/role-admin/')({
  component: () => <Navigate to='/admin/role-admin/dashboard'/>
})