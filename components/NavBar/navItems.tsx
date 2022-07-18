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
            className="py-2 w-full cursor-pointer text-center border-y-2 border-sky-200 hover:bg-sky-400 hover:border-sky-900 font-semibold"
          >
            {item.name}
          </a>
        </Link>
      ))}
    </>
  );
}

export default NavItems;
