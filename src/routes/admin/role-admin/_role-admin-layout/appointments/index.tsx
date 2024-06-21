import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/role-admin/_role-admin-layout/appointments/')({
  component: () => <Appointments/>
})

function Appointments(){
  return (
    <div className='grid flex-1 place-items-center'>STAFF APPOINTMENTS PAGE</div>
  )
}