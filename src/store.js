import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logReducer from "./slices/logSlice";
import profileReducer from "./slices/userSlice";
import editReducer from "./slices/userEditSlice";

const rootReducer = combineReducers({
  log: logReducer,
  user: profileReducer,
  edit: editReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
