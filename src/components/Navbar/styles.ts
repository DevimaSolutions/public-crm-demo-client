import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      padding: theme.spacing(2.25, 3.75),
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - 73px)`,
      },
      width: `100% `,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - 260px)`,
      },
      width: '100% ',
      marginLeft: '260px',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    nav: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
    },
    userPopper: {
      marginLeft: '20px',
    },
  }),
);

export default useStyles;
