import React from 'react'

function HighScoreSmall({ highScore }) {

  return (
    <div>
      <div className="bg-gray-600 border border-gray-400 rounded-lg text-center text-gray-200 text-2xl font-bold shadow-lg px-2 py-4 mt-8">
        {/* {highScore[0].fields.score} */}
        {/* {console.log(highScore)} */}
      </div>
    </div>
  );
}

export default HighScoreSmall
