import React from 'react'

function HighScore( {highScore, highScoreUsername} ) {
  return (
    <div className="flex flex-col flex-no-wrap w-3/4 bg-gray-600 text-gray-200 p-8 rounded-lg text-3xl font-bold shadow-lg">
      <div>
        <div className="text-lg text-center">High Score:</div>
      </div>
      <div className="flex flex-row flex-no-wrap justify-around">
        <div className="">{highScoreUsername}: </div>
        <div>{highScore}</div>
      </div>
    </div>
  );
}

export default HighScore
