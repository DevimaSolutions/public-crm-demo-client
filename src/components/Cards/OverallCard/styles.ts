import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 7,
      minHeight: '291px',
      boxShadow: '3px 0px 15px rgba(78, 81, 97, 0.14)',
    },
    content: {
      width: '100%',
    },
    header: {
      display: 'flex',
      paddingBottom: '10px',
    },
    title: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: '25px',
    },
    titleBlock: {
      width: '180px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    revenueBlock: {
      marginTop: 5,
      display: 'flex',
      fontSize: 16,
      lineHeight: '15px',
    },
  }),
);

export default useStyles;
