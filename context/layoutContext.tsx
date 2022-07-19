import { createContext, useContext, useEffect, useState } from "react";

export const LayoutContext = createContext<{} | any>({});

function LayoutProvider({ children }: any) {
  const [showNavBar, setShowNavBar] = useState(false);

  const value = {
    showNavBar,
    setShowNavBar,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
}

export default LayoutProvider;
