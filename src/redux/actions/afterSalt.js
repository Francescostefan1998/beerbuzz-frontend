export const afterSaltOriginalCalciumAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "AFTERSALT_CALCIUM_TO_ORIGINALWATER",
      payload: param,
    });
  };
};

export const afterSaltOriginalMagnesiumAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "AFTERSALT_MAGNESIUM_TO_ORIGINALWATER",
      payload: param,
    });
  };
};

export const afterSaltOriginalAlkalinityAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "AFTERSALT_ALKALINITY_TO_ORIGINALWATER",
      payload: param,
    });
  };
};

export const afterSaltOriginalSulfateAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "AFTERSALT_SULFATE_TO_ORIGINALWATER",
      payload: param,
    });
  };
};

export const afterSaltOriginalChlorideAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "AFTERSALT_CHLORIDE_TO_ORIGINALWATER",
      payload: param,
    });
  };
};

export const afterSaltOriginalSodiumAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "AFTERSALT_SODIUM_TO_ORIGINALWATER",
      payload: param,
    });
  };
};
export const afterAcidOriginalAlkalinityAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "AFTERACID_ALKALINITY_TO_ORIGINALWATER",
      payload: param,
    });
  };
};
