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

// export const selectedProductsReducer = (state = {}, { type, payload }) => {
//   console.log(type);
//   switch (type) {
//     case ActionTypes.SELECTED_PRODUCT:
//       return { ...state, ...payload };
//     case ActionTypes.REMOVE_SELECTED_PRODUCT:
//       return {};
//     default:
//       return state;
//   }
// };
