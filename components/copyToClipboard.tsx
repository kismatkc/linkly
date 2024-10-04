import { Check, CopyIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const CopyToClipboard = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (isCopied) {
        setIsCopied(false);
      }
    }, 6000);
    setTimeout(() => {
      setHover(false);
    }, 3000);
  }, [isCopied]);
  return (
    <div className="relative">
      {hover && (
        <span className="absolute -top-[22px] left-3 z-50 ">
          {isCopied ? "Copied" : "Copy"}
        </span>
      )}

      {isCopied ? (
        <Check className="ml-5 h-full" />
      ) : (
        <CopyIcon
          className="cursor-pointer ml-5 h-full"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          onClick={() => {
            setIsCopied(true);
            navigator.clipboard.writeText(text)
          }}
        />
      )}
    </div>
  );
};

export default CopyToClipboard;
