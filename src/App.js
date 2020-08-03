import React from "react";
import { Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import "./App.css";
import "./tailwind.css";

import PlayingSurface from "./PlayingSurface";
import Title from "./Title";
import Button from "./Button";
import HighScore from "./HighScore";

function App() {
  return (
    <div>
      <Route path="/" exact>
        <div className="bg-gray-200 w-screen h-screen flex flex-col flex-no-wrap items-center justify-around mb-2">
          <Title />
          <Link to='/play'>
            <Button buttonText={"New Game"}/>
          </Link>
          <Button buttonText={"Leaderboard"} />
          <Button buttonText={"How to?"} />
          <HighScore />
        </div>
      </Route>
      <Route path="/play">
        <PlayingSurface />
      </Route>
    </div>
  );
}

export default App;
