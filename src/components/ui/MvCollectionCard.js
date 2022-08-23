import React from "react";
import { Link } from "react-router-dom";

function MvCollectionCard({ ele }) {
  return (
    <Link to={ele._id} className="mv-collection-card">
      <div className="mv-collection-details">
        <h4>{ele.name}</h4>
      </div>
      {ele.songs.map((song, i) => (
        <img src={song.coverArt} key={i} />
      ))}
    </Link>
  );
}

export default MvCollectionCard;
