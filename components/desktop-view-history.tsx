import { LinkDetailsProps } from "@/types/";
import React from "react";

const DesktopHistoryTable = ({
  linkDetails,
}: {
  linkDetails: LinkDetailsProps[];
}) => {
  return (
    <section className="flex-column-center w-full">
      <h1 className="dark:bg-brand-grey-lite w-full text-center py-4 font-semibold text-lg md:text-2xl">
        Shorten Links
      </h1>
    </section>
  );
};

export default DesktopHistoryTable;
