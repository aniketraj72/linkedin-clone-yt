import React, { useState } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import profileAvatar from "./img/profile.jpeg";
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
function Post({ name, description, message, photoUrl }) {
    
    return (
    <div className="post">
      <div className="post__header">
        <Avatar src={profileAvatar} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Like" color="gray" />
      </div>
    </div>
  );
}

export default Post;
