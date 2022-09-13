import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import style from "../styles/navbar.module.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import BedtimeIcon from "@mui/icons-material/Bedtime";
const Navbar = () => {
  const [state, setstate] = useState(true);
  return (
    <div className={style.navbar}>
      <div className={style.srch}>
        <SearchIcon
          style={{ color: "grey", position: "absolute", fontSize: "30px" }}
        />
        <input
          type="search"
          placeholder="Search Courses Documents Activities..."
        />
      </div>
      <div className={style.toggleCont}>
        <LightModeIcon
          style={{ color: "grey" }}
          style={{ color: `${state ? "rgb(25, 132, 255)" : "grey"}` }}
        />
        <div
          className={style.toggleButton}
          onClick={() => {
            setstate(!state);
          }}
          style={{
            backgroundColor: `${state ? "rgb(25, 132, 255)" : "grey"}`,
            cursor: "pointer",
          }}
        >
          <div
            className={state ? `${style.toggleBtn}` : ` ${style.active}`}
            onClick={() => {
              setstate(!state);
            }}
          ></div>
        </div>
        <BedtimeIcon
          style={{ color: "grey" }}
          style={{ color: `${state ? "grey" : "rgb(25, 132, 255)"}` }}
        />
      </div>
    </div>
  );
};

export default Navbar;
