export const addStyleAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "ADD_STYLE_BEER",
      payload: param,
    });
  };
};
