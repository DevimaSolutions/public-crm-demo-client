import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    list: {
      minWidth: '8.75rem',
      padding: 0,
    },
    listIcon: {
      minWidth: '14px',
      marginRight: '7px',
      '& > svg': {
        width: '14px',
        height: '14px',
      },
    },
    listText: {
      fontSize: '13px',
    },
    listItem: {
      '&:not(:first-child)': {
        marginTop: '7px',
      },
      '&:not(:last-child)': {
        marginBottom: '7px',
      },
    },
    avatar: {
      width: '40px',
      height: '40px',
    },
    btn: {
      width: '40px',
      height: '40px',
    },
    toggleBtn: {
      display: 'flex',
      cursor: 'pointer',
    },
    user: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginRight: theme.spacing(1.375),
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    userName: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: 1,
      textAlign: 'right',
      marginBottom: theme.spacing(0.625),
    },
    userStatus: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 0.5,
      textAlign: 'right',
    },
  }),
);

export default useStyles;
