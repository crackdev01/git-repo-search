import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, AppActions, RootState } from '../../redux/store';
import { MainView } from '../../components/view';
import { ISearch } from '../../models';

export const MainContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { total, repos } = useSelector((state: RootState) => state.repo);
  const { status } = useSelector((state: RootState) => state.loading);

  const handleGetFirstRepos = (search: ISearch) => {
    // dispatch(AppActions.repo.formatRepos({
    //   next: () => {
    //     dispatch(AppActions.repo.getFirstReposRequest(search));
    //   }
    // }))
    dispatch(AppActions.repo.formatReposRequest(search));
  }

  const handleGetRepos = (search: ISearch) => {
    dispatch(AppActions.repo.getReposRequest(search));
  }

  return <MainView
    isLoading={status}
    total={total}
    repos={repos}
    getFirstRepos={handleGetFirstRepos}
    getRepos={handleGetRepos}
  />
}