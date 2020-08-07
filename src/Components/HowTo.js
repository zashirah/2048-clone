import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import picture1 from "../images/HowTo-Picture1.png";
import picture2 from "../images/HowTo-Picture2.png"

function HowTo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: 0 }}
      className="flex flex-col flex-no-wrap items-center"
    >
      <h1 className="font-bold text-3xl text-center pb-4 mx-4">Intructions</h1>
      <p className="mx-16">
        Use the arrow keys (on desktop) or swipe (on mobile) to move the tiles.
        When two tiles with the same number touch, they merge into one tile.
      </p>
      <img
        src={picture1}
        alt="How to play 2048 - slide the tiles to combine them"
        className="w-1/3 mt-4"
      />
      <br />
      <p className="mx-16">
        The goal of the game is to merge tiles until you get to the 2048 tile.
      </p>
      <img
        src={picture2}
        alt="How to play 2048 - get to the 2048 tile"
        className="w-1/3 mt-4"
      />
    </motion.div>
  );
}

export default HowTo
