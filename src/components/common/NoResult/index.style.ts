import { StyledComponentProps, styled } from "@mui/material";
import { CustomTheme } from "../../../styles/type";

type NoResultComponentViewStyleProps = StyledComponentProps & {
  imgLink: string;
};

export const NoResultComponentStyle = styled(
  "div"
)<NoResultComponentViewStyleProps>(({ theme, imgLink }) => {
  const customTheme = theme as CustomTheme;

  return {
    '.no-result-img': {
      width: '25rem',
      height: '14rem',
      backgroundImage: `url(${imgLink})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      opacity: 0.5,

      [customTheme.breakpoints.down('md')]: {
        width: '16rem',
      }
    },

    '.comment': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },

    '.color-white': {
      margin: 'auto',
      fontSize: '1.2rem',
      color: customTheme.colors.white
    }
  }
});
