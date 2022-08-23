import React from "react";
import MvCollectionCard from "./MvCollectionCard";
import MvSongCard from "./MvSongCard";

function MvGridDisplay({ collections, data }) {
  return (
    <div className="mv-grid-display">
      {data.map((e, i) =>
        collections ? (
          <MvCollectionCard key={i} ele={e} />
        ) : (
          <MvSongCard key={i} ele={e} />
        ),
      )}
    </div>
  );
}

export default MvGridDisplay;
