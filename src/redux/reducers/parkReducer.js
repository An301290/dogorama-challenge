import { ActionTypes } from "../constants /actions-types";

const intialState = {
  parks: [],
};

export const parkReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PARKS:
      return {state, parks:payload};
    default:
      return state;
  }
};


