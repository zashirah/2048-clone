import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";

import "./tailwind.css";

import PlayingSurface from "./PlayingSurface";
import Title from "./Title";
import TitleWithLink from "./TitleWithLink";
import Button from "./Button";
import HighScore from "./HighScore";
import Leaderboard from "./Leaderboard";
import HowTo from "./HowTo";
import Axios from "axios";
import { motion } from "framer-motion";

function App() {
  const [leaderboardData, updateLeaderboardData] = useState([]);
  const [highScore, updateHighScore] = useState(0);
  const [highScoreUsername, updateHighScoreUsername] = useState("");
  const [rerunLeaderboard, updateRerunLeaderboard] = useState(false);

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

      updateLeaderboardData(data.data.records);
      updateHighScore(data.data.records[0].fields.score);
      updateHighScoreUsername(data.data.records[0].fields.username);
    };
    apiCall();
  }, [rerunLeaderboard]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-screen h-screen bg-gray-100"
    >
      <div className="w-screen h-screen bg-gray-100">
        <Route path="/" exact>
          <div className="w-screen h-screen flex flex-col flex-no-wrap items-center py-16">
            <Title />
            <Link to="/play">
              <Button
                buttonText={"New Game"}
                topSpacing={"mt-6"}
                bottomSpacing={"mb-6"}
              />
            </Link>
            <Link to="/leaderboard">
              <Button
                buttonText={"Leaderboard"}
                topSpacing={"mt-6"}
                bottomSpacing={"mb-6"}
              />
            </Link>
            <Link to="/how-to">
              <Button
                buttonText={"How to?"}
                topSpacing={"mt-6"}
                bottomSpacing={"mb-6"}
              />
            </Link>
            <HighScore
              highScore={highScore}
              highScoreUsername={highScoreUsername}
            />
          </div>
        </Route>
        <Route path="/play">
          <div className="w-screen h-screen flex flex-col flex-no-wrap items-center sm:justify-around md:justify-evenly mb-2 pt-8">
            <TitleWithLink />
            <div className="flex flex-row flex-no-wrap m-4 justify-around">
              <div className="hidden md:flex md:flex-col md:flex-no-wrap md:w-1/2 md:p-4 lg:w-1/3">
                <h2 className="text-center text-4xl font-bold">Leaderboard</h2>
                <Leaderboard data={leaderboardData} />
              </div>
              <div className="flex flex-col flex-no-wrap items-center sm:justify-around lg:justify-start">
                <PlayingSurface
                  updateRerunLeaderboard={updateRerunLeaderboard}
                  rerunLeaderboard={rerunLeaderboard}
                />
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
            <TitleWithLink />
            <Leaderboard data={leaderboardData} />
          </div>
        </Route>
        <Route path="/how-to">
          <div className="w-screen h-screen flex flex-col flex-no-wrap items-center py-4 mb-2">
            <TitleWithLink />
            <HowTo />
          </div>
        </Route>
      </div>
    </motion.div>
  );
}

export default App;
