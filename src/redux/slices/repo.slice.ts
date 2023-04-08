import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppActionTypes, RootState } from "../store";

type RepoState = {
  total: number;
  repos: any[]
};

const initialState: RepoState = {
  total: 0,
  repos: []
};

const repoSlice = createSlice({
  name: 'repo',
  initialState: initialState,
  reducers: {
    // Format Repos
    formatReposRequest(
      state: RepoState,
      action: PayloadAction<AppActionTypes.Repo.IFormatReposRequestAction>
    ) {
      state.total = 0;
      state.repos = [];
    },

    // Get Repos
    getReposRequest(
      _state: RepoState,
      _action: PayloadAction<AppActionTypes.Repo.IGetReposRequestAction>
    ) { },
    getReposSuccess(
      state: RepoState,
      action: PayloadAction<AppActionTypes.Repo.IGetReposSuccessAction>
    ) {
      state.total = action.payload.repo.total_count;
      state.repos = [...state.repos, ...action.payload.repo.items];
    },
    getReposFailure(_state: RepoState) { }
  }
});

export const reducer = repoSlice.reducer;
export const actions = repoSlice.actions;