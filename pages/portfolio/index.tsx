import Head from "next/head";
import { motion } from "framer-motion";
import { LayoutContext } from "../../context/layoutContext";

import { useTheme } from "next-themes";

import { useContext } from "react";
import { GetStaticProps } from "next";
import PortfolioItem from "../../components/Portfolio/portfolioItem";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function Portfolio({ portfolioItems }: any) {
  const { theme, setTheme } = useTheme();
  const { showNavBar } = useContext(LayoutContext);

  const motionDiv = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 2,
        staggerChildren: 0.2,
      },
    },
  };

  const motionP = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

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

  const myPortfolio = Array.from("My Portfolio");

  return (
    <>
      <Head>
        <title>Rane Villanueva</title>
      </Head>
      <div className=" py-5 px-10 w-full h-full flex flex-col overflow-y-auto">
        <motion.div
          initial="inactive"
          animate="active"
          variants={motionRaneV}
          className="flex select-none mb-5"
        >
          {myPortfolio.map((myPortfolio, index) =>
            myPortfolio === " " ? (
              <div key={index} className="w-5"></div>
            ) : (
              <motion.strong
                key={index}
                variants={motionLetters}
                whileHover="whileHover"
                whileTap="whileTap"
                animate="animate"
                className="cursor-pointer text-4xl lg:text-5xl xl:text-6xl text-left  text-sky-600 dark:text-sky-400"
              >
                {myPortfolio}
              </motion.strong>
            )
          )}
        </motion.div>

        <motion.ul
          className="flex flex-row flex-wrap mx-auto"
          initial="hidden"
          animate="visible"
          variants={motionDiv}
        >
          {portfolioItems?.map((item: any, index: any) => {
            return (
              <PortfolioItem
                key={index}
                slug={item.attributes.slug}
                title={item.attributes.title}
                description={item.attributes.description}
                ghLink={item.attributes.github}
                link={item.attributes.link}
                tags={item.attributes.portfolio_techs}
                variants={motionP}
              />
            );
          })}
        </motion.ul>
      </div>
    </>
  );
}

export default Portfolio;

export const getStaticProps: GetStaticProps = async (context) => {
  let portfolioItems: any | undefined = await fetch(
    `${API_URL}/api/portfolios?populate=%2A`
  );
  portfolioItems = await portfolioItems.json();
  portfolioItems = portfolioItems?.data;

  //   console.log(portfolioItems);

  return {
    props: {
      portfolioItems,
    },
    revalidate: 60,
  };
};
