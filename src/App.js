import React from "react";
import "./App.css";
import PlayingSurface from "./PlayingSurface";
import "./tailwind.css";
import Title from './Title'
import Button from './Button'
import HighScore from "./HighScore";

function App() {
  return (
    <div className="bg-gray-200 w-screen h-screen flex flex-col flex-no-wrap items-center justify-around mb-2">
      <Title />
      <Button buttonText={"New Game"} />
      <Button buttonText={"Leaderboard"} />
      <Button buttonText={"How to?"} />
      <HighScore />

      {/* <PlayingSurface /> */}
    </div>
  );
}

export default App;
