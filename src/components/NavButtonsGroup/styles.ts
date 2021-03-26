import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    navBlock: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
    },
    btn: {
      backgroundColor: 'white',
      color: '#5435B8',
    },
    activeBtn: {
      backgroundColor: '#5435B8',
      color: 'white',
      '&:hover': {
        backgroundColor: '#5435B8',
        color: 'white',
      },
    },
    btnGroup: {
      height: 32,
      border: '1px solid #5435B8',
      borderRadius: '10px',
      '& > *': {
        textTransform: 'unset',
      },
    },
  }),
);

export default useStyles;
