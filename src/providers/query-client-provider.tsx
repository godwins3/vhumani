"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000 * 10, // Data remains fresh for 10 minutes
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      <ReactQueryDevtools
        initialIsOpen={process.env.NODE_ENV === "development"}
      />
    </QueryClientProvider>
  );
}
