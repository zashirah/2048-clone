import React from "react";

function Tile({ tileValue }) {
  return (
    <div className="border border-gray-800 h-12 w-12 m-2 rounded-lg py-2 px-4 text-gray-900 font-bold text-xl"
      value={tileValue}
    >
      {tileValue}
    </div>
  );
}

export default Tile;
