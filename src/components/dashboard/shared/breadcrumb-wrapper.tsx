"use client";
import React, { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const BreadcrumbWrapper = () => {
  const pathname = usePathname();
  const [campaignName, setCampaignName] = useState<string | null>(null);

  const pathSegments = useMemo(
    () => (pathname ? pathname.split("/").filter(Boolean) : []),
    [pathname]
  );

  useEffect(() => {
    const fetchCampaignName = async () => {
      const campaignIndex = pathSegments.findIndex((s) => s === "campaigns");
      const campaignId = pathSegments[campaignIndex + 1];

      if (campaignIndex !== -1 && /^\d+$/.test(campaignId)) {
        try {
          const res = await fetch(
            `https://drmapi.oxygenehosting.com/api/v1/acm/campaigns/${campaignId}`
          );
          const data = await res.json();
          if (data?.campaign_name) {
            setCampaignName(data.campaign_name);
          }
        } catch (err) {
          console.error("Failed to fetch campaign name:", err);
        }
      }
    };

    fetchCampaignName();
  }, [pathSegments]);

  const breadcrumbItems = useMemo(() => {
    return pathSegments.map((segment, index) => {
      const link = `/${pathSegments.slice(0, index + 1).join("/")}`;
      let label = segment.replace(/-/g, " ");

      if (
        pathSegments[index - 1] === "campaigns" &&
        /^\d+$/.test(segment) &&
        campaignName
      ) {
        label = campaignName;
      }

      return { label, link };
    });
  }, [pathSegments, campaignName]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((crumb, index) => (
          <BreadcrumbItem className="hidden md:block" key={index}>
            <BreadcrumbLink
              href={crumb.link}
              className={cn(
                "flex items-center capitalize italic",
                !(index === pathSegments.length - 1) && "font-semibold"
              )}
            >
              {crumb.label}
              {!(index === pathSegments.length - 1) && (
                <ChevronRight className="hidden size-4 md:block" />
              )}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbWrapper;
