import NavBar from "./NavBar/navBar";
import React, { useContext } from "react";
import { LayoutContext } from "../context/layoutContext";
import NavBarMobile from "./NavBar/navBarMobile";

interface LayoutPropsInterface {
  children: React.ReactNode;
}

function Layout({ children }: LayoutPropsInterface) {
  const { isMobileSize } = useContext(LayoutContext);
  return (
    <div className="transition-all duration-500 flex flex-row bg-sky-100 text-sky-900 dark:bg-brand-blue-900 dark:text-brand-green-500 min-h-screen">
      {/* dark:text-white dark:bg-sky-900 */}
      {isMobileSize && <NavBarMobile />}
      <NavBar />
      <main className="w-full bg-pattern flex flex-col justify-center overflow-y-auto" style={{height: "100dvh"}}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
