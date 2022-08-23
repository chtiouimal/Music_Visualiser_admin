import React, { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";

function MvSongCard({ ele }) {
  const { dataContext, setDataContext } = useContext(PlayerContext);

  return (
    <div
      className="mv-song-card"
      onClick={() => setDataContext([{ ...ele, active: false }])}
    >
      <img src={ele.coverArt} alt="song_cover" />
      <div className="mv-song-card-details">
        <h4 className="mv-small-title">{ele.songName}</h4>
        <span className="mv-small-text">{ele.songArtist}</span>
      </div>
    </div>
  );
}

export default MvSongCard;
