import { AppActions } from "../../store";
import { call, put, takeLatest } from "redux-saga/effects";
import { makeAPIRequst } from "../../../utils";
import { PayloadAction } from "@reduxjs/toolkit";

import { AppActionTypes } from "../../store";
import { AxiosError } from "axios";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* getReposRequestSaga(
  action: PayloadAction<AppActionTypes.Repo.IGetReposRequestAction>
) {
  try {
    yield put(AppActions.loading.setLoading());

    const result: ResponseGenerator = yield call(async () => {
      return await makeAPIRequst(`repositories?q=${action.payload.searchText}&per_page=${action.payload.perPage}&page=${action.payload.page}`, "GET", {}, false);
    });

    yield put(AppActions.loading.finishLoading());
    yield put(AppActions.repo.getReposSuccess({ repo: result.data }));

    if (action.payload.next) {
      action.payload.next();
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const reasonCode: string = error.response?.data.reason;
      if (reasonCode && action.payload.errors) {
        const errorHandler: () => void = action.payload.errors[reasonCode];
        errorHandler();
      }
    }
  }
}

export default (function* () {
  yield takeLatest("repo/getReposRequest", getReposRequestSaga);
})();