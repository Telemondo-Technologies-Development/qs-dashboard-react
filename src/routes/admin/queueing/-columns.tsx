import { ColumnDef } from "@tanstack/react-table"
import { QueueTicket } from "./-queuetickets"


export const columns : ColumnDef<QueueTicket>[] = [
    {
        header: () => <div className="text-center">Ticket</div>,
        accessorKey: "ticket",
        cell: ({row}) => {
            return <div className="text-center">R-{row.getValue("ticket")}</div>
        }
    },
    {
        header: () => <div className="text-center">Customer Type</div>,
        accessorKey: "customerType",
        cell: ({row}) => {
            return <div className="text-center">{row.getValue("customerType")}</div>
        }
    },
    {
        header: () => <div className="text-center">Counter</div>,
        accessorKey: "counter",
        cell: ({row}) => {
            return <div className="text-center">{row.getValue("counter")}</div>
        }
    },
    {
        header: () => <div className="text-center">Date</div>,
        accessorKey: "date",
        cell: ({row}) => {
            return <div className="text-center">{row.getValue("date")}</div>
        }
    },
    {
        header: () => <div className="text-center">Status</div>,
        accessorKey: "status",
        cell: ({row}) => {
            if(row.getValue("status")==="Waiting"){
                return <div className="py-2 text-center text-white rounded-full bg-amber-500">{row.getValue("status")}</div>
            }
            if(row.getValue("status")==="Finished"){
                return <div className="py-2 text-center text-white bg-green-500 rounded-full">{row.getValue("status")}</div>
            }
            if(row.getValue("status")==="Cancelled"){
                return <div className="py-2 text-center text-white bg-red-500 rounded-full">{row.getValue("status")}</div>
            }
        }
    },
]