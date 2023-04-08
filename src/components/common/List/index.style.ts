import { StyledComponentProps, styled } from "@mui/material";
import { CustomTheme } from "../../../styles/type";

type ListComponentStyleProps = StyledComponentProps;

export const ListComponentStyle = styled(
  "div"
)<ListComponentStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    width: '100%',
    maxHeight: '30rem',
    overflowY: 'auto',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: 0,

    '&::-webkit-scrollbar': {
      width: '0.5rem',
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: customTheme.colors.primary40,
      borderRadius: '10px'
    }
  }
});
