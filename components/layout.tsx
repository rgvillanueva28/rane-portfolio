import NavBar from "./NavBar/navBar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="flex flex-row bg-sky-100  text-sky-900 min-h-screen">
      {/* dark:text-white dark:bg-sky-900 */}
      <NavBar />
      <main className="min-h-screen max-h-screen w-full bg-pattern">
        {children}
      </main>
    </div>
  );
}

export default Layout;
