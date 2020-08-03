import moveTiles from "./moveTiles.js";

const runUps = () => {
  moveTiles(
    tileValue00,
    tileValue10,
    tileValue20,
    tileValue30,
    updateTileValue00,
    updateTileValue10,
    updateTileValue20,
    updateTileValue30
  );
  moveTiles(
    tileValue01,
    tileValue11,
    tileValue21,
    tileValue31,
    updateTileValue01,
    updateTileValue11,
    updateTileValue21,
    updateTileValue31
  );
  moveTiles(
    tileValue02,
    tileValue12,
    tileValue22,
    tileValue32,
    updateTileValue02,
    updateTileValue12,
    updateTileValue22,
    updateTileValue32
  );
  moveTiles(
    tileValue03,
    tileValue13,
    tileValue23,
    tileValue33,
    updateTileValue03,
    updateTileValue13,
    updateTileValue23,
    updateTileValue33
  );
};

export default runUps