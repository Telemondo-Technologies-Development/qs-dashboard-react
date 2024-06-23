import { createFileRoute } from '@tanstack/react-router'
import RenderBasedOnRole from '../../-RenderBasedOnRole'

export const Route = createFileRoute('/admin/_admin-layout/counter-selection/')({
  component: () => <CounterSelection/>
})

function CounterSelection() {
  const Staff = (
    <div className='grid flex-1 h-screen place-items-center'>
      STAFF COUNTER SELECTION
    </div>
  )

  return <RenderBasedOnRole staffComponent={Staff}/>
}