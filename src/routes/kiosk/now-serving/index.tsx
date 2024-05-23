import { createFileRoute } from '@tanstack/react-router'
import NowServing from './components/-NowServing'
import Video from './components/-Video'

export const Route = createFileRoute('/kiosk/now-serving/')({
  component: () => (
    <div className='flex flex-1'>
      <NowServing/>
      <Video/>
    </div>
  )
})