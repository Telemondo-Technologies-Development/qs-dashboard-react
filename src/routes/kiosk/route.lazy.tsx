import { createLazyFileRoute } from '@tanstack/react-router'
import Header from './layout/kiosk_dashboard/-Header';
import KioskDashboard from './layout/kiosk_dashboard/-KioskDashboard';
import Footer from './layout/kiosk_dashboard/-Footer';
import KioskDialog from './layout/kiosk_dialog/-KioskDialog';

export const Route = createLazyFileRoute('/kiosk')({
  component: () => <Kiosk/>
})


function Kiosk() {
  return (
    <div className="flex flex-col h-screen ">
      <KioskDialog/>
      <Header />
      <KioskDashboard />
      <Footer />
    </div>
  );
}