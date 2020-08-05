import React from "react";

function CurrentScore({ score }) {
  return (
    <div className="bg-gray-600 border border-gray-400 rounded-lg text-center text-gray-200 text-2xl font-bold shadow-lg px-2 py-4">
      <div>Current Score:</div>
      <div>
        {score}
        {/* {console.log(highScore)} */}
      </div>
    </div>
  );
}

export default CurrentScore;
