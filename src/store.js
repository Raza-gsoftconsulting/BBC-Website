import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import homeReducer from "./Reducer/homeSlice";

const myResponse = (store) => {
  return (next) => {
    return (action) => {
      return next(action);
    };
  };
};

const Store = configureStore(
  {
    reducer: {
      home: homeReducer,
    },
  },
  applyMiddleware(myResponse),
  console.log("Middleware is working", myResponse)
);

export default Store;
