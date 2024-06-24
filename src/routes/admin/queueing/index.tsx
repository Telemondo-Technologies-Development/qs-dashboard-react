import { createFileRoute } from '@tanstack/react-router'
import DataTable from './-DataTable'
import { columns } from './-columns'
import { queueTickets } from './-queuetickets'

export const Route = createFileRoute('/admin/queueing/')({
  component: () => <Queueing/>
})

function Queueing(){
  return (
    <div className='flex flex-col flex-1 h-1 px-8 py-6'>
        <DataTable columns={columns} data={queueTickets}/>
    </div>
  )
}