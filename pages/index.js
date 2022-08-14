import Head from "next/head";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bharat Kumar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Bharat Kumar is a Full Stack Developer , Learnig constantly and creating better products."
        />
        <meta name="keywords" content="" />

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
          content="https://ik.imagekit.io/6djsamqli/Gradientify/Gradientify-Cover_c7c44xvwc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660240912873"
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
          content="https://ik.imagekit.io/6djsamqli/Gradientify/Gradientify-Cover_c7c44xvwc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660240912873"
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
