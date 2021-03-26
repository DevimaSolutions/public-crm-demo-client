import { makeStyles } from '@material-ui/core/styles';
import bg from '@/assets/svg/login/bg.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bg: {
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      backgroundColor: theme.palette.primary.main,
    },
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    padding: theme.spacing(1.4375, 6.325),
    margin: theme.spacing(9.875, 0, 0),
  },
  link: {
    fontSize: '18px',
  },
  icon: {
    color: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.54)' : 'white',
  },
}));

export default useStyles;
