import { Avatar } from "@mui/material";
import React from "react";
import sideavatar from "./img/profile.jpeg";
import "./Sidebar.css";
import sidebgdimg from "./img/react.png";

function Sidebar() {
  const recentItem = (topic) => {
    return (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )};

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={sidebgdimg} alt="" />
        <Avatar className="sidebar__avatar" src={sideavatar} />
        <h2>Aniket Ojha</h2>
        <h4>aniketojha@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you?</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,548</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software engineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
