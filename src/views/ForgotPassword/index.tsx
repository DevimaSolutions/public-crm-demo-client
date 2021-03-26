import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RestoreOutlinedIcon from '@material-ui/icons/RestoreOutlined';
import EmailOutlined from '@material-ui/icons/EmailOutlined';
import Typography from '@material-ui/core/Typography';
import Button from '@/components/Buttons/Button';
import { useFormik } from 'formik';
import useStyles from './styles';
import validationSchema from './validations';

const ForgotPassword: React.FC = () => {
  const classes = useStyles();

  const onSubmitHandler = (val: { email: string }) => {
    console.log(val);
  };

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    validationSchema,
    onSubmit: onSubmitHandler,
    initialValues: {
      email: '',
    },
  });

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={false} md={7} className={classes.bg}>
        <div className={classes.image} />
      </Grid>
      <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <RestoreOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forgot Password
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
            <Grid container justify="flex-end">
              <Link href="/login" variant="inherit" className={classes.link}>
                Login here
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
                Reset
              </Button>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
