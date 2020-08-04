import React, { useState, useEffect } from "react";
import "./PlayingSurface.css";
import moveTiles from "./moveTiles";
import Tile from "./Tile.js";

function PlayingSurface() {
  const [tileValue00, updateTileValue00] = useState(null);
  const [tileValue01, updateTileValue01] = useState(null);
  const [tileValue02, updateTileValue02] = useState(null);
  const [tileValue03, updateTileValue03] = useState(null);
  const [tileValue10, updateTileValue10] = useState(null);
  const [tileValue11, updateTileValue11] = useState(null);
  const [tileValue12, updateTileValue12] = useState(null);
  const [tileValue13, updateTileValue13] = useState(null);
  const [tileValue20, updateTileValue20] = useState(2);
  const [tileValue21, updateTileValue21] = useState(null);
  const [tileValue22, updateTileValue22] = useState(null);
  const [tileValue23, updateTileValue23] = useState(null);
  const [tileValue30, updateTileValue30] = useState(null);
  const [tileValue31, updateTileValue31] = useState(null);
  const [tileValue32, updateTileValue32] = useState(null);
  const [tileValue33, updateTileValue33] = useState(null);

  const [move, setMove] = useState(false)

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
    console.log("start");
    const rand2Or4 = Math.floor(Math.random() * 2 + 1) * 2;
    // console.log(rand2Or4);
    let i = 0;
    if (!tileValue00 && i <= randInt) {
      console.log(0);
      console.log(tileValue00);
      console.log(randInt);
      console.log(i);
      console.log(randInt === i);
      if (i === randInt) {
        updateTileValue00(rand2Or4);
        // return;
      }
      i++;
    }
    if (!tileValue01 && i <= randInt) {
      console.log(1);
      console.log(tileValue01);
      console.log(randInt);
      console.log(i);
      if (i === randInt) {
        updateTileValue01(rand2Or4);
        // return;
      }
      i++;
    }
    if (!tileValue02 && i <= randInt) {
      console.log(2);
      console.log(tileValue02);
      console.log(randInt);
      console.log(i);
      console.log(i === randInt);
      if (i === randInt) {
        updateTileValue02(rand2Or4);
        // return;
      }
      i++;
    }
    if (!tileValue03 && i <= randInt) {
      console.log(3);
      console.log(tileValue03);
      console.log(randInt);
      console.log(i);
      if (i === randInt) {
        updateTileValue03(rand2Or4);
        // return;
      }
      i++;
    }
    if (!tileValue10 && i <= randInt) {
      console.log(4);
      console.log(tileValue10);
      console.log(randInt);
      console.log(i);
      if (i === randInt) {
        updateTileValue10(rand2Or4);
        // return;
      }
      i++;
    }
    if (!tileValue11 && i <= randInt) {
      console.log(5);
      console.log(tileValue11);
      console.log(randInt);
      console.log(i);
      if (i === randInt) {
        updateTileValue11(rand2Or4);
        // return;
      }
      i++;
    }
    if (!tileValue12 && i <= randInt) {
      console.log(6);
      console.log(tileValue12);
      console.log(randInt);
      console.log(i);
      if (i === randInt) {
        updateTileValue12(rand2Or4);
        // return;
      }
      i++;
    }
    if (!tileValue13 && i <= randInt) {
      console.log(7);
      console.log(tileValue13);
      console.log(randInt);
      console.log(i);
      if (i === randInt) {
        updateTileValue13(rand2Or4);
        // return;
      }
      i++;
    }
    if (!tileValue20 && i <= randInt) {
      console.log(8);
      console.log(tileValue20);
      console.log(randInt);
      console.log(i);
      if (i === randInt) {
        updateTileValue20(rand2Or4);
        // return;
      }
      i++;
    }
    if (!tileValue21 && i <= randInt) {
      console.log(9);
      console.log(tileValue21);
      console.log(randInt);
      console.log(i);
      if (i === randInt) {
        updateTileValue21(rand2Or4);
        // return;
      }
      i++;
    }
    if (!tileValue22 && i <= randInt) {
      console.log(10);
      console.log(tileValue22);
      console.log(randInt);
      console.log(i);
      if (i === randInt) {
        updateTileValue22(rand2Or4);
        // return;
      }
      i++;
    }
    if (!tileValue23 && i <= randInt) {
      console.log(11);
      console.log(tileValue23);
      console.log(randInt);
      console.log(i);
      if (i === randInt) {
        updateTileValue23(rand2Or4);
        // return;
      }
      i++;
    }
    if (!tileValue30 && i <= randInt) {
      console.log(12);
      console.log(tileValue30);
      console.log(randInt);
      console.log(i);
      if (i === randInt) {
        updateTileValue30(rand2Or4);
        // return;
      }
      i++;
    }
    if (!tileValue31 && i <= randInt) {
      console.log(13);
      console.log(tileValue31);
      console.log(randInt);
      console.log(i);
      if (i === randInt) {
        updateTileValue31(rand2Or4);
        // return;
      }
      i++;
    }
    if (!tileValue32 && i <= randInt) {
      console.log(14);
      console.log(tileValue32);
      console.log(randInt);
      console.log(i);
      if (i === randInt) {
        updateTileValue32(rand2Or4);
        // return;
      }
      i++;
    }
    if (!tileValue33 && i <= randInt) {
      console.log(15);
      console.log(tileValue33);
      console.log(randInt);
      console.log(i);
      if (i === randInt) {
        updateTileValue33(rand2Or4);
        // return;
      }
      i++;
    }
  console.log('over')
  }, [move]);

  const runUps = () => {
    moveTiles(
      tileValue00,
      tileValue10,
      tileValue20,
      tileValue30,
      updateTileValue00,
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
    setMove(!move)
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
    setMove(!move);
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
    setMove(!move);
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
    setMove(!move);
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
