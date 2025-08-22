import VhumaniFooter from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Script from "next/script";

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <Script
        id="adsense-script"
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8937280226879055"
        crossOrigin="anonymous"
      />
      <Header />
      {children}
      <VhumaniFooter />
    </div>
  );
};

export default WebsiteLayout;