import { combineReducers } from "@reduxjs/toolkit";
// import persistReducer from "redux-persist/integration";
import storage from "redux-persist/lib/storage";
import { store } from "./";
import { persistStore, persistReducer } from "redux-persist";
import SettingsReducer from "redux/slice/settings";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  version: 1,
};

const authPersistConfig = {
  key: "auth",
  storage: storage,
  version: 1,
  blacklist: ["somethingTemporary"],
};

const rootReducer = combineReducers({
  SettingsReducer,
});

export const persistedRootReducer = persistReducer(
  rootPersistConfig,
  rootReducer
);
