export const initialPhSpargeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "INITIALPH_SPARGE",
      payload: param,
    });
  };
};

export const volumeSpargeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "VOLUME_SPARGE",
      payload: param,
    });
  };
};

export const acidSpargeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "ACID_SPARGE",
      payload: param,
    });
  };
};

export const acidQuantitySpargeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "ACIDQUANTITY_SPARGE",
      payload: param,
    });
  };
};

export const finalPhSpargeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "FINALPH_SPARGE",
      payload: param,
    });
  };
};

export const alkalinitySpargeAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "ALKALINITY_SPARGE",
      payload: param,
    });
  };
};
