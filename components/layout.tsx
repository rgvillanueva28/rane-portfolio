import NavBar from "./NavBar/navBar";
import React, { useContext } from "react";
import { LayoutContext } from "../context/layoutContext";
import NavBarMobile from "./NavBar/navBarMobile";
import LetterGlitch from "./ReactBits/LetterGlitch";

interface LayoutPropsInterface {
  children: React.ReactNode;
}

function Layout({ children }: LayoutPropsInterface) {
  const { isMobileSize } = useContext(LayoutContext);
  return (
    <div className="transition-all duration-500 flex flex-row bg-sky-100 text-sky-900 dark:bg-brand-blue-900 dark:text-brand-green-500 min-h-screen">
      <div className="w-screen h-screen absolute z-0 opacity-20">
        <LetterGlitch
          glitchColors={["#39FF14", "#0AADFF"]}
          glitchSpeed={100}
          centerVignette={false}
          outerVignette={false}
          smooth={true}
        />
      </div>
      {/* dark:text-white dark:bg-sky-900 */}
      {isMobileSize && <NavBarMobile />}
      <NavBar />
      <main
        className="w-full bg-pattern flex flex-col justify-center overflow-y-auto z-10"
        style={{ height: "100dvh" }}
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;
