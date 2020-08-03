import React from "react";
import "./App.css";
import PlayingSurface from "./PlayingSurface";
import "./tailwind.css";
import Title from './Title'
import Button from './Button'

function App() {
  return (
    <div className="bg-gray-200 w-screen h-screen flex flex-col flex-no-wrap items-center justify-around">
      <Title />
      <Button buttonText={"New Game"} />
      <Button buttonText={"Leaderboard"} />
      <Button buttonText={"How to?"} />

      {/* <PlayingSurface /> */}
    </div>
  );
}

export default App;
