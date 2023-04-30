import Link from "next/link";
import { useContext } from "react";
import { LayoutContext } from "../../context/layoutContext";

interface NavigationItem {
  name: string;
  link: string;
}

interface NavItemProps {
  navigationItems: NavigationItem[];
}

function NavItems({ navigationItems }: NavItemProps) {
  const { setShowNavBar } = useContext(LayoutContext);
  return (
    <>
      {navigationItems.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          aria-label={`Go to ${item.name} Link`}
          className="py-2 w-full cursor-pointer text-center border-y-2 border-sky-200 hover:bg-sky-400 hover:border-sky-900 dark:border-brand-blue-800 dark:hover:bg-brand-green-600 dark:hover:border-brand-green-100 dark:hover:text-brand-green-100 font-semibold"
          onClick={() => setShowNavBar(false)}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}

export default NavItems;
