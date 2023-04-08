import { StyledComponentProps, styled } from "@mui/material";
import { CustomTheme } from "../../../styles/type";

type ListItemComponentStyleProps = StyledComponentProps;

export const ListItemComponentStyle = styled(
  "div"
)<ListItemComponentStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: customTheme.colors.primary60,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: customTheme.colors.primary80,
    borderRadius: '5px',
    color: customTheme.colors.white,
    boxSizing: 'border-box',
    padding: '1rem 2rem',

    "&:hover": {
      backgroundColor: customTheme.colors.primary40
    },
  }
});
