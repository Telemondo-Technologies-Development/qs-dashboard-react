import { createFileRoute } from '@tanstack/react-router'
import DataTable from './-DataTable'
import { queueTickets} from './-queuetickets'
import { columns } from './-columns'

export const Route = createFileRoute('/admin/_admin-layout/queueing/')({
  component: () => <Queueing/>
})

function Queueing(){
  return (
    <div className='flex flex-col flex-1 px-8 py-6 overflow-auto'>
        <DataTable columns={columns} data={queueTickets}/>
    </div>
  )
}