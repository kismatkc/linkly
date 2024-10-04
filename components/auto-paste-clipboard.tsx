"use client";
import React, { useState } from "react";
import { Switch } from "./ui/switch";

const AutoPasteClipboardToggle = ({setCheckedState}: {setCheckedState: (state: boolean)=> void}) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="flex-row-center gap-x-3 md:text-xl">
      <Switch checked={checked} onCheckedChange={(value)=>{
      setChecked(value);
      setCheckedState(value);
      }} />
      <span className="text-lg">Auto paste from Clipboard</span>
    </div>
  );
};

export default AutoPasteClipboardToggle;
