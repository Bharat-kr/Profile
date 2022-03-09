import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="flex ">
          <Sidebar />
          <Main />
        </div>
      </div>
      <Footer />
    </>
  );
}
