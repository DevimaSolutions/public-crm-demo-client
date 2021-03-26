import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import EmailOutlined from '@material-ui/icons/EmailOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Typography from '@material-ui/core/Typography';
import Button from '@/components/Buttons/Button';
import { useFormik } from 'formik';
import auth from '@DevimaSolutions/o-auth';
import { useSnackbar } from 'notistack';
import useStyles from './styles';
import validationSchema from './validations';

const Login: React.FC = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmitHandler = (val: { email: string; password: string }) => {
    auth().signIn(val.email, val.password);
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldError,
    values,
    errors,
    touched,
  } = useFormik({
    validationSchema,
    onSubmit: onSubmitHandler,
    initialValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    const unsubscribe = auth().onAuthFailed((res) => {
      const errorMessage =
        (res as any)?.data?.message ?? 'Sorry, something went wrong. Please try again.';

      if (res.status >= 400 && res.status < 500) {
        setFieldError('email', ' ');
        setFieldError('password', errorMessage);
        return;
      }

      enqueueSnackbar(errorMessage, {
        variant: 'error',
      });
    });
    return unsubscribe;
  }, [setFieldError, enqueueSnackbar]);

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={false} md={7} className={classes.bg}>
        <div className={classes.image} />
      </Grid>
      <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              // autoFocus
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.email && !!errors.email ? errors.email : null}
              error={touched.email && !!errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined className={classes.icon} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type={showPassword ? 'text' : 'password'}
              id="password"
              label="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && !!errors.password}
              helperText={touched.password && !!errors.password ? errors.password : null}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon className={classes.icon} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle-password-visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Grid container justify="flex-end">
              <Link href="/forgot-password" variant="inherit" className={classes.link}>
                Forgot password?
              </Link>
            </Grid>
            <Grid container justify="flex-end">
              <Button
                type="submit"
                size="large"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Login
              </Button>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
