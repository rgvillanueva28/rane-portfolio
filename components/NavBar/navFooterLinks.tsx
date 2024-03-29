import { NavigationLinks } from "../../interfaces";

interface NavFooterLinksProps {
  navigationLinks: NavigationLinks[];
}

function NavFooterLinks({ navigationLinks }: NavFooterLinksProps) {
  return (
    <div className="flex flex-row justify-center space-x-1 mb-2">
      {navigationLinks.map((item: NavigationLinks, index: number) => {
        return (
          //   <a href={item.link} key={index} className="border-2 rounded-full border-sky-200 hover:border-sky-900 p-1 hover:bg-sky-400">
          <a
            aria-label={`Go to ${item.name} Link`}
            href={item.link}
            key={index}
            className="group flex-none w-9 h-9 relative z-10 hover:before:absolute hover:before:top-1 hover:before:left-1 hover:before:w-full hover:before:h-full hover:before:z-0 hover:before:bg-sky-400 dark:hover:before:bg-brand-green-600"
            target="_blank"
            rel="noreferrer"
            id={item.name}
          >
            <div className="absolute z-10 group-hover:bg-sky-900 p-1 group-hover:text-sky-100 dark:group-hover:bg-brand-green-100 dark:group-hover:text-brand-green-900">
              <item.icon size={28} />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default NavFooterLinks;
