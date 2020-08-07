import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function _2048Celebration({ hit2048Tile, updateHit2048Tile }) {
  return (
    <AnimatePresence>
      {hit2048Tile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{
            duration: 1,
            times: 4,
          }}
          exit={{ opacity: 0 }}
          className={`bg-teal-700 border border-gray-800 h-64 w-64 rounded-md text-gray-900 font-semibold text-2xl text-center fixed left-auto py-16`}
          value="2048"
          onClick={() => updateHit2048Tile(false)}
        >
          Congrats! You got to the 2048. Click the tile to continue playing.
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default _2048Celebration
