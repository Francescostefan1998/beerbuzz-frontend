const initialState = {
  calcium: 0,
  magnesium: 0,
  alkalinity: 0,
  sulfate: 0,
  chloride: 0,
  sodium: 0,
  ph: 0,
};

export const originalWaterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CALCIUM_TO_ORIGINALWATER":
      return {
        ...state,
        calcium: action.payload,
      };
    case "ADD_MAGNESIUM_TO_ORIGINALWATER":
      return {
        ...state,
        magnesium: action.payload,
      };
    case "ADD_ALKALINITY_TO_ORIGINALWATER":
      return {
        ...state,
        alkalinity: action.payload,
      };
    case "ADD_SULFATE_TO_ORIGINALWATER":
      return {
        ...state,
        sulfate: action.payload,
      };
    case "ADD_CHLORIDE_TO_ORIGINALWATER":
      return {
        ...state,
        chloride: action.payload,
      };
    case "ADD_SODIUM_TO_ORIGINALWATER":
      return {
        ...state,
        sodium: action.payload,
      };
    case "ADD_PH_TO_ORIGINALWATER":
      return {
        ...state,
        ph: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
