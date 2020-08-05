import React from "react";

function Leaderboard({ data }) {
  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            {/* <th className="py-2">rank</th> */}
            <th className="px-4 py-2">name</th>
            <th className="px-4 py-2">score</th>
            <th className="px-4 py-2">date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.fields.ID}>
              {/* <td className="border px-4 py-2 font-bold"></td> */}
              <td className="border px-4 py-2">{row.fields.username}</td>
              <td className="border px-4 py-2">{row.fields.score}</td>
              <td className="border px-4 py-2">{row.fields.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
