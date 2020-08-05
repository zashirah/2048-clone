import React from "react";

function Tile({ tileValue }) {
  let color = ''

  if (!tileValue) {
    color = "gray-400 bg-opacity-75";
  } else if (tileValue === 2) {
    color = "gray-300 bg-opacity-50";
  } else if (tileValue === 4) {
    color = "gray-500 bg-opacity-25";
  } else if (tileValue === 8) {
    color = "green-700 bg-opacity-50";
  } else if (tileValue === 16) {
    color = "green-700 bg-opacity-75";
  } else if (tileValue === 32) {
    color = "yellow-500 bg-opacity-50";
  } else if (tileValue === 64) {
    color = "yellow-500 bg-opacity-75";
  } else if (tileValue === 128) {
    color = "blue-700 bg-opacity-50";
  } else if (tileValue === 256) {
    color = "blue-700 bg-opacity-75";
  } else if (tileValue === 512) {
    color = "orange-700 bg-opacity-50";
  } else if (tileValue === 1024) {
    color = "orange-700 bg-opacity-75";
  } else if (tileValue === 2048) {
    color = "teal-700 bg-opacity-50";
  } else if (tileValue === 5096) {
    color = "teal-700 bg-opacity-75";
  } else if (tileValue === 10192) {
    color = "purple-700 bg-opacity-50";
  } else if (tileValue === 20384) {
    color = "purple-700 bg-opacity-75";
  } else if (tileValue === 40768) {
    color = "red-700 bg-opacity-50";
  } else if (tileValue === 81536) {
    color = "red-700 bg-opacity-75";
  } else {
    color = "pink-900"
  }

  return (
    <div
      className={`bg-${color} border border-gray-800 h-12 w-12 m-1 rounded-md justify-center items-center  text-gray-900 font-semibold text-lg flex flex-no-wrap`}
      value={tileValue}
    >
      <p>{tileValue}</p>
    </div>
  );
}

export default Tile;
