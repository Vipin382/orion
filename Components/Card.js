import React from "react";
import style from "../styles/card.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from "@mui/icons-material/Circle";
const card = ({ number, color }) => {
  return (
    <div className={style.card} style={{ backgroundColor: `light${color}` }}>
      <div className={style.col_1} style={{ backgroundColor: `${color}` }}>
        <p>{number}</p>
      </div>
      <div className={style.col_2}>
        <h2>Life Contingency Tutorials</h2>
        <p>
          8th - 10th July 2021{" "}
          <CircleIcon
            style={{
              width: "10px",
              height: "10px",
              color: "rgb(25, 132, 255)",
            }}
          />
          8 A.M - 9 A.M Edulog Tutorial College, Blk 56 ,Lagos State
        </p>
      </div>
      <div className={style.btn}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};

export default card;
