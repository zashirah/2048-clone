import React, { useState, useEffect } from "react";
import "./PlayingSurface.css";
import moveTiles from "./moveTiles2";
import Tile from "./Tile.js";
import HighScoreSmall from "./HighScoreSmall";
import Button from "./Button";
import { Route, Link } from "react-router-dom";
import Axios from "axios";

function PlayingSurface() {
  // const [tileValue00, updateTileValue00] = useState(null);
  // const [tileValue01, updateTileValue01] = useState(null);
  // const [tileValue02, updateTileValue02] = useState(null);
  // const [tileValue03, updateTileValue03] = useState(null);
  // const [tileValue10, updateTileValue10] = useState(null);
  // const [tileValue11, updateTileValue11] = useState(null);
  // const [tileValue12, updateTileValue12] = useState(null);
  // const [tileValue13, updateTileValue13] = useState(null);
  // const [tileValue20, updateTileValue20] = useState(null);
  // const [tileValue21, updateTileValue21] = useState(null);
  // const [tileValue22, updateTileValue22] = useState(null);
  // const [tileValue23, updateTileValue23] = useState(null);
  // const [tileValue30, updateTileValue30] = useState(null);
  // const [tileValue31, updateTileValue31] = useState(null);
  // const [tileValue32, updateTileValue32] = useState(null);
  // const [tileValue33, updateTileValue33] = useState(null);
  const [tileValue00, updateTileValue00] = useState(2);
  const [tileValue01, updateTileValue01] = useState(4);
  const [tileValue02, updateTileValue02] = useState(8);
  const [tileValue03, updateTileValue03] = useState(16);
  const [tileValue10, updateTileValue10] = useState(32);
  const [tileValue11, updateTileValue11] = useState(64);
  const [tileValue12, updateTileValue12] = useState(128);
  const [tileValue13, updateTileValue13] = useState(256);
  const [tileValue20, updateTileValue20] = useState(512);
  const [tileValue21, updateTileValue21] = useState(1024);
  const [tileValue22, updateTileValue22] = useState(2048);
  const [tileValue23, updateTileValue23] = useState(5096);
  const [tileValue30, updateTileValue30] = useState(10192);
  const [tileValue31, updateTileValue31] = useState(20384);
  const [tileValue32, updateTileValue32] = useState(40768);
  const [tileValue33, updateTileValue33] = useState(null);

  const [move, setMove] = useState(false);

  const [score, updateScore] = useState(0);

  const [moveUp, updateMoveUp] = useState(false);
  const [moveDown, updateMoveDown] = useState(false);
  const [moveLeft, updateMoveLeft] = useState(false);
  const [moveRight, updateMoveRight] = useState(false);

  const [checkGameOver, setCheckGameOver] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [username, updateUsername] = useState("");

  // move up
  useEffect(() => {
    const check1 = moveTiles(
      tileValue00,
      tileValue10,
      tileValue20,
      tileValue30,
      updateTileValue00,
      updateTileValue10,
      updateTileValue20,
      updateTileValue30,
      updateScore
    );
    const check2 = moveTiles(
      tileValue01,
      tileValue11,
      tileValue21,
      tileValue31,
      updateTileValue01,
      updateTileValue11,
      updateTileValue21,
      updateTileValue31,
      updateScore
    );
    const check3 = moveTiles(
      tileValue02,
      tileValue12,
      tileValue22,
      tileValue32,
      updateTileValue02,
      updateTileValue12,
      updateTileValue22,
      updateTileValue32,
      updateScore
    );
    const check4 = moveTiles(
      tileValue03,
      tileValue13,
      tileValue23,
      tileValue33,
      updateTileValue03,
      updateTileValue13,
      updateTileValue23,
      updateTileValue33,
      updateScore
    );
    if (
      check1 !== "no-move" ||
      check2 !== "no-move" ||
      check3 !== "no-move" ||
      check4 !== "no-move"
    ) {
      // setMove(!move);
      setMove((m) => !m);
    }
  }, [moveUp]);

  // move down
  useEffect(() => {
    const check1 = moveTiles(
      tileValue30,
      tileValue20,
      tileValue10,
      tileValue00,
      updateTileValue30,
      updateTileValue20,
      updateTileValue10,
      updateTileValue00,
      updateScore
    );
    const check2 = moveTiles(
      tileValue31,
      tileValue21,
      tileValue11,
      tileValue01,
      updateTileValue31,
      updateTileValue21,
      updateTileValue11,
      updateTileValue01,
      updateScore
    );
    const check3 = moveTiles(
      tileValue32,
      tileValue22,
      tileValue12,
      tileValue02,
      updateTileValue32,
      updateTileValue22,
      updateTileValue12,
      updateTileValue02,
      updateScore
    );
    const check4 = moveTiles(
      tileValue33,
      tileValue23,
      tileValue13,
      tileValue03,
      updateTileValue33,
      updateTileValue23,
      updateTileValue13,
      updateTileValue03,
      updateScore
    );
    if (
      check1 !== "no-move" ||
      check2 !== "no-move" ||
      check3 !== "no-move" ||
      check4 !== "no-move"
    ) {
      // setMove(!move);
      setMove((m) => !m);
    }
  }, [moveDown]);

  // move left
  useEffect(() => {
    const check1 = moveTiles(
      tileValue10,
      tileValue11,
      tileValue12,
      tileValue13,
      updateTileValue10,
      updateTileValue11,
      updateTileValue12,
      updateTileValue13,
      updateScore
    );
    const check2 = moveTiles(
      tileValue00,
      tileValue01,
      tileValue02,
      tileValue03,
      updateTileValue00,
      updateTileValue01,
      updateTileValue02,
      updateTileValue03,
      updateScore
    );
    const check3 = moveTiles(
      tileValue20,
      tileValue21,
      tileValue22,
      tileValue23,
      updateTileValue20,
      updateTileValue21,
      updateTileValue22,
      updateTileValue23,
      updateScore
    );
    const check4 = moveTiles(
      tileValue30,
      tileValue31,
      tileValue32,
      tileValue33,
      updateTileValue30,
      updateTileValue31,
      updateTileValue32,
      updateTileValue33,
      updateScore
    );
    if (
      check1 !== "no-move" ||
      check2 !== "no-move" ||
      check3 !== "no-move" ||
      check4 !== "no-move"
    ) {
      // setMove(!move);
      setMove((m) => !m);
    }
  }, [moveLeft]);

  // move right
  useEffect(() => {
    const check1 = moveTiles(
      tileValue13,
      tileValue12,
      tileValue11,
      tileValue10,
      updateTileValue13,
      updateTileValue12,
      updateTileValue11,
      updateTileValue10,
      updateScore
    );
    const check2 = moveTiles(
      tileValue03,
      tileValue02,
      tileValue01,
      tileValue00,
      updateTileValue03,
      updateTileValue02,
      updateTileValue01,
      updateTileValue00,
      updateScore
    );
    const check3 = moveTiles(
      tileValue23,
      tileValue22,
      tileValue21,
      tileValue20,
      updateTileValue23,
      updateTileValue22,
      updateTileValue21,
      updateTileValue20,
      updateScore
    );
    const check4 = moveTiles(
      tileValue33,
      tileValue32,
      tileValue31,
      tileValue30,
      updateTileValue33,
      updateTileValue32,
      updateTileValue31,
      updateTileValue30,
      updateScore
    );
    if (
      check1 !== "no-move" ||
      check2 !== "no-move" ||
      check3 !== "no-move" ||
      check4 !== "no-move"
    ) {
      setMove((m) => !m);
      // setMove(!move);
    }
  }, [moveRight]);

  useEffect(() => {
    const leftListener = (e) => {
      if (e.key === "ArrowLeft") {
        updateMoveLeft((prevState) => !prevState);
      }
    };
    const rightListener = (e) => {
      if (e.key === "ArrowRight") {
        updateMoveRight((prevState) => !prevState);
      }
    };
    const upListener = (e) => {
      if (e.key === "ArrowUp") {
        updateMoveUp((prevState) => !prevState);
      }
    };
    const downListener = (e) => {
      if (e.key === "ArrowDown") {
        updateMoveDown((prevState) => !prevState);
      }
    };

    window.addEventListener("keydown", leftListener);
    window.addEventListener("keydown", rightListener);
    window.addEventListener("keydown", upListener);
    window.addEventListener("keydown", downListener);

    return () => {
      window.removeEventListener("keydown", leftListener);
      window.removeEventListener("keydown", rightListener);
      window.removeEventListener("keydown", upListener);
      window.removeEventListener("keydown", downListener);
    };
  }, []);

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
    const rand2Or4 = Math.floor(Math.random() * 2 + 1) * 2;
    let i = 0;

    if (!tileValue00 && i <= randInt) {
      if (i === randInt) {
        updateTileValue00(rand2Or4);
      }
      i++;
    }
    if (!tileValue01 && i <= randInt) {
      if (i === randInt) {
        updateTileValue01(rand2Or4);
      }
      i++;
    }
    if (!tileValue02 && i <= randInt) {
      if (i === randInt) {
        updateTileValue02(rand2Or4);
      }
      i++;
    }
    if (!tileValue03 && i <= randInt) {
      if (i === randInt) {
        updateTileValue03(rand2Or4);
      }
      i++;
    }
    if (!tileValue10 && i <= randInt) {
      if (i === randInt) {
        updateTileValue10(rand2Or4);
      }
      i++;
    }
    if (!tileValue11 && i <= randInt) {
      if (i === randInt) {
        updateTileValue11(rand2Or4);
      }
      i++;
    }
    if (!tileValue12 && i <= randInt) {
      if (i === randInt) {
        updateTileValue12(rand2Or4);
      }
      i++;
    }
    if (!tileValue13 && i <= randInt) {
      if (i === randInt) {
        updateTileValue13(rand2Or4);
        // return;
      }
      i++;
    }
    if (!tileValue20 && i <= randInt) {
      if (i === randInt) {
        updateTileValue20(rand2Or4);
      }
      i++;
    }
    if (!tileValue21 && i <= randInt) {
      if (i === randInt) {
        updateTileValue21(rand2Or4);
      }
      i++;
    }
    if (!tileValue22 && i <= randInt) {
      if (i === randInt) {
        updateTileValue22(rand2Or4);
      }
      i++;
    }
    if (!tileValue23 && i <= randInt) {
      if (i === randInt) {
        updateTileValue23(rand2Or4);
      }
      i++;
    }
    if (!tileValue30 && i <= randInt) {
      if (i === randInt) {
        updateTileValue30(rand2Or4);
      }
      i++;
    }
    if (!tileValue31 && i <= randInt) {
      if (i === randInt) {
        updateTileValue31(rand2Or4);
      }
      i++;
    }
    if (!tileValue32 && i <= randInt) {
      if (i === randInt) {
        updateTileValue32(rand2Or4);
      }
      i++;
    }
    if (!tileValue33 && i <= randInt) {
      if (i === randInt) {
        updateTileValue33(rand2Or4);
      }
      i++;
    }
    if (empties <= 1) {
      setCheckGameOver((prevState) => !prevState);
    }
  }, [move]);

  useEffect(() => {
    if (
      tileValue00 &&
      tileValue01 &&
      tileValue02 &&
      tileValue03 &&
      tileValue10 &&
      tileValue11 &&
      tileValue12 &&
      tileValue10 &&
      tileValue21 &&
      tileValue22 &&
      tileValue23 &&
      tileValue30 &&
      tileValue31 &&
      tileValue32 &&
      tileValue33 &&
      tileValue00 !== tileValue01 &&
      tileValue00 !== tileValue10 &&
      tileValue01 !== tileValue02 &&
      tileValue01 !== tileValue11 &&
      tileValue02 !== tileValue03 &&
      tileValue02 !== tileValue12 &&
      tileValue03 !== tileValue13 &&
      tileValue10 !== tileValue20 &&
      tileValue10 !== tileValue11 &&
      tileValue11 !== tileValue12 &&
      tileValue11 !== tileValue21 &&
      tileValue12 !== tileValue13 &&
      tileValue12 !== tileValue22 &&
      tileValue13 !== tileValue23 &&
      tileValue20 !== tileValue21 &&
      tileValue20 !== tileValue30 &&
      tileValue21 !== tileValue22 &&
      tileValue21 !== tileValue31 &&
      tileValue22 !== tileValue23 &&
      tileValue22 !== tileValue32 &&
      tileValue23 !== tileValue33 &&
      tileValue30 !== tileValue31 &&
      tileValue31 !== tileValue32 &&
      tileValue32 !== tileValue33
    ) {
      console.log("game over. you lose");
      setGameOver(true);
    }
  }, [checkGameOver]);

  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const updateLeaderboard = async (e, date) => {
    e.preventDefault();
    await Axios.post(
      "https://api.airtable.com/v0/appzTXHo32UrzQAzt/Leaderboard",
      {
        fields: {
          username: username,
          score: score,
          date: date,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div className="flex flex-col flex-no-wrap items-center">
      <HighScoreSmall score={score} />
      <div className="w-64 h-64 bg-gray-100 bg-opacity-75 flex flex-row flex-wrap rounded-lg justify-around items-center border border-gray-900">
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
      {/* <Button hidden={!gameOver && "hidden"} buttonText="Game Over" /> */}
      {/* <div className={!gameOver && "hidden"}> */}
      <div>
        <form
          className="flex flex-col flex-no-wrap p-4 m-4 bg-blue-500 bg-opacity-50 text-lg font-bold text-gray-900 rounded-lg justify-center items-center shadow-lg"
          onSubmit={(e) => updateLeaderboard(e, date)}
        >
          <div className="p-2">Congrats! Your score was: {score}</div>
          <label className="p-2" htmlFor="username">
            Input your Username (4 char max)
          </label>
          <input
            className="text-center"
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => updateUsername(e.target.value.substr(0, 4))}
          />
          {/* <div className="p-2">{date}</div> */}
          <label htmlFor="submitButton"></label>
          <input
            className="p-2 m-2 rounded-md shadow-md"
            type="submit"
            name="submitButton"
            id="submitButton"
          />
        </form>
      </div>
    </div>
  );
}
export default PlayingSurface;
