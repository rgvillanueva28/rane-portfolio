import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import { LayoutContext } from "../context/layoutContext";
import Link from "next/link";

import TextType from "../components/ReactBits/TextType";

import { useTheme } from "next-themes";

import logo from "../public/logo.png";
import { useContext, useEffect, useState } from "react";
import { GetStaticProps } from "next";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

import { HomeInterface } from "../interfaces";
import DecryptedText from "../components/ReactBits/DecyptedText";
import GradientText from "../components/ReactBits/GradientText";

interface HomePropsInterface {
  HomepageDetails: HomeInterface;
}

function Home({ HomepageDetails }: HomePropsInterface) {
  const { name, description, greeting, title } = HomepageDetails;
  const { showNavBar } = useContext(LayoutContext);

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const motionDiv = [...Array(5)].map((item, index) => {
    return {
      active: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.5 * index + 0.5,
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
        delay: 1,
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
          delay: 2.5,
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
          <TextType
            text={greeting}
            typingSpeed={50}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
            className="font-semibold text-sm sm:text-base"
            textColors={["text-brand-green-500 dark:text-brand-blue-500"]}
          />

          <motion.p
            initial="inactive"
            animate="active"
            variants={motionRaneV}
            className="font-semibold text-sm sm:text-base"
          >
            <DecryptedText
              text={name}
              speed={25}
              sequential={true}
              useOriginalCharsOnly={false}
              animateOn="hover"
              className="text-4xl lg:text-5xl xl:text-6xl text-left  dark:text-brand-green-500 text-brand-blue-500 font-bold"
              encryptedClassName="text-4xl lg:text-5xl xl:text-6xl text-left  dark:text-brand-green-500 text-brand-blue-500 font-bold"
            />
          </motion.p>

          <motion.p
            initial="inactive"
            animate="active"
            variants={motionDiv[2]}
            className="text-sm sm:text-base text-justify"
          >
            <GradientText
              colors={
                theme === "light"
                  ? ["#bae6fd", "#0ea5e9", "#0c4a6e", "#0ea5e9", "#bae6fd"]
                  : ["#EEFFEB", "#39FF14", "#0C5200", "#39FF14", "#EEFFEB"]
              }
              animationSpeed={10}
              showBorder={false}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold py-2 bg-transparent"
            >
              {title}
            </GradientText>
          </motion.p>

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
  // console.log(HomepageDetails)
  HomepageDetails = HomepageDetails?.data;

  return {
    props: {
      HomepageDetails,
    },
    revalidate: 60,
  };
};
