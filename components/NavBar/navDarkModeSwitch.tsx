import { useEffect, useState } from "react";
import { TbSun, TbMoon } from "react-icons/tb";
import { motion } from "framer-motion";

import { useTheme } from "next-themes";

function NavDarkModeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const motionButton = {
    dark: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        // delay: 0,
      },
      backgroundColor: "#0c4a6e",
    },
    light: { backgroundColor: "#e0f2fe" },
  };

  return (
    <div>
      <motion.button
        aria-label="Toggle Dark Mode"
        variants={motionButton}
        initial={theme === "dark" ? "light" : "dark"}
        exit={theme === "dark" ? "light" : "dark"}
        animate={theme}
        className={`mx-auto mb-2 flex text-2xl font-semibold rounded-full p-1`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" && (
          <motion.div
            className="mr-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
          >
            <TbSun size={28} />
          </motion.div>
        )}
        {theme === "dark" && (
          <motion.div
            className="ml-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <TbMoon size={28} />
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}

export default NavDarkModeSwitch;
