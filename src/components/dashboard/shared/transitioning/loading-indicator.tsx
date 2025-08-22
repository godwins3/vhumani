"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";

function LoadingIndicatorContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const navigationInProgress = useRef(false);
  const navigationTimer = useRef<NodeJS.Timeout | null>(null);

  // Generate a route key from pathname and search params
  const routeKey = pathname + searchParams.toString();

  useEffect(() => {
    // When routeKey changes, mark navigation as complete
    if (navigationInProgress.current) {
      // Small delay to ensure animations align properly
      const timer = setTimeout(() => {
        setLoading(false);
        navigationInProgress.current = false;
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [routeKey]);

  useEffect(() => {
    // Custom event for navigation start
    const handleNavigationStart = () => {
      // Debounce navigation events
      if (navigationTimer.current) {
        clearTimeout(navigationTimer.current);
      }

      // Only start loading if not already in progress
      if (!navigationInProgress.current) {
        setLoading(true);
        navigationInProgress.current = true;

        // Safety timeout in case navigation never completes
        navigationTimer.current = setTimeout(() => {
          setLoading(false);
          navigationInProgress.current = false;
        }, 3000);
      }
    };

    // Register link click handler
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (
        link?.getAttribute("href")?.startsWith("/") &&
        link?.getAttribute("href") !== pathname
      ) {
        handleNavigationStart();
      }
    };

    document.addEventListener("click", handleLinkClick);
    document.addEventListener("navigationstart", handleNavigationStart);

    return () => {
      document.removeEventListener("click", handleLinkClick);
      document.removeEventListener("navigationstart", handleNavigationStart);
      if (navigationTimer.current) {
        clearTimeout(navigationTimer.current);
      }
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent"
        >
          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: "0%" }}
            animate={{
              width: ["0%", "60%", "80%", "100%"],
              transition: {
                times: [0, 0.4, 0.8, 1],
                duration: 1.5,
                ease: "easeInOut",
              },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Wrap in Suspense boundary
export default function LoadingIndicator() {
  return (
    <Suspense fallback={null}>
      <LoadingIndicatorContent />
    </Suspense>
  );
}
