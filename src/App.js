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
import CurrentScore from "./CurrentScore";

function App() {
  const [leaderboardData, updateLeaderboardData] = useState([]);
  const [highScore, updateHighScore] = useState(0);
  const [highScoreUsername, updateHighScoreUsername] = useState("");

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
      updateLeaderboardData(data.data.records);
      updateHighScore(data.data.records[0].fields.score);
      updateHighScoreUsername(data.data.records[0].fields.username);
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
          <HighScore
            highScore={highScore}
            highScoreUsername={highScoreUsername}
          />
        </div>
      </Route>
      <Route path="/play">
        <div className="w-screen  h-screen flex flex-col flex-no-wrap items-center sm:justify-around md:justify-evenly mb-2">
          <Title />
          <div className="flex flex-row flex-no-wrap m-4 justify-around">
            <div className="hidden md:flex md:flex-col md:flex-no-wrap md:w-1/2 md:p-4 lg:w-1/3">
              <h2 className="text-center text-4xl font-bold">Leaderboard</h2>
              <Leaderboard data={leaderboardData} />
            </div>
            {/* <HighScoreSmall />
          <HighScoreSmall /> */}
            <div className="flex flex-col flex-no-wrap items-center sm:justify-around lg:justify-start">
              <PlayingSurface />
              <HighScore
                highScore={highScore}
                highScoreUsername={highScoreUsername}
              />
            </div>
            <div className="w-1/3 hidden lg:flex p-4">
              <HowTo />
            </div>
          </div>
        </div>
      </Route>
      <Route path="/leaderboard">
        <div className="w-screen h-screen flex flex-col flex-no-wrap items-center py-4 mb-2">
          <Title />
          <Leaderboard data={leaderboardData} />
        </div>
      </Route>
      <Route path="/how-to">
        <div className="w-screen h-screen flex flex-col flex-no-wrap items-center py-4 mb-2">
          <Title />
          <HowTo />
        </div>
      </Route>
    </div>
  );
}

export default App;
