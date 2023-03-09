import { configureStore } from "@reduxjs/toolkit";
import { addProductRecipeReducer } from "../reducers/addProductReducer";
import { createRecipeReducer } from "../reducers/createRecipeReducer";
import { addStepsRecipeReducer } from "../reducers/addStepsReducer";
import { addStyleReducer } from "../reducers/addStyleReducer";
import { originalWaterReducer } from "../reducers/originalWaterReducer";
const mainReducer = {
  recipeIngredient: addProductRecipeReducer,
  recipeSteps: addStepsRecipeReducer,
  createRecipe: createRecipeReducer,
  style: addStyleReducer,
  originalWater: originalWaterReducer,
};

export const store = configureStore({
  reducer: mainReducer,
});
