import { createFileRoute } from '@tanstack/react-router'
import PageNotFoundComponent from '../-PageNotFoundComponent'

export const Route = createFileRoute('/admin/$')({
  component: () => <PageNotFoundComponent/>
})