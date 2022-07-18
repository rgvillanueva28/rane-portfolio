import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";

const Home: NextPage = () => {
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
      <motion.div
        initial="inactive"
        animate="active"
        variants={motionDiv}
        className="container m-auto my-auto px-10 w-full"
      >
        <div className="font-semibold text-lg">Hi there! I am</div>
        <motion.div
          initial="inactive"
          animate="active"
          variants={motionRaneV}
          className="flex"
        >
          {rgv.map((rgv, index) =>
            rgv === " " ? (
              <div key={index} className="w-5"></div>
            ) : (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  transition: {
                    type: "spring",
                    stiffness: 1000,
                  },
                }}
                whileTap={{
                  y: 0,
                  color: "#3b82f6",
                }}
                className="cursor-pointer text-6xl text-left font-bold"
              >
                {rgv}
              </motion.div>
            )
          )}
        </motion.div>
        <div className="gradient-text text-5xl font-bold py-2">
          Aspiring Developer.
        </div>
        <div className="text-lg">
          I am currently a Bachelor of Science in Computer Engineering student
          at Mapúa University. I am interested to learn the fields of
          Cybersecurity, Web Development, Mobile Development, Data Analysis and
          Visualization, and Artificial Intelligence. I have also created
          several projects. Check out the portfolio tab for more information
          about these projects.
        </div>
        <motion.button
          animate="active"
          whileHover="whileHover"
          variants={motionButtons}
          className="text-left px-6 h-12 bg-sky-100 border-2 border-sky-200 mr-auto mt-2 font-semibold hover:bg-sky-400 hover:border-sky-900"
        >
          CONTACT ME
        </motion.button>
      </motion.div>
    </>
  );
};

export default Home;
