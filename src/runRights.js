import moveTiles from "./moveTiles.js";

const runRights = () => {
  moveTiles(
    tileValue10,
    tileValue11,
    tileValue12,
    tileValue13,
    updateTileValue10,
    updateTileValue11,
    updateTileValue12,
    updateTileValue13
  );
  moveTiles(
    tileValue00,
    tileValue01,
    tileValue02,
    tileValue03,
    updateTileValue00,
    updateTileValue01,
    updateTileValue02,
    updateTileValue03
  );
  moveTiles(
    tileValue20,
    tileValue21,
    tileValue22,
    tileValue23,
    updateTileValue20,
    updateTileValue21,
    updateTileValue22,
    updateTileValue23
  );
  moveTiles(
    tileValue30,
    tileValue31,
    tileValue32,
    tileValue33,
    updateTileValue30,
    updateTileValue31,
    updateTileValue32,
    updateTileValue33
  );
};

export default runRights;
