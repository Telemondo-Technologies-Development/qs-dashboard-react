import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_admin-layout/counter-management/')({
  component: () => <CounterManagement/>
})

function CounterManagement(){
  return (
    <div className='flex flex-col items-center justify-center flex-1'>
      COUNTER MANAGEMENT
    </div>
  )
}