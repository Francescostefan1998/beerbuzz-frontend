const initialState = {
  name: "",
  image: "",
  author: "",
  userId: "",
  style: "",
  batchVolume: null,
  abv: null,
  ebc: null,
  ibu: null,
  og: null,
  fg: null,

  malts: [],
  hops: [],
  yeasts: [],
  others: [],
  salts: [],
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
        comments: [action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};