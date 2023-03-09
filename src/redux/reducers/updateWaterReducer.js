const initialState = {
  calcium: 0,
  magnesium: 0,
  alkalinity: 0,
  sulfate: 0,
  chloride: 0,
  sodium: 0,
  ph: 0,
};

export const updateWaterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CALCIUM_TO_ORIGINALWATER":
      return {
        ...state,
        calcium: action.payload,
      };
    case "UPDATE_MAGNESIUM_TO_ORIGINALWATER":
      return {
        ...state,
        magnesium: action.payload,
      };
    case "UPDATE_ALKALINITY_TO_ORIGINALWATER":
      return {
        ...state,
        alkalinity: action.payload,
      };
    case "UPDATE_SULFATE_TO_ORIGINALWATER":
      return {
        ...state,
        sulfate: action.payload,
      };
    case "UPDATE_CHLORIDE_TO_ORIGINALWATER":
      return {
        ...state,
        chloride: action.payload,
      };
    case "UPDATE_SODIUM_TO_ORIGINALWATER":
      return {
        ...state,
        sodium: action.payload,
      };
    case "UPDATE_PH_TO_ORIGINALWATER":
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
