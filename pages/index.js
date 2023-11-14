import Head from "next/head";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <title>Bharat Kumar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Bharat Kumar - Full Stack Developer" />
        <meta
          name="description"
          content="Bharat Kumar is a Full Stack Developer , Learnig constantly and creating better products."
        />
        <meta name="theme-color" content="#160037" />
        <meta
          name="keywords"
          content="Full Stack Developer, Software Engineer, Frontend Developer, Backend Developer"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        {/* Open Graph Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bharatkumar.vercel.app/" />
        <meta
          property="og:title"
          content="Bharat Kumar - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Bharat Kumar is a Full Stack Developer , Learnig constantly and creating better products."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/alphadynamic00/Portfolio_Bharat_kumar.png?updatedAt=1699977880877"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://bharatkumar.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Bharat Kumar - Full Stack Developer"
        />
        <meta
          property="twitter:description"
          content="Bharat Kumar is a Full Stack Developer , Learnig constantly and creating better products."
        />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/alphadynamic00/Portfolio_Bharat_kumar.png?updatedAt=1699977880877"
        />

        <link rel="shortcut icon" href="/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
      </Head>
      <Navbar />
      <Main />
      <Contact />
    </>
  );
}
