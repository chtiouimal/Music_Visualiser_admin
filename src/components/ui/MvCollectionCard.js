import React from "react";

function MvCollectionCard({ ele }) {
  const coll = ["1", "2", "3", "4"];

  return (
    <div className="mv-collection-card">
      <div className="mv-collection-details">
        <h4>Collection 1</h4>
      </div>
      {coll.map((coll) => (
        <img src={ele} key={coll} />
      ))}
    </div>
  );
}

export default MvCollectionCard;
