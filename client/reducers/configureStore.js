import { createStore, applyMiddleware } from "redux";
import reducer from "./index";
import thunkMiddleware from 'redux-thunk';

export const configureStore = () => createStore(reducer,applyMiddleware(
    thunkMiddleware
  ));
