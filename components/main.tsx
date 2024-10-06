"use client";
import { ArrowRightCircleIcon, Link } from "lucide-react";
import React, { useEffect, useState } from "react";
import AutoPasteClipboardToggle from "./auto-paste-clipboard";
import LinkHistory from "./link-history";
import { LinkDetailsProps } from "@/types/";


const Main = ({ linkDetails }: { linkDetails: LinkDetailsProps[] }) => {
  const [checkedState, setCheckedState] = useState<boolean>(false);
  const [textFromClipboard, setTextFromClipboard] = useState<string>("");
  useEffect(() => {
    const getTextFromClipboard = async () => {
      const text = await navigator.clipboard.readText();
      if (checkedState && text) {
        setTextFromClipboard(text);
      }
    };
    getTextFromClipboard();
  }, [checkedState]);
  return (
    <section className="flex-column-center">
    
      <section className="flex flex-col gap-y-8 ">
        <div className="flex-column-center md:text-5xl">
          <h1 className="gradient-styling text-nowrap">Shorten Your</h1>
          <h1 className="gradient-styling text-nowrap"> Loooong Links :)</h1>
        </div>

        <p className="p-4 text-center md:p-16 md:text-xl">
          Linkly is an efficient and easy-to-use URL shortening service that
          streamlines your online experience.
        </p>
        <div className="p-8 flex items-stretch md:p-20 justify-center ">
          <div className="flex-row-center rounded-full -mr-9 z-20">
            <Link />
          </div>
          <input
            value={textFromClipboard}
            onChange={(e) => {
              console.log(e.target.value);
              setTextFromClipboard(e.target.value);
            }}
            className="border rounded-full grow text-center md:text-xl z-10 max-w-md"
            placeholder="Enter the link here"
          ></input>

          <ArrowRightCircleIcon
            size={55}
            className="stroke-brand-blue -ml-[52px] z-20  [&>circle]:fill-brand-blue  [&>path]:stroke-white -mt-[1px]"
            strokeWidth={1}
          />
        </div>
        <AutoPasteClipboardToggle setCheckedState={setCheckedState} />
        <p className="text-lg p-4 text-center md:text-xl">
          You can create&nbsp;
          <span className="text-brand-pink font-semibold">05</span> more
          links.&nbsp;
          <span className="underline font-medium cursor-pointer">
            Register Now
          </span>
          &nbsp;to enjoy unlimited usage
        </p>
      </section>

      <LinkHistory linkDetails={linkDetails} />
    </section>
  );
};

export default Main;
