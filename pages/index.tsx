import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/future/image";

import { useTheme } from "next-themes";

import logo from "../public/logo.png";

function Home() {
  const { theme, setTheme } = useTheme();

  const motionDiv = {
    active: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 500,
      },
    },
    inactive: { opacity: 0, y: -50 },
  };

  const motionImage = {
    active: {
      opacity: 1,
      transition: {
        delay: 1.5,
        type: "easeInOut",
        duration: 1,
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
      },
    },
    inactive: { opacity: 0, x: 100 },
  };

  const motionLetters = {
    whileHover: {
      y: -10,
      color: "#3b82f6",
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
      color: theme === "light" ? "#0c4a6e" : "#e0f2fe",
    },
  };

  const motionButtons = {
    active: {
      y: [0, -10, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        loop: Infinity,
        repeatDelay: 0.2,
      },
    },
    whileHover: {
      y: 0,
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
  };

  const rgv = Array.from("Rane Villanueva.");

  return (
    <>
      <Head>
        <title>Rane Villanueva</title>
      </Head>
      <div className="container m-auto my-auto px-10 w-full flex flex-row items-center space-x-10">
        <motion.div
          initial="inactive"
          animate="active"
          whileHover="whileHover"
          whileTap="whileTap"
          variants={motionImage}
          className="flex cursor-pointer"
        >
          <Image src={logo} alt="Logo" className=""></Image>
        </motion.div>
        <motion.div initial="inactive" animate="active" variants={motionDiv}>
          <div className="font-semibold text-lg">Hi there! I am</div>
          <motion.div
            initial="inactive"
            animate="active"
            variants={motionRaneV}
            className="flex select-none"
          >
            {rgv.map((rgv, index) =>
              rgv === " " ? (
                <div key={index} className="w-5"></div>
              ) : (
                <motion.div
                  key={index}
                  variants={motionLetters}
                  whileHover="whileHover"
                  whileTap="whileTap"
                  animate="animate"
                  className="cursor-pointer text-6xl text-left font-bold text-sky-900 dark:text-sky-100"
                >
                  {rgv}
                </motion.div>
              )
            )}
          </motion.div>
          <div className="gradient-text text-5xl font-bold py-2">
            Aspiring Developer.
          </div>
          <div className="text-lg text-justify">
            I am currently a Bachelor of Science in Computer Engineering student
            at Mapúa University. I am interested to learn the fields of
            Cybersecurity, Web Development, Mobile Development, Data Analysis
            and Visualization, and Artificial Intelligence. I have also created
            several projects. Check out the portfolio tab for more information
            about these projects.
          </div>
          <motion.button
            animate="active"
            whileHover="whileHover"
            variants={motionButtons}
            className="text-left px-6 h-12 bg-sky-100 dark:bg-sky-900 border-2 border-sky-200 dark:border-sky-800 mr-auto mt-2 font-semibold hover:bg-sky-400 dark:hover:bg-sky-600 hover:border-sky-900 dark:hover:border-sky-100"
          >
            CONTACT ME
          </motion.button>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
