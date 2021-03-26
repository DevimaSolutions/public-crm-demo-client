import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layout: {
      display: 'flex',
      flexDirection: 'column',
    },
    root: {
      display: 'flex',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    contentWrapper: {
      flexGrow: 1,
      padding: theme.spacing(3.75),
    },
    content: {
      padding: theme.spacing(3.75, 0),
    },
  }),
);

export default useStyles;
