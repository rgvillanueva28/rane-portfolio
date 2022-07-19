import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/future/image";
import { LayoutContext } from "../context/layoutContext";
import { MdSchool, MdMail } from "react-icons/md";
import { FaBuilding, FaRegCalendar } from "react-icons/fa";

import { useTheme } from "next-themes";

import logo from "../public/logo.png";
import { useContext } from "react";

const aboutItems = [
  {
    id: 0,
    icon: MdSchool,
    name: "B.S. Computer Engineering",
  },
  {
    id: 1,
    icon: FaBuilding,
    name: "Mapúa University",
  },
  {
    id: 2,
    icon: FaRegCalendar,
    name: "2018 - present",
  },
  {
    id: 3,
    icon: MdMail,
    name: "rgvillanueva28@gmail.com",
  },
];

function about() {
  const { theme, setTheme } = useTheme();
  const { showNavBar } = useContext(LayoutContext);

  const motionDiv = {
    hidden: {
      opacity: 0,
      //   y: 20,
    },
    visible: {
      opacity: 1,
      //   y: 0,
      transition: {
        delay: 1,
        // type: "spring",
        // stiffness: 500,
        duration: 2,
        staggerChildren: 0.25,
        // when: "beforeChildren",
      },
    },
  };

  const motionP = {
    hidden: {
      //   opacity: 0,
      x: 30,
    },
    visible: {
      //   opacity: 1,
      x: 0,
      transition: {
        // delay: 1,
        duration: 2,
      },
    },
  };

  const frameVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        delay: 1,
        duration: 3,
        staggerChildren: 0.5,
        // ease: [0.02, 0.6, -0.01, 0.91],
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: [0.02, 0.6, -0.01, 0.91],
      },
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
      },
    },
    inactive: { opacity: 0, x: 100 },
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

  const aboutMe = Array.from("About Me");

  return (
    <>
      <Head>
        <title>Rane Villanueva</title>
      </Head>
      <div className="container m-auto px-10 w-full flex flex-col">
        <motion.div
          initial="inactive"
          animate="active"
          variants={motionRaneV}
          className="flex select-none mb-5"
        >
          {aboutMe.map((aboutMe, index) =>
            aboutMe === " " ? (
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
                {aboutMe}
              </motion.strong>
            )
          )}
        </motion.div>

        <motion.ul
          className="w-full space-y-2"
          initial="hidden"
          animate="visible"
          variants={motionDiv}
        >
          {aboutItems.map((item, index) => {
            return (
              <motion.li key={index} className="cursor-pointer hover:text-sky-500" variants={motionP}>
                <item.icon className="inline mr-1 my-auto" />
                {item.name}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </>
  );
}

export default about;
