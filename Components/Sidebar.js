import React from "react";
import Style from "../styles/Sidebar.module.css";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";
import Link from "next/link";

// color="rgb(25,132,255)"
const sidebar = () => {
  return (
    <div className={Style.sidebar}>
      <div className={Style.logo}>
        <Image
          src={require("./Assets/Image/logo.png")}
          alt={"loading..."}
          height={"30px"}
          width={"30px"}
        />
        <h2>ORION</h2>
      </div>
      <div className={Style.Section}>
        <Link href={"/"}>
          <a>
            <HomeIcon style={{ fontSize: "30px" }} /> Home
          </a>
        </Link>
        <Link href={"/_upload"}>
          <a>
            <ArticleOutlinedIcon style={{ fontSize: "30px" }} /> Upload
          </a>
        </Link>
        <Link href={"/View"}>
          <a>
            <BookmarkBorderOutlinedIcon style={{ fontSize: "30px" }} /> View
          </a>
        </Link>
        <Link href={"/*"}>
          <a>
            <GroupsOutlinedIcon style={{ fontSize: "30px" }} /> Edit
          </a>
        </Link>
        <Link href={"/*"}>
          <a>
            <ChatBubbleOutlineOutlinedIcon style={{ fontSize: "30px" }} />{" "}
            Messages
          </a>
        </Link>
        <Link href={"/*"}>
          <a>
            <SettingsOutlinedIcon style={{ fontSize: "30px" }} /> Settings
          </a>
        </Link>
      </div>
      <div className={Style.signout}>
        <Link href={"/*"}>
          <a>
            <ExitToAppIcon style={{ fontSize: "30px" }} /> Sign Out
          </a>
        </Link>
      </div>
    </div>
  );
};

export default sidebar;
