import React from 'react';
import { Box, BoxProps } from '@mui/system';
import { NoResultComponent, ListItemComponent, LoadingComponent } from '../';
import { ListComponentStyle } from './index.style';

type ListComponentProps = BoxProps & {
  isLoading: boolean;
  total: number;
  repos: any[];
  scrollEvent: (event: any) => void;
};

export const ListComponent: React.FC<ListComponentProps> = (props) => {
  const { isLoading, total, repos, scrollEvent } = props;

  return <ListComponentStyle onScroll={scrollEvent}>
    {
      total === 0 && isLoading === false
        ? <NoResultComponent imgLink='no_results.png' />
        : (
          <>
            {
              repos.map((repo, index) => (
                <ListItemComponent name={repo.full_name} key={index} />
              ))
            }
            {
              isLoading
                ? (<Box sx={{ height: '3rem' }}> <LoadingComponent /> </Box>)
                : <></>
            }
          </>
        )
    }
  </ListComponentStyle >
}