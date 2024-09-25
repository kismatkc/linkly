"use client";
import React, { useState } from "react";
import { Switch } from "./ui/switch";

const AutoPasteClipboardToggle = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="flex-row-center gap-x-3 md:text-xl">
      <Switch checked={checked} onCheckedChange={setChecked} />
      <span className="text-lg">Auto paste from Clipboard</span>
    </div>
  );
};

export default AutoPasteClipboardToggle;
