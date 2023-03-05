const initialState = {
  malts: [],
  hops: [],
  yeasts: [],
  others: [],
};

export const addProductRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MALT_TO_RECIPE":
      return {
        ...state,
        malts: [action.payload, ...state.malts],
      };
    case "SUBTRACT_MALT_FROM_RECIPE":
      const updatedMalts = state.malts.filter(
        (malt) => malt._id !== action.payload._id
      );
      return {
        ...state,
        malts: updatedMalts,
      };
    case "ADD_HOP_TO_RECIPE":
      return {
        ...state,
        hops: [action.payload, ...state.hops],
      };
    case "SUBTRACT_HOP_FROM_RECIPE":
      const updatedHops = state.hops.filter(
        (hop) => hop._id !== action.payload._id
      );
      return {
        ...state,
        hops: updatedHops,
      };
    case "ADD_YEAST_TO_RECIPE":
      return {
        ...state,
        yeasts: [action.payload, ...state.yeasts],
      };
    case "SUBTRACT_YEAST_TO_RECIPE":
      const updatedYeasts = state.yeasts.filter(
        (yeast) => yeast._id !== action.payload._id
      );
      console.log("subtract yeast reducer");
      return {
        ...state,
        yeasts: updatedYeasts,
      };
    case "ADD_OTHER_TO_RECIPE":
      return {
        ...state,
        others: [action.payload, ...state.others],
      };
    case "SUBTRACT_OTHER_FROM_RECIPE":
      const updatedOthers = state.others.filter(
        (other) => other._id !== action.payload._id
      );
      return {
        ...state,
        others: updatedOthers,
      };
    default:
      return {
        ...state,
      };
  }
};
