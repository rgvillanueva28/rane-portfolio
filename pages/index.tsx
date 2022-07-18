import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rane Villanueva</title>
      </Head>
      <div>
        <h1 className="text-sm">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </div>
    </>
  );
};

export default Home;
