/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import { motion } from "framer-motion";
import { MdSchool, MdMail } from "react-icons/md";
import { FaBuilding, FaRegCalendar } from "react-icons/fa";

import { useTheme } from "next-themes";

import { SubmitHandler, useForm } from "react-hook-form";

type CredentialInputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

function Contact() {
  const { theme } = useTheme();

  const motionDiv = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const motionInput = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CredentialInputs>();

  const onSubmit: SubmitHandler<CredentialInputs> = (data) => {
    // console.log(data);
    location.href = `mailto:rgvillanueva28@gmail.com?subject=${data.subject}&body=${data.message}%0A%0Afrom ${data.name}%0A${data.email}`;
  };

  return (
    <>
      <Head>
        <title>Rane Villanueva</title>
      </Head>
      <section className="px-10 w-full flex flex-col overflow-y-auto overflow-x-hidden">
        <motion.h2
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
        </motion.h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="w-full lg:w-1/2 2xl:w-1/3 "
        >
          <motion.div initial="hidden" animate="visible" variants={motionDiv}>
            <motion.div
              variants={motionInput}
              key="name"
              className="relative z-0 mb-4"
            >
              <input
                {...register("name", {
                  required: true,
                })}
                className="peer block w-full appearance-none border-0 border-b-2 border-sky-900 dark:border-sky-100 bg-transparent py-2.5 px-0 text-sm text-sky-900 dark:text-sky-100 focus:border-sky-600  focus:dark:border-sky-400 focus:text-sky-600 focus:dark:text-sky-400 outline-none focus:ring-0 animate-color duration-200"
                type="text"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-sky-900 dark:text-sky-100 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-sky-700 dark:peer-focus:text-sky-300">
                Name
              </label>
              {errors?.name?.type === "required" && (
                <div className="text-red-500 text-sm">required</div>
              )}
            </motion.div>
            <motion.div
              variants={motionInput}
              key="email"
              className="relative z-0  mb-4"
            >
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
                className="peer block w-full appearance-none border-0 border-b-2 border-sky-900 dark:border-sky-100 bg-transparent py-2.5 px-0 text-sm text-sky-900 dark:text-sky-100 focus:border-sky-600  focus:dark:border-sky-400 focus:text-sky-600 focus:dark:text-sky-400 outline-none focus:ring-0 animate-color duration-200"
                type="email"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-sky-900 dark:text-sky-100 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-sky-700 dark:peer-focus:text-sky-300">
                Email
              </label>
              {errors?.email?.type === "required" && (
                <div className="text-red-500 text-sm">required</div>
              )}
              {errors?.email?.type === "pattern" && (
                <div className="text-red-500 text-sm">
                  email address not valid
                </div>
              )}
            </motion.div>
            <motion.div
              variants={motionInput}
              key="subject"
              className="relative z-0  mb-4"
            >
              <input
                {...register("subject", { required: true })}
                className="peer block w-full appearance-none border-0 border-b-2 border-sky-900 dark:border-sky-100 bg-transparent py-2.5 px-0 text-sm text-sky-900 dark:text-sky-100 focus:border-sky-600  focus:dark:border-sky-400 focus:text-sky-600 focus:dark:text-sky-400 outline-none focus:ring-0 animate-color duration-200"
                type="text"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-sky-900 dark:text-sky-100 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-sky-700 dark:peer-focus:text-sky-300">
                Subject
              </label>
              {errors?.subject?.type === "required" && (
                <div className="text-red-500 text-sm">required</div>
              )}
            </motion.div>
            <motion.div
              variants={motionInput}
              key="message"
              className="relative z-0  mb-4"
            >
              <textarea
                {...register("message", { required: true })}
                rows={5}
                className="peer block w-full appearance-none border-0 border-b-2 border-sky-900 dark:border-sky-100 bg-transparent py-2.5 px-0 text-sm text-sky-900 dark:text-sky-100 focus:border-sky-600  focus:dark:border-sky-400 focus:text-sky-600 focus:dark:text-sky-400 outline-none focus:ring-0 animate-color duration-200"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-sky-900 dark:text-sky-100 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-sky-700 dark:peer-focus:text-sky-300">
                Message
              </label>
              {errors?.message?.type === "required" && (
                <div className="text-red-500 text-sm">required</div>
              )}
            </motion.div>

            <motion.button
              aria-label="Send email"
              variants={motionInput}
              key="button"
              type="submit"
              className="text-left px-6 h-12 bg-sky-100 dark:bg-sky-900 border-2 border-sky-200 dark:border-sky-800 mr-auto mt-2 font-semibold hover:bg-sky-400 dark:hover:bg-sky-600 hover:border-sky-900 dark:hover:border-sky-100"
            >
              Submit
            </motion.button>
          </motion.div>
        </form>
      </section>
    </>
  );
}

export default Contact;
