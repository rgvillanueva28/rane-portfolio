/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import { motion } from "framer-motion";
import { MdSchool, MdMail } from "react-icons/md";
import { FaBuilding, FaRegCalendar, FaIdCard } from "react-icons/fa";

import { useTheme } from "next-themes";

const aboutItems = [
  {
    id: 0,
    icon: FaIdCard,
    name: "Rane Gillian Villanueva",
  },
  {
    id: 1,
    icon: MdSchool,
    name: "B.S. Computer Engineering",
  },
  {
    id: 2,
    icon: FaBuilding,
    name: "Mapúa University",
  },
  {
    id: 3,
    icon: FaRegCalendar,
    name: "2018 - present",
  },
  {
    id: 4,
    icon: MdMail,
    name: "rgvillanueva28@gmail.com",
  },
];

function about() {
  const { theme, setTheme } = useTheme();

  const motionUl = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.25,
      },
    },
  };

  const motionLi = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.25,
      },
    },
  };

  const motionRaneV = {
    active: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0,
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
      <section className="container m-auto px-10 w-full flex flex-col">
        <motion.h2
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
        </motion.h2>

        <motion.ul
          className="w-full space-y-2"
          initial="hidden"
          animate="visible"
          variants={motionUl}
        >
          {aboutItems.map((item, index) => {
            return (
              <motion.li
                key={index}
                className="cursor-pointer hover:text-sky-500 flex flex-row"
                variants={motionLi}
              >
                <item.icon className="inline mr-1 my-auto" />
                <p>{item.name}</p>
              </motion.li>
            );
          })}
        </motion.ul>
      </section>
    </>
  );
}

export default about;
