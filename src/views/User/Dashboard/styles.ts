import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    spacing: {
      margin: theme.spacing(2, 0),
    },
  }),
);

export default useStyles;
