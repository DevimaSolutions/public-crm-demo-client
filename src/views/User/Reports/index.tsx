import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import Button from '@/components/Buttons/Button';
import ReportsCalendar from '@/components/ReportsCalendar';
import useStyles from './styles';

const Reports: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h5" className={classes.title}>
              Reports
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Grid container justify="flex-end">
              <Button
                size="medium"
                variant="contained"
                color="primary"
                className={classes.allButton}
              >
                All
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ReportsCalendar />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Reports;
