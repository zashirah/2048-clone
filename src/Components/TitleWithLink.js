import React from "react";
import { Link } from "react-router-dom";

function TitleWithLink() {
  return (
    <Link to='/' className="w-3/4">
      <div className="bg-gray-600 border border-gray-400 rounded-lg text-center text-gray-200 text-5xl font-extrabold shadow-lg p-2">
        2048
      </div>
    </Link>
  );
}

export default TitleWithLink;
