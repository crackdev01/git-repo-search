import { AppActions } from "../../store";
import { call, put, takeLatest } from "redux-saga/effects";
import { makeAPIRequst } from "../../../utils";
import { PayloadAction } from "@reduxjs/toolkit";

import { AppActionTypes } from "../../store";
import { AxiosError } from "axios";

function* formatReposRequestSaga(
  action: PayloadAction<AppActionTypes.Repo.IFormatReposRequestAction>
) {
  yield put(AppActions.repo.getReposRequest(action.payload));
}

export default (function* () {
  yield takeLatest("repo/formatReposRequest", formatReposRequestSaga);
})();