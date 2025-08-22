"use client";

import { useState, useEffect } from "react";
import { Bell, Clock, FileText, Users, Calendar, Trash2, MoreHorizontal, CheckCircle, AlertCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { useAuthUser } from "@/lib/auth/client";
import { LoadingSpinner } from "@/components/error-handling/loading-spinner";
import { EmptyState } from "@/components/error-handling/empty-state";

// Define the notification type
interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  timestamp: string;
  read: boolean;
  category: "campaigns" | "assets" | "departments" | "employees" | "system";
  link?: string;
}

const NotificationsPage = () => {
//   const user = useAuthUser();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    // Simulated API call to fetch notifications
    // Replace with actual API call in production
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Dummy data - replace with actual API call
        const dummyNotifications: Notification[] = [
          {
            id: "1",
            title: "New Campaign Created",
            message: "A new campaign 'Kenya for Faith' has been created and requires your approval.",
            type: "info",
            timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
            read: false,
            category: "campaigns",
            link: "/dashboard/campaigns/123"
          },
          {
            id: "2",
            title: "Asset Upload Complete",
            message: "15 new assets have been successfully uploaded to the 'Winter Collection' campaign.",
            type: "success",
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
            read: true,
            category: "assets",
            link: "/dashboard/campaigns/456/assets"
          },
          {
            id: "3",
            title: "Department Head Changed",
            message: "Johnson Gitonga has been appointed as the new head of the Marketing department.",
            type: "info",
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
            read: false,
            category: "departments"
          },
          {
            id: "4",
            title: "License Expiring Soon",
            message: "Your MRF with Charles Muchene will expire in 5 days. Please renew to maintain access to affected assets.",
            type: "warning",
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
            read: false,
            category: "system",
            link: "/dashboard/settings/billing"
          },
          {
            id: "5",
            title: "New Employee Added",
            message: "Michael Johnson has been added to your organization. Please assign appropriate roles.",
            type: "info",
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 3 days ago
            read: true,
            category: "employees",
            link: "/dashboard/settings/employees"
          },
          {
            id: "6",
            title: "Campaign End Date Approaching",
            message: "The 'Safaricom @ 25' campaign will end in 12 days. Ensure all assets are finalized.",
            type: "warning",
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(), // 4 days ago
            read: true,
            category: "campaigns",
            link: "/dashboard/campaigns/789"
          },
          {
            id: "7",
            title: "Failed Asset Upload",
            message: "Some assets failed to upload due to format incompatibility. Please review and retry.",
            type: "error",
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 120).toISOString(), // 5 days ago
            read: false,
            category: "assets"
          }
        ];
        
        setNotifications(dummyNotifications);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchNotifications();
  }, []);

  // Handle marking a notification as read
  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Handle marking all notifications as read
  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  // Handle deleting a notification
  const deleteNotification = (id: string) => {
    setNotifications(prev => 
      prev.filter(notification => notification.id !== id)
    );
  };

  // Handle clearing all read notifications
  const clearReadNotifications = () => {
    setNotifications(prev => 
      prev.filter(notification => !notification.read)
    );
  };

  // Filter notifications based on active tab
  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === "all") return true;
    if (activeTab === "unread") return !notification.read;
    return notification.category === activeTab;
  });

  // Count unread notifications
  const unreadCount = notifications.filter(notification => !notification.read).length;

  // Get the icon for a notification type
  const getNotificationIcon = (type: string, category: string) => {
    // First determine by type
    if (type === "success") return <CheckCircle className="h-5 w-5 text-green-500" />;
    if (type === "warning") return <AlertCircle className="h-5 w-5 text-orange-500" />;
    if (type === "error") return <AlertCircle className="h-5 w-5 text-red-500" />;
    
    // If it's info type, use category to determine icon
    switch (category) {
      case "campaigns":
        return <FileText className="h-5 w-5 text-blue-500" />;
      case "assets":
        return <FileText className="h-5 w-5 text-purple-500" />;
      case "departments":
        return <Users className="h-5 w-5 text-indigo-500" />;
      case "employees":
        return <Users className="h-5 w-5 text-cyan-500" />;
      case "system":
        return <Info className="h-5 w-5 text-gray-500" />;
      default:
        return <Bell className="h-5 w-5 text-blue-500" />;
    }
  };

  // Format the timestamp to a relative time string
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else if (diffHours > 0) {
      return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    } else if (diffMins > 0) {
      return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
    } else {
      return `${diffSecs} second${diffSecs !== 1 ? 's' : ''} ago`;
    }
  };

  // Navigate to a linked page
  const navigateToLink = (link?: string) => {
    if (link) {
      window.location.href = link;
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex h-64 items-center justify-center">
          <LoadingSpinner size="lg" message="Loading notifications..." />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Notifications</h1>
          <p className="text-muted-foreground">
            Manage and review your recent notifications
          </p>
        </div>
        <div className="flex gap-2">
          {unreadCount > 0 && (
            <Button 
              variant="outline" 
              onClick={markAllAsRead}
              className="flex items-center gap-1"
            >
              <CheckCircle className="h-4 w-4" />
              Mark all as read
            </Button>
          )}
          <Button 
            variant="outline" 
            onClick={clearReadNotifications}
            className="flex items-center gap-1"
          >
            <Trash2 className="h-4 w-4" />
            Clear read
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <div className="mb-6">
          <TabsList className="grid grid-cols-7">
            <TabsTrigger value="all" className="relative">
              All
              {unreadCount > 0 && (
                <Badge className="ml-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500">
                  {unreadCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="assets">Assets</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="employees">Employees</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value={activeTab} className="mt-0">
          {filteredNotifications.length === 0 ? (
            <EmptyState 
              title="No notifications" 
              description="You don't have any notifications in this category yet." 
              icon={Bell} 
            />
          ) : (
            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`relative rounded-lg border p-4 transition-all ${
                    notification.read 
                      ? 'bg-white border-gray-200' 
                      : 'bg-blue-50 border-blue-200'
                  } ${notification.link ? 'cursor-pointer hover:shadow-md' : ''}`}
                  onClick={() => notification.link && navigateToLink(notification.link)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(notification.type, notification.category)}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start justify-between">
                        <h3 className={`font-medium ${!notification.read ? 'font-semibold' : ''}`}>
                          {notification.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {formatTimestamp(notification.timestamp)}
                          </span>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-40 p-0" align="end">
                              <div className="flex flex-col">
                                {!notification.read && (
                                  <Button 
                                    variant="ghost" 
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      markAsRead(notification.id);
                                    }}
                                    className="justify-start text-sm font-normal"
                                  >
                                    Mark as read
                                  </Button>
                                )}
                                <Button 
                                  variant="ghost" 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    deleteNotification(notification.id);
                                  }}
                                  className="justify-start text-sm font-normal text-red-500 hover:text-red-600 hover:bg-red-50"
                                >
                                  Delete
                                </Button>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">
                        {notification.message}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <Badge variant={notification.read ? "outline" : "default"} className="text-xs">
                          {notification.category}
                        </Badge>
                        {!notification.read && (
                          <Badge variant="default" className="bg-blue-500 text-xs">
                            New
                          </Badge>
                        )}
                        {notification.link && (
                          <Badge variant="outline" className="text-xs text-blue-500 border-blue-200">
                            View details
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NotificationsPage;