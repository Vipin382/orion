import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import style from "../styles/leftbar.module.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Image from "next/image";
import Events from "./Events";

const Leftbar = () => {
  const [value, onChange] = useState(new Date());
  const [state, setState] = useState(1);
  const [name, setName] = useState("Eshan");
  return (
    <div className={style.leftbar}>
      <div className={style.header}>
        {state ? (
          <NotificationsNoneOutlinedIcon
            style={{ color: "grey", fontSize: "30px", alignSelf: "center" }}
          />
        ) : (
          <NotificationsActiveIcon style={{ color: "grey" }} />
        )}
        <div className={style.user} style={{ color: "grey" }}>
          <div className={style.profile}>
            <Image
              src={require(`./Assets/Image/person.jpg`)}
              alt={"loading.."}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p>{name}</p>
        </div>
      </div>
      <div className={style.calander}>
        <h2
          style={{
            color: "grey",
            width: "100%",
            padding: "10px",
          }}
        >
          My Progress
        </h2>
        <Calendar onChange={onChange} value={value} />
      </div>
      <Events />
    </div>
  );
};

export default Leftbar;
