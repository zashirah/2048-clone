import React from "react";

function Tile({ tileValue }) {
  return (
    <div
      className="border border-gray-800 h-12 w-12 m-2 rounded-lg justify-center items-center text-gray-900 font-bold text-xl flex flex-no-wrap"
      value={tileValue}
    >
      <p>{tileValue}</p>
    </div>
  );
}

export default Tile;
