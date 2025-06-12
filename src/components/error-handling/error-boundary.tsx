"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw, Home } from "lucide-react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  resetKeys?: any[];
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class EnhancedErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Store error info for potential display
    this.setState({ errorInfo });

    // Call the optional onError callback
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // You can log the error to an error reporting service here
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    // Reset error state if any resetKeys change
    if (this.state.hasError && this.props.resetKeys) {
      if (
        !prevProps.resetKeys ||
        JSON.stringify(prevProps.resetKeys) !==
          JSON.stringify(this.props.resetKeys)
      ) {
        this.resetErrorBoundary();
      }
    }
  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        // return typeof this.props.fallback === "function"
        //   ? this.props.fallback({
        //       error: this.state.error as Error,
        //       resetErrorBoundary: this.resetErrorBoundary,
        //     })
        //   : this.props.fallback;
        if (typeof this.props.fallback === "function") {
          try {
            return this.props.fallback({
              error: this.state.error as Error,
              resetErrorBoundary: this.resetErrorBoundary,
            });
          } catch (callError) {
            console.error("Error calling fallback function:", callError);
            // can return default ui
          }
        } else {
          return this.props.fallback;
        }
      }

      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-8 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <AlertCircle className="h-6 w-6 text-red-600" />
          </div>
          <h3 className="mb-2 text-lg font-medium text-gray-900">
            Unexpected Error
          </h3>
          <p className="mb-4 text-sm text-gray-500">
            {this.state.error?.message || "Something went wrong with this page"}
          </p>
          <div className="flex space-x-3">
            <Button
              onClick={this.resetErrorBoundary}
              className="bg-primary hover:bg-primary/90"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/")}
            >
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </div>

          {process.env.NODE_ENV === "development" && this.state.error && (
            <div className="mt-6 w-full max-w-xl overflow-auto text-left">
              <details className="rounded-md border border-gray-200 p-3">
                <summary className="cursor-pointer text-sm font-medium">
                  View Error Details
                </summary>
                <pre className="mt-2 max-h-72 overflow-auto rounded bg-gray-50 p-4 text-xs">
                  {this.state.error.stack}
                </pre>
              </details>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
