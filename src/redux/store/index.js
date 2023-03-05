import { configureStore } from "@reduxjs/toolkit";
import { addProductRecipeReducer } from "../reducers/addProductReducer";
const mainReducer = {
  recipeIngredient: addProductRecipeReducer,
};

export const store = configureStore({
  reducer: mainReducer,
});
