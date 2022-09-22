import { combineReducers } from "redux";
import Reduce from "./homeSlice";

const RootReducer = combineReducers({
  home: Reduce,
});

export default RootReducer;
