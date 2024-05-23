import { Outlet, createFileRoute } from '@tanstack/react-router'
import KioskDialog from './components/kiosk_dialog/-KioskDialog'
import KioskHeader from './components/kiosk_dashboard/-KioskHeader'
import Footer from './components/kiosk_dashboard/-Footer'

export const Route = createFileRoute('/kiosk')({
  component: () => (
    <div className='flex flex-col h-screen'>
      <KioskDialog/>
      <KioskHeader/>
      <Outlet/>
      <Footer/>
    </div>
  )
})