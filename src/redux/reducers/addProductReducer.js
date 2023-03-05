const initialState = {
  malts: [],
  hops: [],
  yeasts: [],
  others: [],
};

export const addMaltRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MALT_TO_RECIPE":
      return {
        ...state,
        malts: [action.payload, ...state.malts],
      };
    default:
      return {
        ...state,
      };
  }
};

export const subtracMaltRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBTRACT_MALT_FROM_RECIPE":
      const updatedMalts = state.malts.filter(
        (malt) => malt._id !== action.payload._id
      );
      return {
        ...state,
        malts: updatedMalts,
      };
    default:
      return {
        ...state,
      };
  }
};

export const addHopRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOP_TO_RECIPE":
      return {
        ...state,
        hops: [action.payload, ...state.hops],
      };
    default:
      return {
        ...state,
      };
  }
};

export const subtractHopRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBTRACT_HOP_FROM_RECIPE":
      const updatedHops = state.hops.filter(
        (hop) => hop._id !== action.payload._id
      );
      return {
        ...state,
        hops: updatedHops,
      };
    default:
      return {
        ...state,
      };
  }
};

export const addYeastRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_YEAST_TO_RECIPE":
      return {
        ...state,
        yeasts: [action.payload, ...state.yeasts],
      };
    default:
      return {
        ...state,
      };
  }
};

export const subtractYeastRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBTRACT_YEAST_FROM_RECIPE":
      const updatedYeasts = state.yeasts.filter(
        (yeast) => yeast._id !== action.payload._id
      );
      return {
        ...state,
        yeasts: updatedYeasts,
      };
    default:
      return {
        ...state,
      };
  }
};

export const addOthetRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_OTHER_TO_RECIPE":
      return {
        ...state,
        others: [action.payload, ...state.others],
      };
    default:
      return {
        ...state,
      };
  }
};

export const subtractOtherRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
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
