import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import { LayoutContext } from "../context/layoutContext";
import Link from "next/link";

import { useTheme } from "next-themes";

import logo from "../public/logo.png";
import { useContext } from "react";
import { GetStaticProps } from "next";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

import { HomeInterface } from "../interfaces";

interface HomePropsInterface {
  HomepageDetails: HomeInterface;
}

function Home({ HomepageDetails }: HomePropsInterface) {
  const { name, description, greeting, title } = HomepageDetails;
  const { theme, setTheme } = useTheme();
  const { showNavBar } = useContext(LayoutContext);

  const motionDiv = [...Array(5)].map((item, index) => {
    return {
      active: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.5 * index,
          type: "spring",
          stiffness: 500,
        },
      },
      inactive: { opacity: 0, y: -50 },
    };
  });

  const motionImage = {
    active: {
      opacity: 1,
      transition: {
        delay: 0,
        type: "easeInOut",
        duration: 0.2,
      },
    },
    inactive: { opacity: 0 },
    whileHover: {
      scale: 1.05,
    },
    whileTap: {
      scale: 1,
    },
  };

  const motionRaneV = {
    active: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 1000,
        duration: 0.5,
      },
    },
    inactive: { opacity: 0, x: 100 },
  };

  const motionLetters = {
    whileHover: {
      y: -10,
      color: theme === "light" ? "#38bdf8" : "#74FF5C",
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
      color: theme === "light" ? "#0284c7" : "#22E000",
    },
  };

  const motionButtons = {
    active: {
      opacity: 1,
      y: [0, -10, 0],
      transition: {
        opacity: {
          delay: 2,
          duration: 0.25,
        },
        y: {
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 0.2,
        },
      },
    },
    inactive: {
      opacity: 0,
    },
    whileHover: {
      y: 0,
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
  };

  const rgv: Array<string> = Array.from(name);

  return (
    <>
      <Head>
        <title>Rane Villanueva</title>
      </Head>
      <section className="container m-auto px-10 w-full flex flex-col lg:flex-row items-center lg:space-x-10">
        <motion.div
          initial="inactive"
          animate="active"
          whileHover="whileHover"
          whileTap="whileTap"
          variants={motionImage}
          className="flex cursor-pointer max-w-xs lg:basis-1/3 mb-5 lg:mb-0"
        >
          <Image
            placeholder="blur"
            priority
            src={logo}
            alt="Logo"
            className="select-none "
          ></Image>
        </motion.div>
        <div className="lg:basis-2/3 max-w-full">
          <motion.p
            initial="inactive"
            animate="active"
            variants={motionDiv[0]}
            className="font-semibold text-sm sm:text-base"
          >
            {greeting}
          </motion.p>
          <motion.h2
            initial="inactive"
            animate="active"
            variants={motionRaneV}
            className="flex select-none "
            style={{ flexFlow: "wrap" }}
          >
            {name.split(" ").map((word, index) => {
              return (
                <motion.div className="select-none flex mr-4" key={index}>
                  {Array.from(word).map((letter, index) => (
                    <motion.strong
                      key={index}
                      variants={motionLetters}
                      whileHover="whileHover"
                      whileTap="whileTap"
                      animate="animate"
                      className="cursor-pointer text-4xl lg:text-5xl xl:text-6xl text-left  text-sky-600 dark:text-brand-blue-400"
                    >
                      {letter}
                    </motion.strong>
                  ))}
                </motion.div>
              );
            })}
          </motion.h2>
          <motion.h3
            initial="inactive"
            animate="active"
            variants={motionDiv[2]}
            className={`text-3xl lg:text-4xl xl:text-5xl font-bold py-2 ${theme ===
                "dark"
                  ? "gradient-text"
                  : "gradient-text-dark"}`}
          >
            {title}
          </motion.h3>
          <motion.p
            initial="inactive"
            animate="active"
            variants={motionDiv[3]}
            className="text-sm sm:text-base text-justify"
          >
            {description}
          </motion.p>
          <Link href="/contact" passHref legacyBehavior>
            <motion.button
              aria-label="Contact"
              initial="inactive"
              animate={!showNavBar ? "active" : ""}
              whileHover="whileHover"
              variants={motionButtons}
              className="text-left px-6 h-12  border-2  mr-auto mt-2 font-semibold bg-sky-100 dark:bg-brand-blue-900 border-sky-200 dark:border-brand-blue-800 hover:bg-sky-400 dark:hover:bg-brand-green-600 hover:border-sky-900 dark:hover:border-brand-green-100 dark:hover:text-brand-green-100"
            >
              CONTACT ME
            </motion.button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  let HomepageDetails: any | undefined = await fetch(`${API_URL}/api/home`);
  HomepageDetails = await HomepageDetails?.json();
  HomepageDetails = HomepageDetails?.data?.attributes;

  return {
    props: {
      HomepageDetails,
    },
    revalidate: 60,
  };
};
