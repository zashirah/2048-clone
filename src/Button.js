import React from "react";

function Button({ buttonText, hidden, topSpacing, bottomSpacing }) {
  return (
    <div>
      <button className={`${hidden} ${topSpacing} ${bottomSpacing} w-48 bg-blue-600 rounded-lg text-gray-200 text-2xl py-4 font-bold shadow-lg hover:shadow-2xl hover:bg-blue-700`}>
        {buttonText}
      </button>
    </div>
  );
}

export default Button;
