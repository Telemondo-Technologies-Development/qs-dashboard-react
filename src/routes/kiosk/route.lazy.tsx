import { createLazyFileRoute } from '@tanstack/react-router'
import Header from './layout/kiosk_dashboard/-Header';
import KioskDashboard from './layout/kiosk_dashboard/-KioskDashboard';
import Footer from './layout/kiosk_dashboard/-Footer';

export const Route = createLazyFileRoute('/kiosk')({
  component: () => <Kiosk/>
})


function Kiosk() {
  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <KioskDashboard />
      <Footer />
    </div>
  );
}