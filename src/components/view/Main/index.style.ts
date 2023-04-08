import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from '../../../styles/type';

type MainViewStyleProps = StyledComponentProps & {};

export const MainViewStyle = styled('div')<MainViewStyleProps>(
  ({ theme }) => {
    const customTheme = theme as CustomTheme;

    return {
      width: '100%',
      height: '100vh',
      backgroundColor: customTheme.colors.primary80,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',

      '.panel': {
        width: '70%',
        height: '40rem',
        borderRadius: '0.5rem',
        padding: '2rem 2rem',
        boxSizing: 'border-box',

        [customTheme.breakpoints.down('md')]: {
          width: '100%',
          height: '100%',
          // display: 'grid'
        }
      },

      '.title': {
        [customTheme.breakpoints.down('md')]: {
          height: '2rem'
        }
      },

      '.button': {
        width: '100%',
        height: '3rem'
      },

      '.row-gap-1rem': {
        marginTop: '1rem'
      },

      '.font-family-main': {
        fontFamily: customTheme.fonts.mainFont
      },

      '.font-weight-bold': {
        fontWeight: customTheme.fontWeights.semibold
      },

      '.color-white': {
        color: customTheme.colors.white
      },

      '.bg-color-primary40': {
        backgroundColor: customTheme.colors.primary40
      }
    }
  }
);