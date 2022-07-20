/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/future/image";
import { LayoutContext } from "../context/layoutContext";
import { MdSchool, MdMail } from "react-icons/md";
import { FaBuilding, FaRegCalendar } from "react-icons/fa";

import { useTheme } from "next-themes";

import { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

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

function Contact() {
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
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
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

  const pageTitle = Array.from("Contact Me");

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
          {pageTitle.map((letter, index) =>
            letter === " " ? (
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
                {letter}
              </motion.strong>
            )
          )}
        </motion.div>

        <Formik
          initialValues={{ name: "", email: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <motion.div
              className="w-full space-y-2"
              initial="hidden"
              animate="visible"
              variants={motionDiv}
            >
              <Form>
                <div className="relative z-0">
                  <Field
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    type="email"
                    name="email"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Email
                  </label>
                  <ErrorMessage name="email" component="div" />
                </div>

                <button
                  type="submit"
                  className="p-2 bg-sky-200"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </Form>
            </motion.div>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Contact;
