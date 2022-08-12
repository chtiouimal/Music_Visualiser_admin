import { Divider, Space } from "antd";
import React, { useState } from "react";
import { musicList } from "../../utils/static.constants";
import MusicControls from "./components/MusicControls";
import MusicLibrary from "./components/MusicLibrary";
import MusicPlayer from "./components/MusicPlayer";

function MvPlayer({ data }) {
  const dataList = musicList.map((e) => {
    return { ...e, active: false };
  });
  const [music, setMusic] = useState(dataList);
  const [currentmusic, setCurrentmusic] = useState(music[0]);
  const [isplaying, setIsplaying] = useState(false);
  const [librarystatus, setLibrarystatus] = useState(true);

  return (
    <div className="mv-player">
      <MusicPlayer currentMusic={currentmusic} isplaying={isplaying} />
      <Divider style={{ borderColor: "transparent", margin: "16px 0" }} />
      <MusicControls
        currentMusic={currentmusic}
        setCurrentmusic={setCurrentmusic}
        isplaying={isplaying}
        setIsplaying={setIsplaying}
        music={music}
        setMusic={setMusic}
      />
      <Divider />
      <MusicLibrary
        librarystatus={librarystatus}
        music={music}
        setMusic={setMusic}
        setCurrentmusic={setCurrentmusic}
        setIsplaying={setIsplaying}
      />
    </div>
  );
}

export default MvPlayer;
