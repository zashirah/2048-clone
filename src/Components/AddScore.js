import React from 'react'
import { AnimatePresence, motion } from "framer-motion";

function AddScore({ username, date, updateLeaderboard, updateUsername, score, gameOver }) {
  return (
    <AnimatePresence>
      {gameOver && (
        <motion.div
          initial={{
            opacity: 0,
            y: 500,
        }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1 }}
          exit={{
            opacity: 0,
            y: 500,
          }}
          // className="fixed left-auto top-auto "
          style={{
            position: "fixed",
            left: "auto",
            top: "auto",
            transform: "translate3d(-50%, 0, 0)",
            backgroundColor: "white",
            padding: 0,
            margin: 0,
            borderRadius: '.5rem',
          }}
        >
          <motion.form
            className="flex flex-col flex-no-wrap bg-blue-500 bg-opacity-50 text-lg font-bold text-gray-900 rounded-lg justify-center items-center shadow-lg"
            onSubmit={(e) => updateLeaderboard(e, date)}
          >
            <div className="p-2">Congrats! Your score was: {score}</div>
            <label className="p-2" htmlFor="username">
              Input your Username (4 char max)
            </label>
            <input
              className="text-center"
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => updateUsername(e.target.value.substr(0, 4))}
            />
            {/* <div className="p-2">{date}</div> */}
            <label htmlFor="submitButton"></label>
            <input
              className="p-2 m-2 rounded-md shadow-md"
              type="submit"
              name="submitButton"
              id="submitButton"
            />
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AddScore
