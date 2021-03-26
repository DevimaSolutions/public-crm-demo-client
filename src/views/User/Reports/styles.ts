import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      margin: theme.spacing(0, 1),
    },
    allButton: {
      margin: theme.spacing(0, 1),
    },
  }),
);

export default useStyles;
