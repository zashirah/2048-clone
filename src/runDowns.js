import moveTiles from './moveTiles'

const runDowns = () => {
  moveTiles(
    tileValue30,
    tileValue20,
    tileValue10,
    tileValue00,
    updateTileValue30,
    updateTileValue20,
    updateTileValue10,
    updateTileValue00
  );
  moveTiles(
    tileValue31,
    tileValue21,
    tileValue11,
    tileValue01,
    updateTileValue31,
    updateTileValue21,
    updateTileValue11,
    updateTileValue01
  );
  moveTiles(
    tileValue32,
    tileValue22,
    tileValue12,
    tileValue02,
    updateTileValue32,
    updateTileValue22,
    updateTileValue12,
    updateTileValue02
  );
  moveTiles(
    tileValue33,
    tileValue23,
    tileValue13,
    tileValue03,
    updateTileValue33,
    updateTileValue23,
    updateTileValue13,
    updateTileValue03
  );
};

export default runDowns