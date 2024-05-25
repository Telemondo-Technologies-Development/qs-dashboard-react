import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
};

export default function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="px-6 pt-6 size-full rounded-xl bg-main_extra">
      <div className="space-y-4 overflow-auto size-full scrollbar-none">
        <div className="flex items-center justify-between w-full">
          <p className="text-xl font-semibold">Queueing History</p>
          <button className="px-3 py-2 text-white rounded-md bg-main_primary">
            Sort: Newest
          </button>
        </div>
        <Table>
          <TableHeader className="sticky top-0">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="bg-main_primary hover:bg-main_primary"
              >
                {headerGroup.headers.map((header, i) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={`text-white ${i === 0 ? "rounded-tl-lg" : i === headerGroup.headers.length - 1 ? "rounded-tr-lg" : ""}`}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="bg-white border-none hover:bg-white"
                >
                  {row.getVisibleCells().map((cell, i) => {
                    return (
                      <TableCell
                        key={cell.id}
                        className={`p-3 border-y-[12px] border-main_extra`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
