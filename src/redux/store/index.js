import { configureStore } from "@reduxjs/toolkit";
import { addProductRecipeReducer } from "../reducers/addProductReducer";
import { createRecipeReducer } from "../reducers/createRecipeReducer";
import { addStepsRecipeReducer } from "../reducers/addStepsReducer";
const mainReducer = {
  recipeIngredient: addProductRecipeReducer,
  recipeSteps: addStepsRecipeReducer,
  createRecipe: createRecipeReducer,
};

export const store = configureStore({
  reducer: mainReducer,
});
