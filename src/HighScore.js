import React from 'react'

function HighScore( {highScore} ) {
  return (
    <div className="flex flex-row flex-no-wrap justify-around w-3/4 bg-gray-600 text-gray-200 p-8 rounded-lg text-3xl font-bold shadow-lg">
      <div className="">Zach: </div>
      <div>{highScore}</div>
    </div>
  );
}

export default HighScore
