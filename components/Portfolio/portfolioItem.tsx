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
    <motion.div
      key={slug}
      variants={variants}
      className="flex flex-wrap w-full px-4 py-4 md:w-1/2 xl:w-1/3 2xl:w-1/4 "
    >
      <div className="flex flex-col items-stretch w-full min-h-full bg-sky-200 dark:bg-sky-800 p-6 hover:scale-105 transition-all duration-100">
        <h4 className="text-xl mb-4">{title}</h4>
        <p className="text-sky-700 dark:text-sky-300 mb-10">{description}</p>
        <div className="text-sky-700 dark:text-sky-300 text-sm mb-4">
          {tags?.data.map((tag: any) => (
            <span
              key={tag.attributes.slug}
              className="inline-block bg-sky-300 dark:bg-sky-700 p-2 mr-2 mb-2"
            >
              {tag.attributes.name}
            </span>
          ))}
        </div>
        <div className="flex flex-row space-x-4 text-sky-700 dark:text-sky-300 ml-auto mt-auto">
          {ghLink ? (
            <a
              href={ghLink}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-sky-500"
            >
              <FaGithub size={28} />
            </a>
          ) : null}
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-sky-500"
            >
              <FaExternalLinkAlt size={28} />
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

export default PortfolioItem;
