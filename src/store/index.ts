import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";

import weatherReducer from './reducers/weatherReducer';
import alertReducer from './reducers/alertReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  alert: alertReducer,
});

const store = configureStore({ 
  reducer: rootReducer,
  middleware: [thunk],
 });

 export type RootState = ReturnType<typeof rootReducer>;
 
 export default store;