import VhumaniFooter from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <Header />
      {children}
      <VhumaniFooter />
    </div>
  );
};

export default WebsiteLayout;