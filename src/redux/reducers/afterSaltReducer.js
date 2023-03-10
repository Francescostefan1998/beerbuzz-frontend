const initialState = {
  calcium: 0,
  magnesium: 0,
  alkalinity: 0,
  sulfate: 0,
  chloride: 0,
  sodium: 0,
  ph: 0,
};

export const afterSaltReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AFTERSALT_CALCIUM_TO_ORIGINALWATER":
      return {
        ...state,
        calcium: action.payload,
      };
    case "AFTERSALT_MAGNESIUM_TO_ORIGINALWATER":
      return {
        ...state,
        magnesium: action.payload,
      };
    case "AFTERSALT_ALKALINITY_TO_ORIGINALWATER":
      return {
        ...state,
        alkalinity: action.payload,
      };
    case "AFTERSALT_SULFATE_TO_ORIGINALWATER":
      return {
        ...state,
        sulfate: action.payload,
      };
    case "AFTERSALT_CHLORIDE_TO_ORIGINALWATER":
      return {
        ...state,
        chloride: action.payload,
      };
    case "AFTERSALT_SODIUM_TO_ORIGINALWATER":
      return {
        ...state,
        sodium: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
