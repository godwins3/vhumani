"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  BarChart3Icon,
  BellIcon,
  CalendarIcon,
  DollarSignIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type Item = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
  badge?: number;
};

const items: Item[] = [
  { icon: LayoutDashboardIcon, label: "Dashboard Overview", href: "/business" },
  { icon: UsersIcon,           label: "Influencer Matches", href: "/business/influencers" },
  { icon: CalendarIcon,        label: "Ongoing Campaigns",  href: "/business/campaigns" },
  { icon: CalendarIcon,        label: "Campaign Calendar",  href: "/business/calendar" },
  { icon: DollarSignIcon,      label: "Finances",           href: "/business/finances" },
  { icon: BarChart3Icon,       label: "Reports",            href: "/business/reports" },
  { icon: BellIcon,            label: "Notifications",      href: "/business/notifications", badge: 3 },
  { icon: SettingsIcon,        label: "Settings",           href: "/business/settings" },
  { icon: HelpCircleIcon,      label: "Help Center",        href: "/help" },
  { icon: LogOutIcon,          label: "Logout",             href: "/logout" },
];

export function NavigationMenuSection() {
  const pathname = usePathname();

  return (
    <Sidebar
      // Keep your 255px width; shadcn sidebar uses a CSS var
      style={{ ["--sidebar-width" as any]: "255px" }}
      className="bg-white shadow-md"
      collapsible="icon" // optional: enables collapsed rail
    >
      <SidebarHeader className="border-b">
        <Link href="/business" aria-label="Vhumani Home" className="flex items-center gap-2 px-3 py-4">
          <Image src="/vhumani-logo.png" alt="Vhumani" width={40} height={40} />
          <span className="text-base font-semibold truncate">Vhumani</span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-3">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(({ icon: Icon, label, href, badge }) => {
                const isActive =
                  pathname === href || (href !== "/" && pathname?.startsWith(href));
                return (
                  <SidebarMenuItem key={href}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={href} className="flex items-center gap-3">
                        <Icon className="h-4 w-4" />
                        <span className="truncate">{label}</span>
                        {typeof badge === "number" && (
                          <Badge className="ml-auto h-5 min-w-5 px-1 text-[10px] flex items-center justify-center">
                            {badge}
                          </Badge>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t">
        <div className="flex items-center justify-between px-3 py-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/influencer.png" alt="Aorist Labs" />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="text-sm font-medium leading-none truncate">Aorist Labs</p>
              <p className="text-xs text-muted-foreground truncate">Business Account</p>
            </div>
          </div>
        </div>
      </SidebarFooter>

      {/* Shows the thin rail when collapsed */}
      <SidebarRail />
    </Sidebar>
  );
}

export default NavigationMenuSection;
  