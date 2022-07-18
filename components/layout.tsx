import NavBar from "./NavBar/navBar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="flex flex-row bg-cyan-100  text-black min-h-screen">
      {/* dark:text-white dark:bg-cyan-900 */}
      <NavBar />
      <main className="min-h-screen max-h-screen">
        {children}
      </main>
    </div>
  );
}

export default Layout;
