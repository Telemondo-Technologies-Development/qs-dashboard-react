import Kiosk from '@/pages/kiosk/Kiosk'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/kiosk')({
  component: () => <Kiosk/>
})