import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/role-staff/_role-staff-layout/queueing/')({
  component: () => <Queueing/>
})

function Queueing() {
  return (
    <div className='grid flex-1 place-items-center'>STAFF QUEUEING PAGE</div>
  )
}