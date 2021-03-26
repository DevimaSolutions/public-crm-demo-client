import React, { MouseEvent } from 'react';
import { Grid, IconButton, Typography } from '@material-ui/core';
import { ToggleButtonGroup } from '@material-ui/lab';
import ToggleButton from '@/components/Buttons/ToggleButton';
import {
  addMonths,
  addWeeks,
  format,
  lastDayOfWeek,
  startOfWeek,
  subMonths,
  subWeeks,
} from 'date-fns';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { IHeaderProps } from './types';
import { CalendarTypes } from '../../types';
import useStyles from './styles';

const Header: React.FC<IHeaderProps> = ({ date, type, onDateChange, onTypeChange }) => {
  const classes = useStyles();
  const typeChangeHandler = (_event: MouseEvent<HTMLElement>, newType: CalendarTypes | null) => {
    if (newType) {
      onTypeChange(newType);
    }
  };

  const prevDateHandler = () => {
    onDateChange(type === CalendarTypes.month ? subMonths(date, 1) : subWeeks(date, 1));
  };

  const nextDateHandler = () => {
    onDateChange(type === CalendarTypes.month ? addMonths(date, 1) : addWeeks(date, 1));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <ToggleButtonGroup
          value={type}
          exclusive
          color="primary"
          onChange={typeChangeHandler}
          aria-label="calendar-type"
        >
          <ToggleButton value={CalendarTypes.week} color="primary" aria-label="left aligned">
            <Typography>Week</Typography>
          </ToggleButton>
          <ToggleButton value={CalendarTypes.month} color="primary" aria-label="right aligned">
            <Typography>Month</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid container item xs={6} justify="flex-end">
        <Grid container item xs={2} justify="center">
          <IconButton color="primary" onClick={prevDateHandler}>
            <ArrowBackIos fontSize="small" />
          </IconButton>
        </Grid>
        <Grid container item xs={4} justify="center">
          <Typography className={classes.switchTitle}>
            {type === CalendarTypes.month
              ? format(date, 'MMMM yyyy')
              : `${format(startOfWeek(date), 'MMMM dd')} - ${format(
                  lastDayOfWeek(date),
                  'MMMM dd',
                )}`}
          </Typography>
        </Grid>
        <Grid container item xs={2} justify="center">
          <IconButton color="primary" onClick={nextDateHandler}>
            <ArrowForwardIos fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
