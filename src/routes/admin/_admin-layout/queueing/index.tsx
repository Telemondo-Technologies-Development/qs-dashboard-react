import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_admin-layout/queueing/')({
  component: () => <Queueing/>
})

function Queueing(){
  return (
    <div className='grid flex-1 place-content-center'>
        QUEUEING
    </div>
  )
}