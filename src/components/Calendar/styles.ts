import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridHeader: {
      border: '1px solid rgba(224, 224, 224, 1)',
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0),
    },
  }),
);

export default useStyles;
