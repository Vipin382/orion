import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sidebar from "../Components/Sidebar";
import Leftbar from "../Components/Leftbar";
import Style from "../styles/middle.module.css";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.ContainBox}>
        <Sidebar />
        <div className={Style.middle}>
          <Navbar />
          <div className={Style.design}>
            <Image
              src={require("../Components/Assets/Image/Welcome.png")}
              alt={"loading"}
            />
          </div>
        </div>
        <Leftbar />
      </div>
    </div>
  );
}
