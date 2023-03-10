const initialState = {
  initialPh: 0,
  volume: 0,
  acid: 0,
  acidQuantity: 0,
  finalph: 0,
  alkalinity: 0,
};

export const spargeWaterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALPH_SPARGE":
      return {
        ...state,
        initialPh: action.payload,
      };
    case "VOLUME_SPARGE":
      return {
        ...state,
        volume: action.payload,
      };
    case "ACID_SPARGE":
      return {
        ...state,
        acid: action.payload,
      };
    case "ACIDQUANTITY_SPARGE":
      return {
        ...state,
        acidQuantity: action.payload,
      };
    case "FINALPH_SPARGE":
      return {
        ...state,
        finalph: action.payload,
      };
    case "ALKALINITY_SPARGE":
      return {
        ...state,
        alkalinity: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
