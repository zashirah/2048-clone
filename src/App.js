import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";

import "./App.css";
import "./tailwind.css";

import PlayingSurface from "./PlayingSurface";
import Title from "./Title";
import Button from "./Button";
import HighScore from "./HighScore";
import Leaderboard from "./Leaderboard";
import HowTo from "./HowTo";
import TitleSmall from "./TitleSmall";
import HighScoreSmall from "./HighScoreSmall";
import Axios from "axios";



function App() {
  const [leaderboardData, updateLeaderboardData] = useState([])
  const [highScore, updateHighScore] = useState(0)

  useEffect(() => {
    const apiCall = async () => {
      const data = await Axios.get(
        "https://api.airtable.com/v0/appzTXHo32UrzQAzt/Leaderboard?maxRecords=10&view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
        }
      );
      console.log(data.data.records[0].fields.score);
      updateLeaderboardData(data.data.records)
      updateHighScore(data.data.records[0].fields.score)
      
    };
    apiCall();
  }, []);

  
  return (
    <div className="w-screen h-screen bg-gray-100">
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
          <HighScore highScore={highScore} />
        </div>
      </Route>
      <Route path="/play">
        <div className="flex flex-row flex-no-wrap justify-around">
          <Title />
          {/* <HighScoreSmall />
          <HighScoreSmall /> */}
        </div>
        <PlayingSurface highScore={highScore} />
      </Route>
      <Route path="/leaderboard">
        <div className="flex flex-col flex-no-wrap justify-center items-center">
          <Title />
          <Leaderboard data={leaderboardData} />
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
