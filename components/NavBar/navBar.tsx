import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import NavItems from "./navItems";
import { LayoutContext } from "../../context/layoutContext";
import { AnimatePresence, motion } from "framer-motion";

import { TbBrandGithub, TbBrandGmail, TbBrandLinkedin } from "react-icons/tb";
import NavFooterLinks from "./navFooterLinks";
import { useContext } from "react";
import NavDarkModeSwitch from "./navDarkModeSwitch";

const navigationItems = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "ABOUT",
    link: "/about",
  },
  {
    name: "PORTFOLIO",
    link: "/portfolio",
  },
  {
    name: "CONTACT",
    link: "/contact",
  },
];

const navigationLinks = [
  {
    name: "GitHub",
    link: "https://github.com/rgvillanueva28",
    icon: TbBrandGithub,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ranegv/",
    icon: TbBrandLinkedin,
  },
  {
    name: "Gmail",
    link: "mailto:rgvillanueva28@gmail.com",
    icon: TbBrandGmail,
  },
];

function NavBar() {
  const { showNavBar, setShowNavBar, isMobileSize } = useContext(LayoutContext);

  const motionDiv = {
    initial: isMobileSize
      ? {
          y: -2000,
        }
      : {
          x: -500,
        },
    animate: isMobileSize
      ? {
          y: 0,
          x: 0,
          transition: {
            ease: "easeInOut",
          },
        }
      : {
          x: 0,
          y: 0,
          transition: {
            ease: "easeInOut",
          },
        },
    exit: isMobileSize
      ? {
          y: -2000,
        }
      : {
          x: -500,
        },
  };

  return (
    <AnimatePresence>
      {((isMobileSize && showNavBar) || !isMobileSize) && (
        <motion.aside
          variants={motionDiv}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`absolute lg:relative z-40 flex flex-col w-full lg:w-72  bg-sky-200 dark:bg-brand-blue-800 justify-between max-h-screen ${
            isMobileSize ? " min-h-screen" : ""
          }`}
        >
          <header className="basis-1/3 " id="">
            <Link
              href="/"
              aria-label="Go to Homepage"
              className=" flex flex-col bg-sky-400 dark:bg-brand-blue-700 border-y-2 
              border-t-ky-4 dark:border-t-brand-blue-700 border-sky-400 dark:border-brand-blue-800 hover:border-brand-blue-900 dark:hover:border-brand-blue-100 font-semibold hover:font-bold"
              onClick={() => setShowNavBar(false)}
            >
              <div className="logo flex justify-center ">
                <Image
                  placeholder="blur"
                  src={logo}
                  alt="Logo"
                  className="max-w-xs lg:max-w-full lg:w-auto"
                />
              </div>
              <h1 className="text-lg text-center">RANE VILLANUEVA</h1>
            </Link>
          </header>

          <nav className="text-center flex flex-col justify-center basis-1/3">
            <NavItems navigationItems={navigationItems} />
          </nav>
          <footer className="basis-1/3 flex flex-col justify-end">
            <NavDarkModeSwitch />
            <NavFooterLinks navigationLinks={navigationLinks} />
          </footer>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default NavBar;
