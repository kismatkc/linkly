import React from "react";
import { useQRCode } from "next-qrcode";

const UrlQrcode = ({ url }: { url: string }) => {
  const { Canvas } = useQRCode();
  return (
    <Canvas
      text={url}
      options={{
        width: 60,
        margin: 4,
        errorCorrectionLevel: "L",
      }}
    />
  );
};

export default UrlQrcode;
