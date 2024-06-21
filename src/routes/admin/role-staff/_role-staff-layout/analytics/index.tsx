import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/role-staff/_role-staff-layout/analytics/')({
  component: () => <Analytics/>
})

function Analytics() {
  return (
    <div className='grid flex-1 place-items-center'>STAFF ANALYTICS PAGE</div>
  )
}