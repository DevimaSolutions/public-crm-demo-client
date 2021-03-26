import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    test: {
      margin: theme.spacing(),
    },
  }),
);

export default useStyles;
