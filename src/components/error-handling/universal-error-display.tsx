"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  AlertCircle,
  Ban,
  Wifi,
  Database,
  RefreshCw,
} from "lucide-react";
import { ErrorResponse } from "@/types/errors";

interface ErrorDisplayProps {
  error: ErrorResponse;
  hasRetry?: boolean;
  className?: string;
}

export const UniversalErrorDisplay: React.FC<ErrorDisplayProps> = ({
  error,
  hasRetry = true,
  className = "",
}) => {
  const router = useRouter();

  const onRetry = () => {
    router.refresh();
  };

  // Configure display properties based on error type
  const config = {
    auth: {
      icon: <Ban className="h-6 w-6 text-yellow-600" />,
      title: "Authentication Required",
      action: { label: "Sign In", onClick: () => router.push("/login") },
    },
    forbidden: {
      icon: <AlertTriangle className="h-6 w-6 text-yellow-600" />,
      title: "Access Denied",
      action: { label: "Go Back", onClick: () => router.back() },
    },
    network: {
      icon: <Wifi className="h-6 w-6 text-orange-600" />,
      title: "Connection Error",
      action: { label: "Retry", onClick: onRetry },
    },
    server: {
      icon: <Database className="h-6 w-6 text-red-600" />,
      title: "Server Error",
      action: { label: "Retry", onClick: onRetry },
    },
    validation: {
      icon: <AlertCircle className="h-6 w-6 text-blue-600" />,
      title: "Invalid Input",
      action: { label: "Try Again", onClick: onRetry },
    },
    not_found: {
      icon: <AlertCircle className="h-6 w-6 text-gray-600" />,
      title: "Not Found",
      action: { label: "Go Back", onClick: () => router.back() },
    },
    rate_limit: {
      icon: <AlertCircle className="h-6 w-6 text-orange-600" />,
      title: "Rate Limited",
      action: { label: "Try Later", onClick: onRetry },
    },
    unknown: {
      icon: <AlertCircle className="h-6 w-6 text-red-600" />,
      title: "Something Went Wrong",
      action: { label: "Retry", onClick: onRetry },
    },
  };

  const errorConfig = config[error.type] || config.unknown;

  return (
    <div
      className={`flex flex-col items-center justify-center p-8 text-center ${className}`}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
        {errorConfig.icon}
      </div>
      <h3 className="mb-2 text-lg font-medium text-gray-900">
        {errorConfig.title}
      </h3>
      <p className="mb-4 text-sm text-gray-500">{error.message}</p>
      {/* {errorConfig.action && (
        <Button
          onClick={errorConfig.action.onClick}
          className="bg-primary hover:bg-primary/90"
        >
          {errorConfig.action.label}
        </Button>
      )} */}
      {error.type !== "auth" && error.type !== "forbidden" && onRetry && (
        <Button variant="outline" onClick={onRetry} className="mt-2">
          <RefreshCw className="mr-2 h-4 w-4" />
          Retry
        </Button>
      )}
    </div>
  );
};
