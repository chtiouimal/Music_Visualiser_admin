import React from "react";
import { Avatar, List } from "antd";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";

function TrackCard({ track, setCurrentmusic, music, setIsplaying, setMusic }) {
  const songSelecthandler = () => {
    const selectedMusic = music.filter(
      (selectedTrack) => selectedTrack._id === track._id,
    );
    setCurrentmusic(selectedMusic[0]);
    setIsplaying(true);

    const activeMusic = music.map((mus) => {
      if (mus._id === track._id) {
        return {
          ...mus,
          active: true,
        };
      } else {
        return {
          ...mus,
          active: false,
        };
      }
    });
    setMusic(activeMusic);
  };
  return (
    <List.Item
      key={track.id}
      onClick={songSelecthandler}
      className={`${track.active ? "mv-selected-music" : ""}`}
    >
      <List.Item.Meta
        avatar={<Avatar src={track.coverArt} />}
        title={track.songName}
        // description={item.songArtist}
      />
      {track.active ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
    </List.Item>
  );
}

export default TrackCard;
