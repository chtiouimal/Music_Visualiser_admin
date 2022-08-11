import React from "react";
import {
  StepForwardOutlined,
  StepBackwardOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";

function MusicPlayer() {
  const img =
    "https://firebasestorage.googleapis.com/v0/b/music-gallery-da2d1.appspot.com/o/Collections%2FCollection%203%2F04%2F10.png?alt=media&token=786a23ae-45e7-4e69-b82c-93c467142c18";

  return (
    <div className="mv-music-player">
      <div className="mv-song">
        <Avatar size={200} src={img} />
        <div className="mv-song-name">
          <h4>Love is a bitch</h4>
          <span>Two Feet</span>
        </div>
      </div>
      <div className="mv-controls">
        <StepBackwardOutlined style={{ fontSize: 25 }} />
        <PlayCircleOutlined style={{ fontSize: 50 }} />
        <StepForwardOutlined style={{ fontSize: 25 }} />
      </div>
    </div>
  );
}

export default MusicPlayer;
