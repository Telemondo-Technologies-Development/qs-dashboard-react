import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_admin-layout/management/')({
  component: () => <Management/>
})

function Management(){
  return (
    <div className='grid flex-1 place-content-center'>
        MANAGEMENT
    </div>
  )
}