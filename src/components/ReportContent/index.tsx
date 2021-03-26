import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { format } from 'date-fns';
import { IReportContentProps } from './types';
import useStyles from './styles';

const ReportContent: React.FC<IReportContentProps> = ({
  data,
  recordsLimit,
  className,
  ...domProps
}) => {
  const classes = useStyles();
  const renderData = data ?? [];

  return (
    <Grid container>
      <Grid item xs={12}>
        {renderData
          .filter((_item, index) => index < recordsLimit)
          .map((item) => (
            <Grid container className={classes.body}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">{format(item.time, 'HH:mm')}</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="subtitle2">{item.title}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" className={classes.description}>
                      {item.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        {renderData.length > recordsLimit && (
          <Typography>... +{renderData.length - recordsLimit}</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default ReportContent;
