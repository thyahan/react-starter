import { createStore, applyMiddleware } from "redux";
// import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import reducers from "../reducers";
const middleWares = [
  /*thunk*/
];

export default (initialState) => {
  //   if (process.env.NODE_ENV === "development") middleWares.push(createLogger());
  return createStore(reducers, initialState, applyMiddleware(...middleWares));
};
