import { motion } from "framer-motion";
import Link from "next/link";
import TagItem from "./tagItem";
import { portfolioItemInterface } from "../../interfaces";

function PortfolioItem({
  slug,
  title,
  description,
  github,
  link,
  portfolio_techs: tags,
  variants,
}: portfolioItemInterface) {
  return (
    <motion.li
      key={slug}
      variants={variants}
      className="flex flex-wrap w-full px-4 py-4 md:w-1/2 xl:w-1/3 2xl:w-1/4 "
    >
      <Link href={`/portfolio/${slug}`}>
        <article className="group flex flex-col items-stretch w-full min-h-full  p-6 border-4 bg-sky-100 dark:bg-brand-blue-900 border-sky-200 dark:border-brand-blue-800  hover:bg-sky-400 dark:hover:bg-brand-green-600 hover:border-sky-900 dark:hover:border-brand-green-100">
          <h3 className="text-xl mb-4 dark:text-brand-green-500 dark:group-hover:text-brand-green-700">
            {title}
          </h3>
          <p className="text-sky-700 dark:text-brand-green-300 dark:group-hover:text-brand-green-100 mb-10">
            {description}
          </p>
          <ul className="text-sky-700 dark:text-brand-green-300 dark:group-hover:text-brand-green-100 text-sm mb-4">
            {tags?.map((tag: any) => (
              <TagItem slug={tag.slug} name={tag.name} key={tag.slug} />
            ))}
          </ul>
        </article>
      </Link>
    </motion.li>
  );
}

export default PortfolioItem;
