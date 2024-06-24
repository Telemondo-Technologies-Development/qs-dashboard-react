import { createFileRoute } from '@tanstack/react-router'
import RenderBasedOnRole from '../-RenderBasedOnRole'

export const Route = createFileRoute('/admin/user-management/')({
  component: () => <UserManagement/>
})

function UserManagement(){
  const Admin = (
    <div className='grid flex-1 place-content-center'>
       USER MANAGEMENT
    </div>
  )

  return <RenderBasedOnRole adminComponent={Admin}/>
}