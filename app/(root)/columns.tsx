"use client";
import { CopyIcon, SquarePen, Trash } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import { DesktopHistoryTableColumn } from "@/types/index";

const columns: ColumnDef<DesktopHistoryTableColumn>[] = [
  {
    accessorKey: "shortLink",
    header: "Short Link",
    cell: ({ row }) => {
      const shortLink: string = row.getValue("shortLink");
      return (
        <div className="flex ">
          {/* <span>{shortLink}</span> */}
          hi
          <CopyIcon />
        </div>
      );
    },
  },
  {
    accessorKey: "originalLink",
    header: "Original Link",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "clicks",
    header: "Clicks",
  },
  {
    accessorKey: "qrCode",
    header: "QR Code",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const dataObject: Date = row.getValue("date");
      const formattedDate = dataObject.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      return <span className="text-nowrap">{formattedDate}</span>;
    },
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: () => (
      <div className="flex gap-x-8">
        <SquarePen className="cursor-pointer" size={20} />
        <Trash className="cursor-pointer " size={20} />
      </div>
    ),
  },
];

export default columns;
