import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      textAlign: 'left',
      borderBottom: '1px solid rgba(224, 224, 224, 1)',
      marginBottom: theme.spacing(1),
    },
    description: {
      fontWeight: 'bold',
    },
  }),
);

export default useStyles;
