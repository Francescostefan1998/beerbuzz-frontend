export const addMaltRecipeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "ADD_MALT_TO_RECIPE",
      payload: param,
    });
  };
};

export const subtractMaltRecipeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "SUBTRACT_MALT_FROM_RECIPE",
      payload: param,
    });
  };
};

export const addHopRecipeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "ADD_HOP_TO_RECIPE",
      payload: param,
    });
  };
};

export const subtractHopRecipeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "SUBTRACT_HOP_FROM_RECIPE",
      payload: param,
    });
  };
};

export const addYeastRecipeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "ADD_YEAST_TO_RECIPE",
      payload: param,
    });
  };
};

export const subtractYeastRecipeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "SUBTRACT_YEAST_TO_RECIPE",
      payload: param,
    });
  };
};

export const addOtherRecipeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "ADD_OTHER_TO_RECIPE",
      payload: param,
    });
  };
};

export const subtractOtherRecipeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "SUBTRACT_OTHER_FROM_RECIPE",
      payload: param,
    });
  };
};
