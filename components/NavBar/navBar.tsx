import Image from "next/future/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import NavItems from "./navItems";

import { TbBrandGithub, TbBrandGmail, TbBrandLinkedin } from "react-icons/tb";
import NavFooterLinks from "./navFooterLinks";

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
  return (
    <div className="bg-sky-200 w-48 flex flex-col justify-between">
      <div className="basis-1/3 " id="">
        <Link href="/">
          <a className=" flex flex-col bg-sky-400 border-y-2 border-sky-400 hover:border-sky-900 font-semibold hover:font-bold">
            <Image src={logo} alt="Logo" className="logo" />
            <h1 className="text-lg text-center">RANE VILLANUEVA</h1>
          </a>
        </Link>
      </div>

      <div className="text-center flex flex-col justify-center basis-1/3">
        <NavItems navigationItems={navigationItems} />
      </div>
      <div className="basis-1/3 flex flex-col justify-end">
        <NavFooterLinks navigationLinks={navigationLinks} />
      </div>
    </div>
  );
}

export default NavBar;
