import Image from "next/future/image";
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
    <div className="bg-cyan-200 w-48 flex flex-col justify-between">
      <div className="">
        <Image src={logo} alt="Logo" />
        <h1 className="font-bold text-xl text-center">Rane Villanueva</h1>
      </div>
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
