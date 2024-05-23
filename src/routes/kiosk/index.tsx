import { createFileRoute } from '@tanstack/react-router'
import KioskDashboard from './components/kiosk_dashboard/-KioskDashboard'

export const Route = createFileRoute('/kiosk/')({
  component: () => <KioskDashboard/>
})