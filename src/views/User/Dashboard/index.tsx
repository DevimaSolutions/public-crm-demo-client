import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { EarningsCard, HelloCard, OverallCard, RevenueCard } from '@/components/Cards';
import useStyles from './styles';

const Home: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <EarningsCard />
            <HelloCard className={classes.spacing} />
          </Grid>
          <Grid item xs={12} md={8}>
            <RevenueCard />
            <OverallCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
