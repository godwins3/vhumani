import { NavigationMenuSection } from "@/components/dashboard/business/side-bar";
import { BusinessHeader } from "@/components/dashboard/business/business-navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TopNavProvider } from "@/app/context/top-nav-context";
import MaxWidthWrapper from "@/components/dashboard/shared/MaxWidthWrapper";
import BreadcrumbWrapper from "@/components/dashboard/shared/breadcrumb-wrapper";
import LoadingIndicator from "@/components/dashboard/shared/transitioning/loading-indicator";
import Transition from "@/components/dashboard/shared/transitioning/page-transition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vhumani Business Dashboard",
};

const BusinessLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="grid h-screen grid-cols-[255px_1fr] grid-rows-[64px_1fr]">
        {/* Sidebar: spans both rows */}
        <aside className="row-span-2 sticky top-0 h-screen overflow-hidden bg-white shadow-md z-40">
          <NavigationMenuSection />
        </aside>

        {/* Header */}
        <header className="sticky top-0 h-16 bg-white border-b z-30">
          <BusinessHeader />
        </header>

        {/* Main content area */}
        <TopNavProvider>
          <main className="overflow-y-auto">
            <LoadingIndicator />
            <Transition>
              <MaxWidthWrapper className="space-y-1">
                <div className="py-3">
                  <BreadcrumbWrapper />
                </div>
                {children}
              </MaxWidthWrapper>
            </Transition>
          </main>
        </TopNavProvider>
      </div>
    </SidebarProvider>
  );
};


export default BusinessLayout;