const runUp = (value0, value1, value2, value3, updateValue0, updateValue1, updateValue2, updateValue3) => {
  if (value0) {
    if (value1 && value0 === value1) {
      updateValue0((prevState) => Math.pow(prevState, 2));
      updateValue1(null);
      if (value2) {
        if (value3 && value2 === value3) {
          updateValue1(Math.pow(value2, 2));
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
      }
    } else if (value2 && value0 === value2) {
      updateValue0((prevState) => Math.pow(prevState, 2));
      updateValue2(null);
      if (value3) {
        updateValue1(value3);
        updateValue3(null);
      }
    } else if (value3 && value0 === value3) {
      updateValue0((prevState) => Math.pow(prevState, 2));
      updateValue3(null);
    }
  } else if (value1) {
    if (value2 && value1 === value2) {
      updateValue0(Math.pow(value1, 2));
      updateValue1(null);
      updateValue2(null);
      if (value3) {
        updateValue1(value3);
        updateValue3(null);
      }
    } else if (value3 && value1 === value3) {
      updateValue0(Math.pow(value1, 2));
      updateValue1(null);
      updateValue3(null);
    }
  } else if (value2) {
    if (value3 && value2 === value3) {
      updateValue0(Math.pow(value2, 2));
      updateValue2(null);
      updateValue3(null);
    }
  } else if (value3) {
    updateValue0(value3);
  }
};

export default runUp