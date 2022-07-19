import { createContext, useContext, useEffect, useState } from "react";

export const LayoutContext = createContext<{} | any>({});

function LayoutProvider({ children }: any) {
  const windowWidth = useWindowSize();
  const [showNavBar, setShowNavBar] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState(
    windowWidth < 1024 ? true : false
  );

  useEffect(() => {
    setIsMobileSize(windowWidth < 1024 ? true : false);
    setShowNavBar(false)
  }, [windowWidth]);

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [width, setWidth] = useState(0);
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWidth(window.innerWidth);
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return width;
  }

  const value = {
    showNavBar,
    setShowNavBar,
    isMobileSize,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
}

export default LayoutProvider;
