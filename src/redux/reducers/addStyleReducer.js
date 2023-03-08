const initialState = {
  style: null,
};
export const addStyleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STYLE_BEER":
      return {
        ...state,
        style: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
