import React from "react";
import MvCollectionCard from "./MvCollectionCard";
import MvSongCard from "./MvSongCard";

function MvGridDisplay({ collections }) {
  const arr = [
    "https://firebasestorage.googleapis.com/v0/b/music-gallery-da2d1.appspot.com/o/Collections%2FCollection%203%2F04%2F10.png?alt=media&token=786a23ae-45e7-4e69-b82c-93c467142c18",
    "https://firebasestorage.googleapis.com/v0/b/music-gallery-da2d1.appspot.com/o/Collections%2FCollection%203%2F02%2F12.png?alt=media&token=b3276df6-3280-4b1e-bb65-24f91b281822",
    "https://firebasestorage.googleapis.com/v0/b/music-gallery-da2d1.appspot.com/o/Collections%2FCollection%203%2F03%2F13.png?alt=media&token=8250968b-d04e-4f1d-9f12-0457c4982dcb",
    "https://firebasestorage.googleapis.com/v0/b/music-gallery-da2d1.appspot.com/o/Collections%2Fcollection%202%2F01%2F05.png?alt=media&token=d1ee98fe-4865-4ae5-8993-a4aad7d38abe",
    "https://firebasestorage.googleapis.com/v0/b/music-gallery-da2d1.appspot.com/o/Collections%2Fcollection%202%2F02%2F06.png?alt=media&token=f97b2842-424b-4716-bd30-f363b9a825fc",
    "https://firebasestorage.googleapis.com/v0/b/music-gallery-da2d1.appspot.com/o/Collections%2Fcollection%202%2F03%2F07.png?alt=media&token=9948cf86-438e-415a-946a-18be8a635d10",
    "https://firebasestorage.googleapis.com/v0/b/music-gallery-da2d1.appspot.com/o/Collections%2Fcollection%202%2F04%2F08.png?alt=media&token=2b3e9ca6-108a-487d-92f5-1451b2ed2f93",
    "https://firebasestorage.googleapis.com/v0/b/music-gallery-da2d1.appspot.com/o/Collections%2Fcollection%204%2F01%2F11.png?alt=media&token=b9540ece-d725-4076-9088-6ff9eaa279de",
  ];
  return (
    <div className="mv-grid-display">
      {arr.map((e, i) =>
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
