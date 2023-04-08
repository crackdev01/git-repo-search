import { combineReducers, configureStore, createReducer } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

import {
  loadingReducer,
  loadingActions,
  repoActions,
  repoReducer
} from "./slices";

const reducer = combineReducers({
  loading: loadingReducer,
  repo: repoReducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  preloadedState: {},
  reducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false, thunk: false }).concat(
      sagaMiddleware
    )
});

export const AppActions = {
  loading: loadingActions,
  repo: repoActions
};

sagaMiddleware.run(rootSaga);

export * as AppActionTypes from './types';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;