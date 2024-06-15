import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_admin-layout/kiosk-management/')({
  component: () => <KioskManagement/>
})

function KioskManagement() {
   return (
    <div className='flex flex-col items-center justify-center flex-1'>
      KIOSK MGMT
    </div>
   )
}