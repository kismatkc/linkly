"use client";
import MobileHistoryTable from "./mobile-view-history";
import { useMediaQuery } from "react-responsive";

import columns from "@/app/(login)/column";
import { DataTable } from "@/app/(login)/data-table";
import { LinkDetailsProps } from "@/types/";
import { useEffect, useState } from "react";

const LinkHistory = ({ linkDetails }: { linkDetails: LinkDetailsProps[] }) => {
  const [onClient, setOnClient] = useState<boolean>(false);
  useEffect(() => {
    setOnClient(true);
  }, []);
  const useAccordian = useMediaQuery({
    maxWidth: 767,
  });

  if (!onClient) return null;

  if (useAccordian) {
    return <MobileHistoryTable linkDetails={linkDetails} />;
  }

  return <DataTable columns={columns} data={linkDetails} />;
};
export default LinkHistory;
