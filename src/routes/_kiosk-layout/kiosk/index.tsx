import { createFileRoute } from '@tanstack/react-router'
import KioskDashboard from './layout/kiosk_dashboard/-KioskDashboard';

export const Route = createFileRoute('/_kiosk-layout/kiosk/')({
  component: () => <KioskDashboard/>
})