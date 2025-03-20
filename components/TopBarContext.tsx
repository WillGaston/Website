"use client";

import { createContext, useState, ReactNode } from "react";

interface TopBarContextType {
  active: number;
  setActive: (active: number) => void;
}

interface TopBarProviderProps {
  children: ReactNode;
}

export const TopBarContext = createContext<TopBarContextType | undefined>(undefined);

export function TopBarProvider({ children }: TopBarProviderProps) {
  const [active, setActive] = useState(0);

  return (
    <TopBarContext.Provider value={{ active, setActive }}>
      {children}
    </TopBarContext.Provider>
  );
}