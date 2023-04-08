import React from 'react';
import {
  Box,
  BoxProps,
  Grid,
  Typography
} from '@mui/material';
import { ButtonComponent, InputComponent, ListComponent } from '../../common';
import { MainViewStyle } from './index.style';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { ISearch } from '../../../models';

type MainViewProps = BoxProps & {
  isLoading: boolean;
  total: number;
  repos: any[];
  getFirstRepos: (search: ISearch) => void;
  getRepos: (search: ISearch) => void;
};

const defaultValues: ISearch = {
  searchText: "",
  perPage: 15,
  page: 1
};

const schema = Yup.object().shape({
  searchText: Yup.string().required(),
  perPage: Yup.number().required(),
  page: Yup.number().required()
});

export const MainView: React.FC<MainViewProps> = (props) => {
  const { isLoading, total, repos, getFirstRepos, getRepos } = props;

  const { register, handleSubmit, formState: { errors, isValid }, setValue, getValues } = useForm<ISearch>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues
  });

  const setPage = () => {
    const currentPage = getValues().page;
    if (total / 15 > currentPage) {
      setValue("page", currentPage + 1);
    }
  }

  const handleScroll = (event: any) => {
    const { scrollHeight, scrollTop, clientHeight } = event.target;
    const scroll = scrollHeight - scrollTop - clientHeight;
    if (scroll === 0 && isLoading === false) {
      setPage();
      getRepos(getValues());
    }
  }

  const onSubmitHandler = (data: ISearch) => {
    setValue("perPage", 15);
    setValue("page", 1);
    getFirstRepos(data);
  }

  return <MainViewStyle>
    <Box className="panel">
      <Typography className="font-family-main font-weight-bold color-white margin-auto" sx={{ fontSize: '2rem' }}> Github Repos </Typography>
      <Box sx={{ height: '2rem' }}></Box>
      <Grid container spacing={2}>
        <Grid item lg={4} md={12} xs={12}>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <InputComponent
              label="Input repository name"
              name="searchText"
              register={register}
              error={!!errors.searchText}
            />
            <ButtonComponent
              type="submit"
              className="button row-gap-1rem"
              sx={{ fontSize: '1.2rem' }}
              disabled={!isValid}
            >
              Search
            </ButtonComponent>
          </form>
        </Grid>
        <Grid item lg={8} md={12} xs={12}>
          <ListComponent
            isLoading={isLoading}
            total={total}
            repos={repos}
            scrollEvent={handleScroll}
          />
        </Grid>
      </Grid>
    </Box>
  </MainViewStyle>
};