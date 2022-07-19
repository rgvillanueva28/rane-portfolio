import Image from "next/future/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import NavItems from "./navItems";
import { LayoutContext } from "../../context/layoutContext";
import { motion } from "framer-motion";

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

const motionDiv = {
  initial: {
    x: -500,
  },
  animate: {
    x: 0,
    transition: {
      ease: "anticipate",
    },
  },
};

function NavBar() {
  const layoutContext = useContext(LayoutContext);

  return (
    <motion.div
      variants={motionDiv}
      initial="initial"
      animate="animate"
      className="bg-sky-200 dark:bg-sky-800 w-48 flex flex-col justify-between"
    >
      <div className="basis-1/3 " id="">
        <Link href="/">
          <a className=" flex flex-col bg-sky-400 dark:bg-sky-700 border-y-2 border-sky-400 dark:border-sky-800 hover:border-sky-900 dark:hover:border-sky-100 font-semibold hover:font-bold">
            <Image src={logo} alt="Logo" className="logo" />
            <h1 className="text-lg text-center">RANE VILLANUEVA</h1>
          </a>
        </Link>
      </div>

      <div className="text-center flex flex-col justify-center basis-1/3">
        <NavItems navigationItems={navigationItems} />
      </div>
      <div className="basis-1/3 flex flex-col justify-end">
        <NavDarkModeSwitch />
        <NavFooterLinks navigationLinks={navigationLinks} />
      </div>
    </motion.div>
  );
}

export default NavBar;
