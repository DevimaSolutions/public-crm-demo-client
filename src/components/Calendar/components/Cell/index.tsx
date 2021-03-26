import React from 'react';
import { Grid, TableCell, Typography, ButtonBase } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { differenceInBusinessDays, differenceInCalendarDays, format } from 'date-fns';
import clsx from 'clsx';
import { ICellProps } from './types';
import useStyles from './styles';

const Cell: React.FC<ICellProps> = ({
  date,
  eventsLimit,
  disabled,
  className,
  onClick,
  children,
  ...domProps
}) => {
  const classes = useStyles();
  const currentDate = new Date();
  const businessDiff = differenceInBusinessDays(date, currentDate);
  const calendarDiff = differenceInCalendarDays(date, currentDate);
  const isEditable =
    businessDiff <= 0 && businessDiff > -3 && date.getMonth() === currentDate.getMonth();
  const isToday = calendarDiff === 0;
  const isFuture = calendarDiff > 0;

  const clickHandler = () => {
    onClick?.();
  };

  return (
    <TableCell
      component="td"
      scope="row"
      className={clsx(classes.cell, className, {
        [classes.disabledCell]: disabled,
        [classes.notClickable]: disabled || isFuture,
      })}
    >
      <ButtonBase
        onClick={clickHandler}
        disabled={disabled || isFuture}
        className={classes.cellButton}
      >
        <Grid container>
          <Grid item xs={12}>
            <Grid container className={classes.cellHeader}>
              <Grid container item xs={4} justify="flex-start">
                {isToday ? (
                  <div className={classes.todayShape}>
                    <Typography className={classes.todayText}>{format(date, 'dd')}</Typography>
                  </div>
                ) : (
                  <Typography>{format(date, 'dd')}</Typography>
                )}
              </Grid>
              {isEditable && (
                <Grid container item xs={8} justify="flex-end">
                  <Edit />
                </Grid>
              )}
            </Grid>
            <Grid container className={classes.cellBody}>
              <Grid item xs={12}>
                {children}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ButtonBase>
    </TableCell>
  );
};

export default Cell;
