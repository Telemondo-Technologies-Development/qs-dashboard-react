import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/role-admin/_role-admin-layout/user-management/')({
  component: () => <UserManagement/>
})

function UserManagement(){
  return (
    <div className='grid flex-1 place-content-center'>
       USER MANAGEMENT
    </div>
  )
}