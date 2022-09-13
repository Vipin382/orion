import Head from "next/head";
import Image from "next/image";
import Sidebar from "../Components/Sidebar";
import Leftbar from "../Components/Leftbar";
import style from "../styles/upload.module.css";
import Style from "../styles/middle.module.css";
import Navbar from "../Components/Navbar";
import IosShareIcon from "@mui/icons-material/IosShare";
import { useRef, useState } from "react";
import { app, database } from "../Firebase/firebaseConfig.js";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import data from "./data.json";

const _upload = () => {
  const ref = useRef();
  const newRef = useRef();
  const [state, setState] = useState();

  async function getData() {
    const databaseRef = collection(database, "sample");
    await getDocs(databaseRef).then((response) => {
      console.log(
        response.docs.map((data) => {
          return data.data();
        })
      );
    });
  }
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(parse(fileUploaded));
    setState(fileUploaded);
  };
  const databaseRef = collection(database, "sample");
  const addAllData = () => {
    for (let i in data.length) addData(i);
  };
  const addData = () => {
    const new_data = {};
    for (let i = 0; i < data.length; i++) {
      new_data[i] = data[i];
    }
    addDoc(databaseRef, new_data)
      .then(() => {
        alert("Data uploaded");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className={style.upload}>
      <div className={style.container}>
        <div className={style.ContainBox}>
          <Sidebar />
          <div className={Style.middle}>
            <Navbar />
            <div className={style.uploader}>
              <div className={style.uploadCont}>
                <IosShareIcon
                  style={{ height: "200px", width: "200px", cursor: "pointer" }}
                  onClick={() => {
                    ref.current.click();
                  }}
                />
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={ref}
                  onChange={handleChange}
                  accept={"doc/csv"}
                />
              </div>
            </div>
            <button onClick={addData}>Update</button>
            <button onClick={getData}>Get Data</button>
          </div>
          <Leftbar />
        </div>
      </div>
    </div>
  );
};

export default _upload;
