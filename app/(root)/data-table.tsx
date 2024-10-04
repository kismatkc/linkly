"use client";
import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  SortingState,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table";
import {
  PencilRuler,
  Filter,
  Clock,
  ChartArea,
  Pointer,
  Settings,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <section className="p-12 w-full">
      <div className="flex-row-center gap-x-6 [&>figure]:p-4 mb-4">
        <figure className="flex-row-center gap-x-2">
          <Clock className="h-5 w-5" />
          <figcaption className="text-center">Clock</figcaption>
        </figure>
        <figure className="flex-row-center gap-x-2">
          <Settings className="h-5 w-5" />
          <figcaption className="text-center">Settings</figcaption>
        </figure>
        <figure className="flex-row-center gap-x-2">
          <ChartArea className="h-5 w-5" />
          <figcaption className="text-center">Statistics</figcaption>
        </figure>
      </div>
      <div className="flex justify-between items-center">
        <h1 className=" w-full text-left py-4 font-semibold pl-2 text-lg md:text-2xl">{`History (${data.length})`}</h1>
        <div className="flex gap-x-4  ">
          <Button
            variant="outline"
            className="flex gap-x-2  border-none cursor-pointer"
          >
            <PencilRuler className="h-5 w-5" />
            <span>Bulk edit </span>
          </Button>
          <Button
            variant="outline"
            className="flex gap-x-2   border-none cursor-pointer"
          >
            <Filter className="h-5 w-5" />
            <span>Filter </span>
          </Button>
        </div>
      </div>
      <div className="rounded-md border flex-column-center w-full ">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="font-bold">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}