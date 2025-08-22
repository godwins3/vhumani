"use client";
import { useEffect } from "react";

export default function GoogleAd({
  adSlot,
  adFormat = "auto",
  fullWidth = true,
}: {
  adSlot: string;
  adFormat?: string;
  fullWidth?: boolean;
}) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: "block",
        width: fullWidth ? "100%" : "300px",
        height: fullWidth ? "auto" : "250px",
      }}
      data-ad-client="ca-pub-xxxxxxxxxxxx"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
    ></ins>
  );
}
