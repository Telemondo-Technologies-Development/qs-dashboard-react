import { Outlet, createFileRoute } from '@tanstack/react-router'
import Header from './_kiosk-layout/kiosk/layout/kiosk_dashboard/-Header'
import Footer from './_kiosk-layout/kiosk/layout/kiosk_dashboard/-Footer'
import KioskDialog from './_kiosk-layout/kiosk/layout/kiosk_dialog/-KioskDialog'

export const Route = createFileRoute('/_kiosk-layout')({
  component: () => (
    <div className='flex flex-col h-screen'>
      <KioskDialog/>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
})