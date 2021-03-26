import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import sunLight from '@/assets/svg/dashboard/sun.svg';
import sunDark from '@/assets/svg/dashboard/sun-dark.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 7,
      minHeight: '203px',
      boxShadow: '3px 0px 15px rgba(78, 81, 97, 0.14)',
    },
    content: {
      flex: 1,
      backgroundImage: `url(${theme.palette.type === 'light' ? sunLight : sunDark})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '161px 162px',
      backgroundPosition: 'bottom right',
    },
    item: {
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
    },
    subTitle: {
      fontSize: 21,
      lineHeight: '29px',
      letterSpacing: '0.16px',
      color: '#777874',
    },
  }),
);

export default useStyles;
