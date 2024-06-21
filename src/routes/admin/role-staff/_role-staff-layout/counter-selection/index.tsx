import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/role-staff/_role-staff-layout/counter-selection/')({
  component: () => <CounterSelection/>
})

function CounterSelection() {
  return (
    <div className='grid flex-1 place-items-center'>COUNTER SELECTION PAGE</div>
  )
}