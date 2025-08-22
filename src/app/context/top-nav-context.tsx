"use client";

import { createContext, useContext, ReactNode, useState } from "react";

type TopNavContextType = {
  content: ReactNode | null;
  setTopNavContent: (content: ReactNode) => void;
};

const TopNavContext = createContext<TopNavContextType | undefined>(undefined);

export function TopNavProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ReactNode | null>(null);

  return (
    <TopNavContext.Provider
      value={{
        content,
        setTopNavContent: setContent,
      }}
    >
      {children}
    </TopNavContext.Provider>
  );
}

export function useTopNav() {
  const context = useContext(TopNavContext);
  if (!context) {
    throw new Error("useTopNav must be used within a TopNavProvider");
  }
  return context;
}
