import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_admin-layout/appointments/')({
  component: () => <Appointments/>
})

function Appointments(){
  return (
    <div className='grid flex-1 place-content-center'>
        APPOINTMENTS
    </div>
  )
}