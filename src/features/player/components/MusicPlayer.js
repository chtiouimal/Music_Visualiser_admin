import React from "react";
import { Avatar } from "antd";

function MusicPlayer({ currentMusic, isplaying }) {
  const img =
    "https://firebasestorage.googleapis.com/v0/b/music-gallery-da2d1.appspot.com/o/Collections%2FCollection%203%2F04%2F10.png?alt=media&token=786a23ae-45e7-4e69-b82c-93c467142c18";

  return (
    <div className="mv-music-player">
      <div className="mv-song">
        <Avatar
          size={200}
          src={currentMusic.coverArt}
          className={isplaying ? "rotate-animation mv-playing-now" : ""}
          alt={currentMusic._id}
        />
        <div className="mv-song-name">
          <h4>{currentMusic.songName}</h4>
          <span>{currentMusic.songArtist}</span>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
