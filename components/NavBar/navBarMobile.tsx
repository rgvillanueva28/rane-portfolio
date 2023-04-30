import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LayoutContext } from "../../context/layoutContext";
import { TbMenu2, TbCaretUp } from "react-icons/tb";

function NavBarMobile() {
  const { showNavBar, setShowNavBar } = useContext(LayoutContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const motionDiv = {
    initial: {
      opacity: 0,
    },
    animate: { opacity: 1 },
  };

  return (
    <div className="absolute top-3 right-3 z-50">
      <button
        aria-label="Show Nav Bar"
        className={`mx-auto mb-2 flex text-2xl font-semibold p-1 m-1  border-2 bg-sky-100 dark:bg-brand-blue-900 border-sky-200 dark:border-brand-blue-800 hover:bg-sky-400 dark:hover:bg-brand-green-600 hover:border-sky-900 dark:hover:border-brand-green-100 dark:hover:text-brand-green-100`}
        onClick={() => setShowNavBar(!showNavBar)}
      >
        {showNavBar && (
          <motion.div initial="initial" animate="animate" variants={motionDiv}>
            <TbCaretUp size={32} />
          </motion.div>
        )}
        {!showNavBar && (
          <motion.div initial="initial" animate="animate" variants={motionDiv}>
            <TbMenu2 size={32} />
          </motion.div>
        )}
      </button>
    </div>
  );
}

export default NavBarMobile;
