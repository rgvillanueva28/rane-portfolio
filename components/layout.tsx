import NavBar from "./NavBar/navBar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="transition-all duration-500 flex flex-row bg-sky-100 text-sky-900 dark:bg-sky-900 dark:text-sky-100 min-h-screen">
      {/* dark:text-white dark:bg-sky-900 */}
      <NavBar />
      <main className="min-h-screen max-h-screen w-full bg-pattern flex flex-col justify-center">
        {children}
      </main>
    </div>
  );
}

export default Layout;
