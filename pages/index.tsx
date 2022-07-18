import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rane Villanueva</title>
      </Head>
      <div className="container mx-auto flex px-10 flex-col justify-center min-h-screen w-full">
        <div className="font-semibold text-lg">Hi there! I am</div>
        <div className="text-6xl font-bold py-2">Rane Villanueva.</div>
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
        <button className="text-left px-6 h-12 bg-sky-100 border-2 border-sky-200 mr-auto mt-2 font-semibold hover:bg-sky-400 hover:border-sky-900">
          CONTACT ME
        </button>
      </div>
    </>
  );
};

export default Home;
