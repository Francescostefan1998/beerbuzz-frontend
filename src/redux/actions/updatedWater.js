export const updateOriginalCalciumAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_CALCIUM_TO_ORIGINALWATER",
      payload: param,
    });
  };
};

export const updateOriginalMagnesiumAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_MAGNESIUM_TO_ORIGINALWATER",
      payload: param,
    });
  };
};

export const updateOriginalAlkalinityAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_ALKALINITY_TO_ORIGINALWATER",
      payload: param,
    });
  };
};

export const updateOriginalSulfateAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_SULFATE_TO_ORIGINALWATER",
      payload: param,
    });
  };
};

export const updateOriginalChlorideAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_CHLORIDE_TO_ORIGINALWATER",
      payload: param,
    });
  };
};

export const updateOriginalSodiumAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_SODIUM_TO_ORIGINALWATER",
      payload: param,
    });
  };
};

export const updateOriginalPhAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_PH_TO_ORIGINALWATER",
      payload: param,
    });
  };
};
