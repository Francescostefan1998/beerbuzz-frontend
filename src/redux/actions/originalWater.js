export const addOriginalCalciumAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "ADD_CALCIUM_TO_ORIGINALWATER",
      payload: param,
    });
  };
};

export const addOriginalMagnesiumAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "ADD_MAGNESIUM_TO_ORIGINALWATER",
      payload: param,
    });
  };
};

export const addOriginalAlkalinityAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "ADD_ALKALINITY_TO_ORIGINALWATER",
      payload: param,
    });
  };
};

export const addOriginalSulfateAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "ADD_SULFATE_TO_ORIGINALWATER",
      payload: param,
    });
  };
};

export const addOriginalChlorideAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "ADD_CHLORIDE_TO_ORIGINALWATER",
      payload: param,
    });
  };
};

export const addOriginalSodiumAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "ADD_SODIUM_TO_ORIGINALWATER",
      payload: param,
    });
  };
};

export const addOriginalPhAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "ADD_PH_TO_ORIGINALWATER",
      payload: param,
    });
  };
};
