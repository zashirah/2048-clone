import React, { useState, useEffect } from "react";
import "./PlayingSurface.css";
import moveTiles from "./moveTiles";
import Tile from "./Tile.js";

function PlayingSurface() {
  const [
    {
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
    },
    setTileValues,
  ] = useState({
    tileValue00: 2,
    tileValue01: 2,
    tileValue02: 2,
    tileValue03: 2,
    tileValue10: 2,
    tileValue11: 2,
    tileValue12: 2,
    tileValue13: 2,
    tileValue20: 2,
    tileValue21: 2,
    tileValue22: 2,
    tileValue23: 2,
    tileValue30: 2,
    tileValue31: 2,
    tileValue32: 2,
    tileValue33: 2,
  });

  useEffect(() => {
    const stateArray = [
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
    ];
    const empties =
      stateArray.length -
      stateArray.filter((element) => element !== null).length;
    const randInt = Math.floor(Math.random() * empties);
    console.log(randInt);
  }, [
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
  ]);

  const runUps = () => {
    moveTiles(
      tileValue00,
      tileValue10,
      tileValue20,
      tileValue30,
      updateTileValue00,
      // setTileValues(prevState => ({...prevState, tileValue00: })),
      updateTileValue10,
      updateTileValue20,
      updateTileValue30
    );
    moveTiles(
      tileValue01,
      tileValue11,
      tileValue21,
      tileValue31,
      updateTileValue01,
      updateTileValue11,
      updateTileValue21,
      updateTileValue31
    );
    moveTiles(
      tileValue02,
      tileValue12,
      tileValue22,
      tileValue32,
      updateTileValue02,
      updateTileValue12,
      updateTileValue22,
      updateTileValue32
    );
    moveTiles(
      tileValue03,
      tileValue13,
      tileValue23,
      tileValue33,
      updateTileValue03,
      updateTileValue13,
      updateTileValue23,
      updateTileValue33
    );
  };

  const runDowns = () => {
    moveTiles(
      tileValue30,
      tileValue20,
      tileValue10,
      tileValue00,
      updateTileValue30,
      updateTileValue20,
      updateTileValue10,
      updateTileValue00
    );
    moveTiles(
      tileValue31,
      tileValue21,
      tileValue11,
      tileValue01,
      updateTileValue31,
      updateTileValue21,
      updateTileValue11,
      updateTileValue01
    );
    moveTiles(
      tileValue32,
      tileValue22,
      tileValue12,
      tileValue02,
      updateTileValue32,
      updateTileValue22,
      updateTileValue12,
      updateTileValue02
    );
    moveTiles(
      tileValue33,
      tileValue23,
      tileValue13,
      tileValue03,
      updateTileValue33,
      updateTileValue23,
      updateTileValue13,
      updateTileValue03
    );
  };

  const runLefts = () => {
    moveTiles(
      tileValue10,
      tileValue11,
      tileValue12,
      tileValue13,
      updateTileValue10,
      updateTileValue11,
      updateTileValue12,
      updateTileValue13
    );
    moveTiles(
      tileValue00,
      tileValue01,
      tileValue02,
      tileValue03,
      updateTileValue00,
      updateTileValue01,
      updateTileValue02,
      updateTileValue03
    );
    moveTiles(
      tileValue20,
      tileValue21,
      tileValue22,
      tileValue23,
      updateTileValue20,
      updateTileValue21,
      updateTileValue22,
      updateTileValue23
    );
    moveTiles(
      tileValue30,
      tileValue31,
      tileValue32,
      tileValue33,
      updateTileValue30,
      updateTileValue31,
      updateTileValue32,
      updateTileValue33
    );
  };

  const runRights = () => {
    moveTiles(
      tileValue13,
      tileValue12,
      tileValue11,
      tileValue10,
      updateTileValue13,
      updateTileValue12,
      updateTileValue11,
      updateTileValue10
    );
    moveTiles(
      tileValue03,
      tileValue02,
      tileValue01,
      tileValue00,
      updateTileValue03,
      updateTileValue02,
      updateTileValue01,
      updateTileValue00
    );
    moveTiles(
      tileValue23,
      tileValue22,
      tileValue21,
      tileValue20,
      updateTileValue23,
      updateTileValue22,
      updateTileValue21,
      updateTileValue20
    );
    moveTiles(
      tileValue33,
      tileValue32,
      tileValue31,
      tileValue30,
      updateTileValue33,
      updateTileValue32,
      updateTileValue31,
      updateTileValue30
    );
  };

  return (
    <div className="flex flex-col flex-no-wrap items-center">
      <button onClick={() => runUps()}>Up</button>
      <button onClick={() => runDowns()}>Down</button>
      <button onClick={() => runLefts()}>Left</button>
      <button onClick={() => runRights()}>Right</button>
      <div className="w-64 bg-gray-400 flex flex-row flex-wrap rounded-lg">
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
      <div></div>
    </div>
  );
}
export default PlayingSurface;
