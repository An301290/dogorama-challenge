import { ActionTypes } from "../constants /actions-types";

export const setParks = (parks) => {
  return {
    type: ActionTypes.SET_PARKS,
    payload: parks,
  };
};

export const selectedPark = (park) => {
  return {
    type: ActionTypes.SELECTED_PARKS,
    payload: park,
  };
};
export const removeSelectedPark = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PARK,
  };
};
