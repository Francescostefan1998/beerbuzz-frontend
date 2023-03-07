export const addMashStepRecipeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "ADD_MASHSTEP_TO_RECIPE",
      payload: param,
    });
  };
};

export const subtractMashStepRecipeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "SUBTRACT_MASHSTEP_FROM_RECIPE",
      payload: param,
    });
  };
};

export const addBoilStepRecipeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "ADD_BOILSTEP_TO_RECIPE",
      payload: param,
    });
  };
};

export const subtractBoilStepRecipeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "SUBTRACT_BOILSTEP_FROM_RECIPE",
      payload: param,
    });
  };
};

export const addFermentationStepRecipeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "ADD_FERMENTATIONSTEP_TO_RECIPE",
      payload: param,
    });
  };
};

export const subtractFermentationSteptRecipeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "SUBTRACT_FERMENTATIONSTEP_FROM_RECIPE",
      payload: param,
    });
  };
};
