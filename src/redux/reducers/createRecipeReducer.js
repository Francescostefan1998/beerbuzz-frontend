const initialState = {
  name: "",
  image: "",
  author: "",
  userId: "",
  style: "",
  batchVolume: 0,
  abv: 0,
  ebc: 0,
  ibu: 0,
  og: 0,
  fg: 0,
  salts: [],
  malts: [],
  hops: [],
  yeasts: [],
  others: [],
  salts: [],
  acids: [],
  mash: [],
  boil: [],
  fermentation: [],
  comments: [],
};

export const createRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NAME_TO_RECIPE":
      return {
        ...state,
        name: action.payload,
      };
    case "ADD_SALT_TO_RECIPE":
      return {
        ...state,
        salts: [...state.salts, action.payload],
      };
    case "SUBTRACT_SALT_TO_RECIPE":
      const updateSalts = state.salts.filter(
        (comment) => comment.name !== action.payload.name
      );
      return {
        ...state,
        salts: updateSalts,
      };
    case "ADD_ACID_TO_RECIPE":
      return {
        ...state,
        acids: [action.payload],
      };
    case "SUBTRACT_ACID_TO_RECIPE":
      const updateAcids = state.acids.filter(
        (comment) => comment.name !== action.payload.name
      );
      return {
        ...state,
        acids: updateAcids,
      };
    case "ADD_IMAGE_TO_RECIPE":
      return {
        ...state,
        image: action.payload,
      };
    case "ADD_AUTHOR_TO_RECIPE":
      return {
        ...state,
        author: action.payload,
      };
    case "ADD_USERID_TO_RECIPE":
      return {
        ...state,
        userId: action.payload,
      };
    case "ADD_STYLE_TO_RECIPE":
      return {
        ...state,
        style: action.payload,
      };
    case "ADD_BATCHVOLUME_TO_RECIPE":
      return {
        ...state,
        batchVolume: action.payload,
      };
    case "ADD_ABV_TO_RECIPE":
      return {
        ...state,
        abv: action.payload,
      };
    case "ADD_EBC_TO_RECIPE":
      return {
        ...state,
        ebc: action.payload,
      };
    case "ADD_IBU_TO_RECIPE":
      return {
        ...state,
        ibu: action.payload,
      };
    case "ADD_OG_TO_RECIPE":
      return {
        ...state,
        og: action.payload,
      };
    case "ADD_FG_TO_RECIPE":
      return {
        ...state,
        fg: action.payload,
      };
    case "ADD_MALTS_TO_RECIPE":
      return {
        ...state,
        malts: [action.payload],
      };
    case "ADD_HOPS_TO_RECIPE":
      return {
        ...state,
        hops: [action.payload],
      };
    case "ADD_YEASTS_TO_RECIPE":
      return {
        ...state,
        yeasts: [action.payload],
      };
    case "ADD_OTHERS_TO_RECIPE":
      return {
        ...state,
        others: [action.payload],
      };
    case "ADD_SALTS_TO_RECIPE":
      return {
        ...state,
        salts: [action.payload],
      };
    case "ADD_MASH_TO_RECIPE":
      return {
        ...state,
        mash: [action.payload],
      };
    case "ADD_BOIL_TO_RECIPE":
      return {
        ...state,
        boil: [action.payload],
      };
    case "ADD_FERMENTATION_TO_RECIPE":
      return {
        ...state,
        fermentation: [action.payload],
      };
    case "ADD_COMMENTS_TO_RECIPE":
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case "SUBTRACT_COMMENTS_TO_RECIPE":
      const updateComments = state.comments.filter(
        (comment) => comment.name !== action.payload.name
      );
      return {
        ...state,
        comments: updateComments,
      };
    default:
      return {
        ...state,
      };
  }
};
