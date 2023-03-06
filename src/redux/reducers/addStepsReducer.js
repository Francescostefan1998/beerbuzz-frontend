const initialState = {
  mash: [],
  boil: [],
  fermentation: [],
};

export const addStepsRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MASHSTEP_TO_RECIPE":
      return {
        ...state,
        mash: [action.payload, ...state.mash],
      };
    case "SUBTRACT_MASHSTEP_FROM_RECIPE":
      const updatedMash = state.mash.filter(
        (step) => step.name !== action.payload.name
      );
      return {
        ...state,
        mash: updatedMash,
      };
    case "ADD_BOILSTEP_TO_RECIPE":
      return {
        ...state,
        boil: [action.payload, ...state.boil],
      };
    case "SUBTRACT_BOILSTEP_FROM_RECIPE":
      const updatedBoil = state.boil.filter(
        (step) => step.name !== action.payload.name
      );
      return {
        ...state,
        mash: updatedBoil,
      };
    case "ADD_FERMENTATIONSTEP_TO_RECIPE":
      return {
        ...state,
        fermentation: [action.payload, ...state.fermentation],
      };
    case "SUBTRACT_FERMENTATIONSTEP_FROM_RECIPE":
      const updatedFermentation = state.fermentation.filter(
        (fer) => fer.name !== action.payload.name
      );
      return {
        ...state,
        fermentation: updatedFermentation,
      };

    default:
      return {
        ...state,
      };
  }
};
