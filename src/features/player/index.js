import { Divider } from "antd";
import React from "react";
import MusicLibrary from "./components/MusicLibrary";
import MusicPlayer from "./components/MusicPlayer";

function MvPlayer() {
  return (
    <div className="mv-player">
      <MusicPlayer />
      <Divider />
      <MusicLibrary />
    </div>
  );
}

export default MvPlayer;
