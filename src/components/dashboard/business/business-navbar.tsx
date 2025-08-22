"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SearchIcon, BellIcon, PlusIcon, MenuIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/**
 * BusinessHeader
 * - Fixed app header aligned to the shadcn Sidebar width
 * - Uses shadcn components throughout
 * - Includes breadcrumbs, search, notifications, CTA, and profile menu
 */
export function BusinessHeader() {
  const [unread, setUnread] = useState(3);

  return (
    <div
      className="fixed top-0 right-0 h-16 bg-white border-b z-30"
      // Align to the sidebar width (255px fallback if CSS var not present)
      style={{ left: "var(--sidebar-width, 255px)" }}
    >
      <header className="flex h-full items-center px-3 lg:px-6">
        {/* Left section: mobile menu, breadcrumbs, search */}
        <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
          {/* Mobile: open sidebar in a Sheet (optional trigger) */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <MenuIcon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-[255px]">
                {/* You can render your Sidebar here for mobile if desired */}
                {/* <NavigationMenuSection /> */}
                <div className="flex h-16 items-center px-3 border-b">
                  <Image src="/vhumani-logo.png" alt="Vhumani" width={36} height={36} />
                  <span className="ml-2 font-semibold">Vhumani</span>
                </div>
                {/* Placeholder menu content */}
                <div className="p-3 text-sm text-muted-foreground">
                  Add your mobile menu here…
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Breadcrumbs */}
          <Breadcrumb className="hidden md:block">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Title (visible when breadcrumbs hidden on small screens) */}
          <h1 className="md:hidden font-semibold truncate">Dashboard Overview</h1>

          {/* Search */}
          <div className="relative w-52 sm:w-64">
            <Input
              placeholder="Search influencers..."
              className="pl-9"
            />
            <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        {/* Right section: notifications, CTA, profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="relative">
                  <Button variant="ghost" size="icon" className="rounded-full" aria-label="Notifications">
                    <BellIcon className="h-5 w-5 bg-gray-700" />
                  </Button>
                  {unread > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-4 min-w-4 px-1 text-[10px] flex items-center justify-center">
                      {unread}
                    </Badge>
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>Notifications</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Button className="hidden md:inline-flex bg-[#f2994a] hover:bg-[#e68a3e] text-white">
            <PlusIcon className="mr-2 h-4 w-4" />
            Launch New Campaign
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2 px-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/influencer.png" alt="Aorist Labs" />
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline text-sm font-medium">Aorist Labs</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="font-normal">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/influencer.png" alt="Aorist Labs" />
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-0.5">
                    <p className="text-sm font-medium leading-none">Aorist Labs</p>
                    <p className="text-xs text-muted-foreground">Business Account</p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/help">Help Center</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/logout">Log out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <Separator />
    </div>
  );
}

export default BusinessHeader;
