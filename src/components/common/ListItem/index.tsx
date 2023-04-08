import React from 'react';
import { BoxProps } from '@mui/material';
import { ListItemComponentStyle } from './index.style';

type ListItemComponentProps = BoxProps & {
  name: string;
};

export const ListItemComponent: React.FC<ListItemComponentProps> = (props) => {
  const { name, ...rest } = props;

  return <ListItemComponentStyle>
    {name}
  </ListItemComponentStyle>
}