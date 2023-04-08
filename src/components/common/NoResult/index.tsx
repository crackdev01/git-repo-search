import React from 'react';
import { Box, BoxProps } from '@mui/system';
import { NoResultComponentStyle } from './index.style';

type NoResultComponentProps = BoxProps & {
  imgLink: string;
};

export const NoResultComponent: React.FC<NoResultComponentProps> = (props) => {
  const { imgLink } = props;

  return <NoResultComponentStyle imgLink={imgLink}>
    <Box className="no-result-img"></Box>
    <Box className="color-white comment"> No search result </Box>
  </NoResultComponentStyle>
}