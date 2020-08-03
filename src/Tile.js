import React from "react";

function Tile({ tileValue }) {
  return (
    <div
      style={{
        height: "44px",
        width: "44px",
        border: "solid black 1px",
        padding: "1px",
        margin: "1px",
      }}
      value={tileValue}
    >
      {tileValue}
    </div>
  );
}

export default Tile;
