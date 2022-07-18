import Link from "next/link";

interface NavigationItem {
  name: string;
  link: string;
}

interface NavItemProps {
  navigationItems: NavigationItem[];
}

function NavItems({ navigationItems }: NavItemProps) {
  return (
    <>
      {navigationItems.map((item, index) => (
        <Link href={item.link} key={index}>
          <a
            key={index}
            className="py-2 w-full cursor-pointer text-center border-2 border-cyan-200 hover:bg-teal-400 hover:border-black hover:font-bold"
          >
            {item.name}
          </a>
        </Link>
      ))}
    </>
  );
}

export default NavItems;
