import Admin from '@/pages/admin/Admin'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/admin')({
  component: () => <Admin/>
})