import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Tile from "./Tile"

function TileSurface({
  gameOver,
  tileValue00,
  tileValue01,
  tileValue02,
  tileValue03,
  tileValue10,
  tileValue11,
  tileValue12,
  tileValue13,
  tileValue20,
  tileValue21,
  tileValue22,
  tileValue23,
  tileValue30,
  tileValue31,
  tileValue32,
  tileValue33,
}) {
  return (
    <AnimatePresence>
      {!gameOver && (
        <div
          className={"my-4 w-72 h-72 bg-gray-100 bg-opacity-75 flex flex-row flex-wrap rounded-lg justify-around items-center border border-gray-900"}
        >
          <Tile tileValue={tileValue00} />
          <Tile tileValue={tileValue01} />
          <Tile tileValue={tileValue02} />
          <Tile tileValue={tileValue03} />
          <Tile tileValue={tileValue10} />
          <Tile tileValue={tileValue11} />
          <Tile tileValue={tileValue12} />
          <Tile tileValue={tileValue13} />
          <Tile tileValue={tileValue20} />
          <Tile tileValue={tileValue21} />
          <Tile tileValue={tileValue22} />
          <Tile tileValue={tileValue23} />
          <Tile tileValue={tileValue30} />
          <Tile tileValue={tileValue31} />
          <Tile tileValue={tileValue32} />
          <Tile tileValue={tileValue33} />
        </div>
      )}
    </AnimatePresence>
  );
}

export default TileSurface;
