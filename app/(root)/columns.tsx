

"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, CopyIcon, SquarePen, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import { DesktopHistoryTableColumn } from "@/types/index";
import CopyToClipboard from "@/components/copyToClipboard";
import UrlQrcode from "@/components/url-qrcode";

const columns: ColumnDef<DesktopHistoryTableColumn>[] = [
  {
    accessorKey: "shortLink",
    header: "Short Link",
    cell: ({ row }) => {
      const shortLink: string = row.getValue("shortLink");

      return (
        <div className="flex justify-between ">
          <span className="text-nowrap">{shortLink}</span>
          <CopyToClipboard text={shortLink}/>
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
    accessorKey: "qrCode",
    header: "QR Code",
    cell: ({row})=> {
      const url: string = row.getValue("qrCode");
      return <UrlQrcode url={url}  />}
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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