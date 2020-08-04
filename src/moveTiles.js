const moveTiles = (value0, value1, value2, value3, updateValue0, updateValue1, updateValue2, updateValue3) => {
  if (value0) {
    if (value1 && value0 === value1) {
      updateValue0((prevState) => prevState * 2);
      updateValue1(null);
      if (value2) {
        if (value3 && value2 === value3) {
          updateValue1(value2 * 2);
          updateValue2(null);
          updateValue3(null);
        } else if (value3) {
          updateValue1(value2);
          updateValue2(value3);
          updateValue3(null);
        } else {
          updateValue1(value2);
          updateValue2(null);
          updateValue3(null);
        }
      } else if (value3) {
        updateValue1(value3)
        updateValue3(null)
      }
    } else if (value1) {
      if (value2 && value2 === value1) {
        updateValue1(value1 * 2)
        updateValue2(null)
        if (value3) {
          updateValue2(value3)
          updateValue3(null)
        }
      } else if (value2 && value2 === value3) {
        updateValue2(value2 * 2)
        updateValue3(null);
      } else if (!value2 && value3) {
        updateValue2(value3)
        updateValue3(null)
      }
    } else if (!value1 && value2 && value0 === value2) {
      updateValue0((prevState) => prevState * 2);
      updateValue2(null);
      if (value3) {
        updateValue1(value3);
        updateValue3(null);
      }
    } else if (!value1 && !value2 && value3 && value0 === value3) {
      updateValue0((prevState) => prevState * 2);
      updateValue3(null);
    } else if (!value1 && !value2 && value3 && value0) {
      updateValue1(value3)
      updateValue3(null)
    }
  } else if (value1) {
    if (value2 && value1 === value2) {
      updateValue0(value1 * 2);
      updateValue1(null);
      updateValue2(null);
      if (value3) {
        updateValue1(value3);
        updateValue3(null);
      }
    } else if (value3 && value1 === value3) {
      updateValue0(value1 * 2);
      updateValue1(null);
      updateValue3(null);
    } else if (!value2 && !value3) {
      updateValue0(value1)
      updateValue1(null)
    }
  } else if (value2) {
    if (value3 && value2 === value3) {
      updateValue0(value2 * 2);
      updateValue2(null);
      updateValue3(null);
    } else if (!value3) {
      updateValue0(value2)
      updateValue2(null)
    }
  } else if (value3) {
    updateValue0(value3);
    updateValue3(null)
  }
};

export default moveTiles;