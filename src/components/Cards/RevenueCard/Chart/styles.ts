import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      height: '300px',
    },
    axisStyle: {
      fontFamily: 'Cuprum',
      fontWeight: 400,
    },
  }),
);

export default useStyles;
