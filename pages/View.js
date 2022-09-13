import style from "../styles/view.module.css";
import React, { useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Leftbar from "../Components/Leftbar";
import Navbar from "../Components/Navbar";
import Style from "../styles/middle.module.css";
import Head from "next/head";
import TableRow from "../Components/TableRow";
import { app, database } from "../Firebase/firebaseConfig.js";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

const View = () => {
  const databaseRef = collection(database, "sample");
  async function getData() {
    let data;
    const databaseRef = collection(database, "sample");
    await getDocs(databaseRef).then((response) => {
      data = response.docs.map((data) => {
        return data.data();
      });
    });
    console.log(data);
  }
  getData();
  return (
    <div className={style.view}>
      <div className={style.container}>
        <Sidebar />
        <div className={Style.middle}>
          <Navbar />
          <div className={Style.table}>
            <table>
              <tr>
                <th>Course Code </th>
                <th>Course Name</th>
                <th>LectureHours</th>
                <th>Tutorial</th>
                <th>Practical</th>
                <th>J-comp</th>
                <th>Credits</th>
              </tr>
            </table>
          </div>
        </div>
        <Leftbar />
      </div>
    </div>
  );
};

export default View;
