import { all } from "redux-saga/effects";
import repoSagas from "./Repo";

function* rootSaga() {
  yield all([
    ...repoSagas,
  ]);
}

export default rootSaga;
