import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_admin-layout/analytics/')({
  component: () => <Analytics/>
})

function Analytics(){
  return (
    <div className='grid flex-1 place-content-center'>
        ANALYTICS
    </div>
  )
}