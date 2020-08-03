import React from "react";
import { Route, Link } from "react-router-dom";

import "./App.css";
import "./tailwind.css";

import PlayingSurface from "./PlayingSurface";
import Title from "./Title";
import Button from "./Button";
import HighScore from "./HighScore";
import Leaderboard from "./Leaderboard";
import HowTo from "./HowTo";
import TitleSmall from "./TitleSmall"

function App() {
  return (
    <div className="bg-gray-200 w-screen h-screen">
      <Route path="/" exact>
        <div className="w-screen h-screen flex flex-col flex-no-wrap items-center justify-around mb-2">
          <Title />
          <Link to="/play">
            <Button buttonText={"New Game"} />
          </Link>
          <Link to="/leaderboard">
            <Button buttonText={"Leaderboard"} />
          </Link>
          <Link to="/how-to">
            <Button buttonText={"How to?"} />
          </Link>
          <HighScore />
        </div>
      </Route>
      <Route path="/play">
        <TitleSmall />
        <PlayingSurface />
      </Route>
      <Route path="/leaderboard">
        <div className="flex flex-col flex-no-wrap justify-center items-center">
          <Title />
          <Leaderboard />
        </div>
      </Route>
      <Route path="/how-to">
        <div className="flex flex-col flex-no-wrap justify-center items-center">
          <Title />
          <HowTo />
        </div>
      </Route>
    </div>
  );
}

export default App;
