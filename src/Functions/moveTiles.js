const moveTiles = (
  value0,
  value1,
  value2,
  value3,
  updateValue0,
  updateValue1,
  updateValue2,
  updateValue3,
  updateScore,
  updateHit2048Tile
) => {
  // all truthy
  let moveValue = "move";

  if (value0 && value1 && value2 && value3) {
    if (value0 === value1) {
      updateValue0(value0 * 2);
      updateScore((prevState) => prevState + value0 * 2);
      if (value0 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateValue1(null);
      if (value2 === value3) {
        updateValue1(value2 * 2);
        updateScore((prevState) => prevState + value2 * 2);
        if (value2 * 2 === 2048) {
          updateHit2048Tile(true);
        }
        updateValue2(null);
        updateValue3(null);
      } else {
        updateValue1(value2);
        updateValue2(value3);
        updateValue3(null);
      }
    } else if (value1 === value2) {
      updateValue1(value1 * 2);
      updateScore((prevState) => prevState + value1 * 2);
      updateValue2(value3);
      if (value1 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateValue3(null);
    } else if (value2 === value3) {
      updateValue2(value2 * 2);
      updateScore((prevState) => prevState + value2 * 2);
      if (value2 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateValue3(null);
    } else {
      moveValue = "no-move";
    }
    // 0, 1, 2 = truthy
  } else if (value0 && value1 && value2 && !value3) {
    if (value0 === value1) {
      updateValue0(value0 * 2);
      updateScore((prevState) => prevState + value0 * 2);
      if (value0 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateValue1(value2);
      updateValue2(null);
    } else if (value1 === value2) {
      updateValue1(value1 * 2);
      if (value1 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateValue2(null);
    } else {
      moveValue = "no-move";
    }
    // 0, 2, 3 = truthy
  } else if (value0 && !value1 && value2 && value3) {
    if (value0 === value2) {
      updateValue0(value0 * 2);
      if (value0 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value0 * 2);
      updateValue1(value3);
      updateValue2(null);
      updateValue3(null);
    } else if (value2 === value3) {
      updateValue1(value2 * 2);
      if (value2 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value2 * 2);
      updateValue2(null);
      updateValue3(null);
    } else {
      updateValue1(value2);
      updateValue2(value3);
      updateValue3(null);
    }
    // 0, 1, 3 = truthy
  } else if (value0 && value1 && !value2 && value3) {
    if (value0 === value1) {
      updateValue0(value0 * 2);
      if (value0 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value0 * 2);
      updateValue1(value3);
      updateValue3(null);
    } else if (value1 === value3) {
      updateValue1(value1 * 2);
      if (value1 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value1 * 2);
      updateValue3(null);
    } else {
      updateValue2(value3);
      updateValue3(null);
    }
  } else if (!value0 && value1 && value2 && value3) {
    if (value1 === value2) {
      updateValue0(value1 * 2);
      if (value1 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value1 * 2);
      updateValue1(value3);
      updateValue2(null);
      updateValue3(null);
    } else if (value2 === value3) {
      updateValue0(value1);
      updateValue1(value2 * 2);
      if (value2 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value2 * 2);
      updateValue2(null);
      updateValue3(null);
    } else {
      updateValue0(value1);
      updateValue1(value2);
      updateValue2(value3);
      updateValue3(null);
    }
    // 0, 1 = truthy
  } else if (value0 && value1 && !value2 && !value3) {
    if (value0 === value1) {
      updateValue0(value0 * 2);
      if (value0 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value0 * 2);
      updateValue1(null);
    } else {
      moveValue = "no-move";
    }
    // 0, 2 = truthy
  } else if (value0 && !value1 && value2 && !value3) {
    if (value0 === value2) {
      updateValue0(value0 * 2);
      if (value0 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value0 * 2);
      updateValue2(null);
    } else {
      updateValue1(value2);
      updateValue2(null);
    }
    // 0, 3 = truthy
  } else if (value0 && !value1 && !value2 && value3) {
    if (value0 === value3) {
      updateValue0(value0 * 2);
      if (value0 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value0 * 2);
      updateValue3(null);
    } else {
      updateValue1(value3);
      updateValue3(null);
    }
    // 1, 3 = truthy
  } else if (!value0 && value1 && !value2 && value3) {
    if (value1 === value3) {
      updateValue0(value1 * 2);
      if (value1 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value1 * 2);
      updateValue1(null);
      updateValue3(null);
    } else {
      updateValue0(value1);
      updateValue1(value3);
      updateValue3(null);
    }
    // 1, 2 = truthy
  } else if (!value0 && value1 && value2 && !value3) {
    if (value1 === value2) {
      updateValue0(value1 * 2);
      if (value1 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value1 * 2);
      updateValue1(null);
      updateValue2(null);
    } else {
      updateValue0(value1);
      updateValue1(value2);
      updateValue2(null);
    }
    // 2, 3 = truthy
  } else if (!value0 && !value1 && value2 && value3) {
    if (value2 === value3) {
      updateValue0(value2 * 2);
      if (value2 * 2 === 2048) {
        updateHit2048Tile(true);
      }
      updateScore((prevState) => prevState + value2 * 2);
      updateValue2(null);
      updateValue3(null);
    } else {
      updateValue0(value2);
      updateValue1(value3);
      updateValue2(null);
      updateValue3(null);
    }
    // 1 = truthy
  } else if (!value0 && value1 && !value2 && !value3) {
    updateValue0(value1);
    updateValue1(null);
    // 2 = truthy
  } else if (!value0 && !value1 && value2 && !value3) {
    updateValue0(value2);
    updateValue2(null);
  } else if (!value0 && !value1 && !value2 && value3) {
    updateValue0(value3);
    updateValue3(null);
  } else {
    moveValue = "no-move";
  }
  return moveValue;
};

export default moveTiles;
