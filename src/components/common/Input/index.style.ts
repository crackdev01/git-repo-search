import { InputHTMLAttributes } from 'react';
import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from '../../../styles/type';

type InputComponentStyleProps = StyledComponentProps &
  Pick<InputHTMLAttributes<HTMLInputElement>, 'disabled'> & {
    label?: string;
    error?: boolean;
    border?: boolean;
    inputSize: 'regular' | 'large';
  };

export const InputComponentStyle = styled(
  'div'
)<InputComponentStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    paddingLeft: '16px',
    paddingRight: '16px',
    color: customTheme.colors.white,
    borderRadius: '12px',
    outline: 'none',
    height: '5.5rem',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    border: 'solid',
    borderWidth: '2px',
    borderColor: customTheme.colors.primary40,

    ':has(div.focused)': {
      outline: `1px solid ${customTheme.colors.primaryLight80}`,
    },

    ':has(div.error)': {
      outline: `1px solid ${customTheme.colors.errorDark}`,
    },

    '.text-container': {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: customTheme.fonts.oneFont,
      width: '100%',
      flex: 1,

      '.label': {
        color: customTheme.colors.primaryLight80,
        fontSize: '1rem',
        marginBottom: '0.5rem'
      },

      '.text': {
        fontFamily: 'inherit',
        fontSize: '1.3rem',
        padding: '0px',

        '.MuiInputBase-input': {
          color: 'inherit',
          padding: '0px',
          fontFamily: 'inherit',
        },
      },
    },

    '.icon-container': {
      flex: '0 0 24px',
      height: '24px',
    },

    '.front': {
      marginRight: '8px',
    },

    '.back': {
      marginLeft: '8px',
    },
  };
});
