import { configureStore } from "@reduxjs/toolkit";
import { addProductRecipeReducer } from "../reducers/addProductReducer";
import { createRecipeReducer } from "../reducers/createRecipeReducer";
import { addStepsRecipeReducer } from "../reducers/addStepsReducer";
import { addStyleReducer } from "../reducers/addStyleReducer";
import { originalWaterReducer } from "../reducers/originalWaterReducer";
import { updateWaterReducer } from "../reducers/updateWaterReducer";
import { waterAndBeerDataReducer } from "../reducers/waterAndBeerData";
import { afterSaltReducer } from "../reducers/afterSaltReducer";
import { spargeWaterReducer } from "../reducers/spargeWaterReducer";
const mainReducer = {
  recipeIngredient: addProductRecipeReducer,
  recipeSteps: addStepsRecipeReducer,
  createRecipe: createRecipeReducer,
  style: addStyleReducer,
  originalWater: originalWaterReducer,
  updatedWater: updateWaterReducer,
  waterAndBeerData: waterAndBeerDataReducer,
  afterSalt: afterSaltReducer,
  sparge: spargeWaterReducer,
};

export const store = configureStore({
  reducer: mainReducer,
});
