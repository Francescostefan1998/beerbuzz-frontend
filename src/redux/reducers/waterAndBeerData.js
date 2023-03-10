const initialState = {
  mashVolume: 0,
  alkalinityTarget: 0,
  alkalinityToBeReduced: 0,
  spargeVolume: 0,
  diluitionRateMash: 0,
  preBoil: 0,
  postBoil: 0,
  batchVolume: 0,
  equipmentEfficienty: 75,
  evaporationRate: 9,
  totalBoilTime: 60,
  lostInfiltering: 12,
};

export const waterAndBeerDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MASHVOLUME_TO_WATERANDBEERDATA":
      return {
        ...state,
        mashVolume: action.payload,
      };
    case "UPDATE_ALKALINITYTARGET_TO_WATERANDBEERDATA":
      return {
        ...state,
        alkalinityTarget: action.payload,
      };
    case "UPDATE_ALKALINITYTOBEREDUCED_TO_WATERANDBEERDATA":
      return {
        ...state,
        alkalinityToBeReduced: action.payload,
      };
    case "UPDATE_SPARGEVOLUME_TO_WATERANDBEERDATA":
      return {
        ...state,
        spargeVolume: action.payload,
      };
    case "UPDATE_DILUITIONRATE_TO_WATERANDBEERDATA":
      return {
        ...state,
        diluitionRateMash: action.payload,
      };
    case "UPDATE_PREBOIL_TO_WATERANDBEERDATA":
      return {
        ...state,
        preBoil: action.payload,
      };
    case "UPDATE_POSTBOIL_TO_WATERANDBEERDATA":
      return {
        ...state,
        postBoil: action.payload,
      };

    case "UPDATE_BATCHVOLUME_TO_WATERANDBEERDATA":
      return {
        ...state,
        batchVolume: action.payload,
      };
    case "UPDATE_EQUIPMENTEFFICIENCY_TO_WATERANDBEERDATA":
      return {
        ...state,
        equipmentEfficienty: action.payload,
      };
    case "UPDATE_EVAPORATIONRATE_TO_WATERANDBEERDATA":
      return {
        ...state,
        evaporationRate: action.payload,
      };
    case "UPDATE_TOTALBOILTIME_TO_WATERANDBEERDATA":
      return {
        ...state,
        totalBoilTime: action.payload,
      };
    case "UPDATE_LOSTINFILTERING_TO_WATERANDBEERDATA":
      return {
        ...state,
        lostInfiltering: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
