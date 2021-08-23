import { ActionTypes } from "../constants /actions-types";

const intialState = {
  parks: [
    {
      id: 1,
      title: "park1",
      category: "happy",
    },
  ],
};

export const parkReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PARKS:
      return state;
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
