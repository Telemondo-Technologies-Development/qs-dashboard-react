import { createFileRoute } from '@tanstack/react-router'
import KioskDashboard from './components/kiosk_dashboard/-KioskDashboard'
import PageNotFoundComponent from '../-PageNotFoundComponent'

export const Route = createFileRoute('/kiosk/')({
  component: () => <KioskDashboard/>,
  notFoundComponent: () => <PageNotFoundComponent/>
})