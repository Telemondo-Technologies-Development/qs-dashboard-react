import { createFileRoute } from '@tanstack/react-router'
import SampleLogin from './-SampleLogin'

export const Route = createFileRoute('/admin/login/')({
  component: () => <SampleLogin/>
})