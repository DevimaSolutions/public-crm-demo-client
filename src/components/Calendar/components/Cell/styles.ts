import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cell: {
      height: '8rem',
      padding: theme.spacing(0),
      border: '1px solid rgba(224, 224, 224, 1)',
      '&:hover': {
        backgroundColor: 'rgba(84, 53, 184, 0.1)',
        cursor: 'pointer',
      },
    },
    disabledCell: {
      color: theme.palette.text.disabled,
      backgroundColor: theme.palette.background.default,
      cursor: 'not-allowed',
    },
    notClickable: {
      '&:hover': {
        backgroundColor: theme.palette.background.default,
        cursor: 'not-allowed',
      },
    },
    cellButton: {
      height: '100%',
      borderRadius: 0,
    },
    todayShape: {
      textAlign: 'center',
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      width: theme.typography.fontSize * 2,
      height: theme.typography.fontSize * 2,
      borderRadius: '50%',
    },
    todayText: {
      marginTop: theme.spacing(0.1),
    },
    cellHeader: {
      padding: theme.spacing(2, 1),
    },
    cellBody: {
      padding: theme.spacing(0, 1),
    },
  }),
);

export default useStyles;
