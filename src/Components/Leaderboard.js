import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Leaderboard({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: 0 }}
      className="border border-blue-800 rounded-lg bg-blue-300 bg-opacity-75 mt-4 pb-2"
    >
      <table className={`table-auto flex flex-col items-center`}>
        <thead>
          <tr>
            {/* <th className="py-2">rank</th> */}
            <th className="px-2 py-1 text-center lg:px-8 lg:py-4 lg:text-2xl">
              Name
            </th>
            <th className="px-2 py-1 text-center lg:text-2xl">Score</th>
            <th className="px-2 py-1 w-48 text-center lg:text-2xl">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.fields.ID}>
              {/* <td className="border px-4 py-2 font-bold"></td> */}
              <td className="border px-2 py-1 text-center lg:px-8 lg:py-4 lg:text-2xl">
                {row.fields.username}
              </td>
              <td className="border px-2 py-1 text-center lg:text-2xl">
                {row.fields.score}
              </td>
              <td className="border px-2 py-1 w-48 text-center lg:text-2xl">
                {row.fields.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

export default Leaderboard;
