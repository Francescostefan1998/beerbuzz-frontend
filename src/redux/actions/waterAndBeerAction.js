export const updateMashVolumeWaterAndBeerAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_MASHVOLUME_TO_WATERANDBEERDATA",
      payload: param,
    });
  };
};

export const updateAlkalinityTargetWaterAndBeerAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_ALKALINITYTARGET_TO_WATERANDBEERDATA",
      payload: param,
    });
  };
};

export const updateAlkalinityToBeReducedWaterAndBeerAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_ALKALINITYTOBEREDUCED_TO_WATERANDBEERDATA",
      payload: param,
    });
  };
};

export const updateSpargeVolumeWaterAndBeerAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_SPARGEVOLUME_TO_WATERANDBEERDATA",
      payload: param,
    });
  };
};

export const updateDiluitionRateWaterAndBeerAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_DILUITIONRATE_TO_WATERANDBEERDATA",
      payload: param,
    });
  };
};

export const updatePreBoilWaterAndBeerAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_PREBOIL_TO_WATERANDBEERDATA",
      payload: param,
    });
  };
};

export const updatePostBoilWaterAndBeerAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_POSTBOIL_TO_WATERANDBEERDATA",
      payload: param,
    });
  };
};
export const updateBatchVolumeWaterAndBeerAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_BATCHVOLUME_TO_WATERANDBEERDATA",
      payload: param,
    });
  };
};
export const updateEquipmentEfficiencyWaterAndBeerAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_EQUIPMENTEFFICIENCY_TO_WATERANDBEERDATA",
      payload: param,
    });
  };
};
export const updateEvaporationRateWaterAndBeerAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_EVAPORATIONRATE_TO_WATERANDBEERDATA",
      payload: param,
    });
  };
};
export const updateTotalBoilTimeWaterAndBeerAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_TOTALBOILTIME_TO_WATERANDBEERDATA",
      payload: param,
    });
  };
};
export const updateLostInFilteringWaterAndBeerAction = (param) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_LOSTINFILTERING_TO_WATERANDBEERDATA",
      payload: param,
    });
  };
};
