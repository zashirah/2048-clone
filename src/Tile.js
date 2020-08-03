import React, { useEffect, useState } from "react";

function Tile({ tileValue }) {
  if (tileValue) {
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
  } else {
    return <div></div>;
  }
}

export default Tile;
