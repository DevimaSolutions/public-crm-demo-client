import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    outlinedSuccess: {
      borderColor: theme.palette.success.main,
      color: theme.palette.success.main,
    },
    outlinedError: {
      borderColor: theme.palette.error.main,
      color: theme.palette.error.main,
    },
    outlinedWarning: {
      borderColor: theme.palette.warning.main,
      color: theme.palette.warning.main,
    },
    outlinedInfo: {
      borderColor: theme.palette.info.main,
      color: theme.palette.info.main,
    },
    containedSuccess: {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.success.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.success.dark,
      },
    },
    containedError: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.error.dark,
      },
    },
    containedWarning: {
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.warning.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.warning.dark,
      },
    },
    containedInfo: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.info.dark,
      },
    },
  }),
);

export default useStyles;
