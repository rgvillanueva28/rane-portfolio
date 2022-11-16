import { GetStaticPaths, GetStaticProps } from "next";
import { useTheme } from "next-themes";
import Head from "next/head";
import { portfolioItemInterface } from "../../interfaces";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import TagItem from "../../components/Portfolio/tagItem";
import { useContext } from "react";
import { LayoutContext } from "../../context/layoutContext";
import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface portfolioPagePropsInterface {
  portfolioItem: portfolioItemInterface;
}

export default function PortfolioPage({
  portfolioItem,
}: portfolioPagePropsInterface) {
  const { theme } = useTheme();
  const { isMobileSize } = useContext(LayoutContext);
  const router = useRouter();

  if (router.isFallback) {
    return (
      <section className="py-5 px-10 w-full h-full flex flex-col overflow-y-auto">
        <p>Loading...</p>
      </section>
    );
  }

  if (!portfolioItem) {
    return <DefaultErrorPage statusCode={404} />;
  }

  const motionRaneV = {
    active: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0,
        type: "spring",
        stiffness: 1000,
      },
    },
    inactive: { opacity: 0, y: 100 },
  };

  const motionLetters = {
    whileHover: {
      y: -10,
      color: theme === "light" ? "#38bdf8" : "#0284c7",
      transition: {
        y: {
          type: "spring",
          stiffness: 1000,
        },
        color: {
          ease: "easeInOut",
          duration: 0.1,
        },
      },
    },
    whileTap: {
      y: 0,
    },
    animate: {
      color: theme === "light" ? "#0284c7" : "#38bdf8",
    },
  };

  const portfolioTitle = Array.from(portfolioItem.attributes.title);

  return (
    <>
      <Head>
        <title>{`${portfolioItem.attributes.title} - Rane Villanueva`}</title>
      </Head>
      <section className="py-5 px-10 w-full h-full flex flex-col overflow-y-auto">
        <div
          className={`flex justify-between ${
            isMobileSize ? "mt-6 flex-col items-start" : "flex-row "
          }`}
        >
          <motion.h2
            initial="inactive"
            animate="active"
            variants={motionRaneV}
            className="flex select-none mb-5 max-w-full overflow-x-auto overflow-y-hidden"
          >
            {portfolioTitle.map((letter, index) =>
              letter === " " ? (
                <div key={index} className="min-w-[10px]"></div>
              ) : (
                <motion.strong
                  key={index}
                  variants={motionLetters}
                  whileHover="whileHover"
                  whileTap="whileTap"
                  animate="animate"
                  className="cursor-pointer text-4xl lg:text-5xl xl:text-6xl text-left  text-sky-600 dark:text-sky-400"
                >
                  {letter}
                </motion.strong>
              )
            )}
          </motion.h2>
          <div className={isMobileSize ? "order-first" : ""}>
            <Link
              href="/portfolio"
              className="flex flex-row justify-center items-center"
            >
              <FaArrowLeft className="mr-2" /> Back
            </Link>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <ul className="text-sky-700 dark:text-sky-300 text-sm mb-4">
            {portfolioItem.attributes.portfolio_techs?.data.map((tag: any) => (
              <TagItem
                key={tag?.attributes.slug}
                slug={tag?.attributes.slug}
                name={tag?.attributes.name}
              />
            ))}
          </ul>
          <section className="flex flex-row space-x-4 text-sky-700 dark:text-sky-300 ">
            {portfolioItem.attributes.github ? (
              <a
                href={portfolioItem.attributes.github}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex-none w-9 h-9 relative z-10 hover:before:absolute hover:before:top-1 hover:before:left-1 hover:before:w-full hover:before:h-full hover:before:z-0 hover:before:bg-sky-200 dark:hover:before:bg-sky-800"
              >
                <div className="absolute z-10 group-hover:bg-sky-900 p-1 group-hover:text-sky-100 dark:group-hover:bg-sky-100 dark:group-hover:text-sky-900">
                  <FaGithub size={28} />
                </div>
              </a>
            ) : null}
            {portfolioItem.attributes.link ? (
              <a
                href={portfolioItem.attributes.link}
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
        </div>
        <p className="text-sky-700 dark:text-sky-300 mb-5">
          {portfolioItem.attributes.description}
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: portfolioItem.attributes.content }}
        />
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let portfolioPaths: any | null = await fetch(
    `${API_URL}/api/portfolios?&populate=%2A`
  );
  portfolioPaths = await portfolioPaths.json();
  portfolioPaths = portfolioPaths?.data;

  return {
    paths: portfolioPaths?.map((post: any) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let portfolioItem: any | null = await fetch(
    `${API_URL}/api/portfolios?populate=%2A&filters[slug][$eqi]=${params?.slug}`
  );
  portfolioItem = await portfolioItem.json();
  portfolioItem = portfolioItem?.data;

  return {
    props: {
      portfolioItem: portfolioItem.length != 0 ? portfolioItem[0] : null,
    },
    revalidate: 60,
  };
};
