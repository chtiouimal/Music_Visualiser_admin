import React from "react";

function MvSongCard({ ele }) {
  const img =
    "https://firebasestorage.googleapis.com/v0/b/music-gallery-da2d1.appspot.com/o/Collections%2FCollection%203%2F02%2F12.png?alt=media&token=b3276df6-3280-4b1e-bb65-24f91b281822";

  return (
    <div className="mv-song-card">
      <img src={ele} alt="song_cover" />
      <div className="mv-song-card-details">
        <h4 className="mv-small-title">i don't need you</h4>
        <span className="mv-small-text">Delta X</span>
      </div>
    </div>
  );
}

export default MvSongCard;
