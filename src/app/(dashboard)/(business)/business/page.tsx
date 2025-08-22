import React from "react";
import { DashboardOverviewSection } from "@/components/dashboard/business/landing/overview-section";

const BusinessDashboard = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center p-4">
      <DashboardOverviewSection />
    </div>
  );
};

export default BusinessDashboard;
