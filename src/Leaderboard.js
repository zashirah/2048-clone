import React from "react";

function Leaderboard({ data }) {
  return (
    <div>
      <table className={`table-auto flex flex-col items-center`}>
        <thead>
          <tr>
            {/* <th className="py-2">rank</th> */}
            <th className="sm:px-4 sm:py-2 text-center lg:px-8 lg:py-4 lg:text-2xl">
              Name
            </th>
            <th className="px-4 py-2 text-center lg:text-2xl">Score</th>
            <th className="px-4 py-2 w-48 text-center lg:text-2xl">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.fields.ID}>
              {/* <td className="border px-4 py-2 font-bold"></td> */}
              <td className="border sm:px-4 sm:py-2 text-center lg:px-8 lg:py-4 lg:text-2xl">
                {row.fields.username}
              </td>
              <td className="border sm:px-4 sm:py-2 text-center lg:text-2xl">
                {row.fields.score}
              </td>
              <td className="border sm:px-4 sm:py-2 w-48 text-center lg:text-2xl">
                {row.fields.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
