import React from "react";
import style from "../styles/events.module.css";
import Card from "./Card";

const Events = () => {
  return (
    <div className={style.events}>
      <div className={style.eventHeader}>
        <h2>Upcoming Activities</h2>
        <p>See all</p>
      </div>
      <div className={style.eventSection}>
        <Card number={8} color={"blue"} />
        <Card number={13} color={"pink"} />
        <Card number={18} color={"green"} />
        <Card number={23} color={"orange"} />
      </div>
    </div>
  );
};

export default Events;
