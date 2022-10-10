import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface PortfolioItemInterface {
  slug: string;
  title: string;
  description: string;
  ghLink: string | null;
  link: string | null;
  tags: any | null;
  variants: any;
}

function PortfolioItem({
  slug,
  title,
  description,
  ghLink,
  link,
  tags,
  variants,
}: PortfolioItemInterface) {
  return (
    <motion.li
      key={slug}
      variants={variants}
      className="flex flex-wrap w-full px-4 py-4 md:w-1/2 xl:w-1/3 2xl:w-1/4 "
    >
      <article className=" flex flex-col items-stretch w-full min-h-full  p-6 border-4 bg-sky-100 dark:bg-sky-900 border-sky-200 dark:border-sky-800  hover:bg-sky-400 dark:hover:bg-sky-600 hover:border-sky-900 dark:hover:border-sky-100">
        <h3 className="text-xl mb-4">{title}</h3>
        <p className="text-sky-700 dark:text-sky-300 mb-10">{description}</p>
        <ul className="text-sky-700 dark:text-sky-300 text-sm mb-4">
          {tags?.data.map((tag: any) => (
            <li
              key={tag.attributes.slug}
              className="inline-block bg-sky-300 dark:bg-sky-700 p-2 mr-2 mb-2"
            >
              {tag.attributes.name}
            </li>
          ))}
        </ul>
        <section className="flex flex-row space-x-4 text-sky-700 dark:text-sky-300 ml-auto mt-auto">
          {ghLink ? (
            <a
              href={ghLink}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex-none w-9 h-9 relative z-10 hover:before:absolute hover:before:top-1 hover:before:left-1 hover:before:w-full hover:before:h-full hover:before:z-0 hover:before:bg-sky-200 dark:hover:before:bg-sky-800"
            >
              <div className="absolute z-10 group-hover:bg-sky-900 p-1 group-hover:text-sky-100 dark:group-hover:bg-sky-100 dark:group-hover:text-sky-900">
                <FaGithub size={28} />
              </div>
            </a>
          ) : null}
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex-none w-9 h-9 relative z-10 hover:before:absolute hover:before:top-1 hover:before:left-1 hover:before:w-full hover:before:h-full hover:before:z-0 hover:before:bg-sky-200 dark:hover:before:bg-sky-800"
            >
              <div className="absolute z-10 group-hover:bg-sky-900 p-1 group-hover:text-sky-100 dark:group-hover:bg-sky-100 dark:group-hover:text-sky-900">
                <FaExternalLinkAlt size={28} />
              </div>
            </a>
          ) : null}
        </section>
      </article>
    </motion.li>
  );
}

export default PortfolioItem;
