import { combineReducers } from "redux";
import { parkReducer } from "./parkReducer";

const reducers = combineReducers({
  allParks: parkReducer,
  
});

export default reducers;
  