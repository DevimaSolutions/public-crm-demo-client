import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
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
    },
    title: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: '25px',
    },
    titleBlock: {
      display: 'flex',
      flexDirection: 'column',
    },
    revenueBlock: {
      display: 'flex',
      fontSize: 11,
      lineHeight: '15px',
    },
    current: {
      marginRight: 12,
      '& $target': {
        color: theme.palette.primary.main,
      },
    },
    before: {
      borderLeft: '1px solid',
      borderColor: theme.palette.text.primary,
      paddingLeft: 12,
      '& $target': {
        color: theme.palette.info.main,
      },
    },
    target: {
      marginRight: 4,
    },
  }),
);

export default useStyles;
