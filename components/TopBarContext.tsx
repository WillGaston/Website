"use client";

import { createContext, useState } from "react";

export const TopBarContext = createContext();

export function TopBarProvider({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [active, setActive] = useState(0);

  return (
    <TopBarContext.Provider value={{ expanded, setExpanded, active, setActive }}>
      {children}
    </TopBarContext.Provider>
  );
}