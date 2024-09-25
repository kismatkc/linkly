"use client";
import MobileHistoryTable from "./mobile-view-history";
import { useMediaQuery } from "react-responsive";

import columns from "@/app/(login)/column";
import { DataTable } from "@/app/(login)/data-table";
import { LinkDetailsProps } from "@/types/";

const LinkHistory = ({ linkDetails }: { linkDetails: LinkDetailsProps[] }) => {
  const useAccordian = useMediaQuery({
    maxWidth: 767,
  });

  if (useAccordian) {
    return <MobileHistoryTable linkDetails={linkDetails} />;
  }

  return <DataTable columns={columns} data={linkDetails} />;
};
export default LinkHistory;
