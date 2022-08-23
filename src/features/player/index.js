import { Divider, Space } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import { musicList } from "../../utils/static.constants";
import MusicControls from "./components/MusicControls";
import MusicLibrary from "./components/MusicLibrary";
import MusicPlayer from "./components/MusicPlayer";

function MvPlayer({ data }) {
  const { dataContext, setDataContext } = useContext(PlayerContext);

  // const dataList = data.map((e) => {
  //   return { ...e, active: false };
  // });

  useEffect(() => {
    setMusic(dataContext);
    setCurrentmusic(dataContext[0]);
  }, [dataContext]);

  const [music, setMusic] = useState(dataContext);
  const [currentmusic, setCurrentmusic] = useState(dataContext[0]);
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
      <Divider style={{ borderColor: "transparent" }} />
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
