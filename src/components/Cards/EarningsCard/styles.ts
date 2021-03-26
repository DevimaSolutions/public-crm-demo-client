import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import lineLight from '@/assets/svg/dashboard/line-light.svg';
import lineDark from '@/assets/svg/dashboard/line-dark.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 7,
      boxShadow: '3px 0px 15px rgba(78, 81, 97, 0.14)',
    },
    content: {
      paddingBottom: '0 !important',
    },
    item: {
      minHeight: 200,
      margin: theme.spacing(3.125, 0),
      [theme.breakpoints.up('lg')]: {
        margin: theme.spacing(3.125, 4.75),
      },
    },
    title: {
      fontSize: 24,
      fontWeight: 'normal',
      lineHeight: '33px',
      letterSpacing: 0.16,
      marginBottom: 20,
      [theme.breakpoints.up('md')]: {
        marginBottom: 41,
      },
    },
    body: {
      display: 'flex',
      alignItems: 'flex-end',
      fontSize: 28,
      lineHeight: '39px',
      letterSpacing: '0.16px',
    },
    icon: {
      fontSize: 45,
      marginRight: 15,
      [theme.breakpoints.up('lg')]: {
        marginRight: 35,
      },
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0.875, 0),
      fontSize: 12,
      borderTop: '1px solid #E8E9E8',
      color: '#AFAFAF',
      [theme.breakpoints.up('lg')]: {
        paddingLeft: 35,
      },
    },
    footerIcon: {
      fontSize: 12,
      marginRight: 5,
    },
    divider: {
      height: 5,
      width: '100%',
      backgroundImage: `url(${theme.palette.type === 'light' ? lineLight : lineDark})`,
      backgroundRepeat: 'repeat-x',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
    },
  }),
);

export default useStyles;
