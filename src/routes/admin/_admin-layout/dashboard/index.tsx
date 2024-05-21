import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_admin-layout/dashboard/')({
  component: () => <Dashboard/>
})

function Dashboard() {
  return (
    <div className='grid flex-1 place-content-center'>
        DASHBOARD
    </div>
  )
}