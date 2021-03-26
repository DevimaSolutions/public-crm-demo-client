import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 260;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      padding: theme.spacing(0, 1.25),
      transition: theme.transitions.create(['width', 'padding'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      padding: theme.spacing(0, 1.25),
      transition: theme.transitions.create(['width', 'padding'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    logo: {
      width: '105px',
      height: '32px',
      '@global': {
        '.iconText': {
          opacity: 0,
        },
      },
    },
    logoOpen: {
      '@global': {
        '.iconText': {
          opacity: 1,
        },
      },
    },
    listItem: {
      margin: theme.spacing(0, 0, 1),
    },
  }),
);

export default useStyles;
