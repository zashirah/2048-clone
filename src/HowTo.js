import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

function HowTo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: 0 }}
    >
      <h1 className="font-bold text-3xl text-center pb-4">Intructions</h1>
      <p>
        Use the arrow keys (on desktop) or swipe (on mobile) to move the tiles.
        When two tiles with the same number touch, they merge into one tile.
      </p>
      <br />
      <p>
        The goal of the game is to merge tiles until you get to the 2048 tile.
      </p>
      <img src="src/images/HowTo-Picture1.jpg" alt="How to play 2048" />
    </motion.div>
  );
}

export default HowTo
