import Image from "next/future/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import NavItems from "./navItems";

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

function NavBar() {
  return (
    <div className="bg-sky-200 w-48 flex flex-col justify-between">
      <Link href="/">
        <a className="bg-sky-400">
          <Image src={logo} alt="Logo" />
          <h1 className="font-bold text-xl text-center">Rane Villanueva</h1>
        </a>
      </Link>

      <div className="text-center flex flex-col">
        <NavItems navigationItems={navigationItems} />
      </div>
      <div className="">
        <div>Github</div>
        <div>LinkedIn</div>
        <div>Email</div>
      </div>
    </div>
  );
}

export default NavBar;
