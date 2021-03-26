import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { eachDayOfInterval, lastDayOfMonth, lastDayOfWeek, startOfWeek } from 'date-fns';
import { eachWeekOfInterval } from 'date-fns/esm';
import React, { HTMLAttributes, useMemo, useState } from 'react';
import dateUtils from '@/utils/dates';
import Cell from './components/Cell';
import Header from './components/Header';
import useStyles from './styles';
import { CalendarTypes, ICalendarProps } from './types';
import Button from '../Buttons/Button';

const getMonthDatesGrid = (date: Date) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstDayInGrid = startOfWeek(firstDayOfMonth);
  const weeks = eachWeekOfInterval({
    start: firstDayInGrid,
    end: lastDayOfMonth(date),
  });

  return weeks.map((firstDayOfWeek) =>
    eachDayOfInterval({
      start: firstDayOfWeek,
      end: lastDayOfWeek(firstDayOfWeek),
    }),
  );
};

const getWeekDatesGrid = (date: Date) => {
  return [eachDayOfInterval({ start: startOfWeek(date), end: lastDayOfWeek(date) })];
};

function Calendar<T>({
  className,
  onCellClick,
  cellContentComponent: CellContentComponent,
  records,
}: ICalendarProps<T>): JSX.Element {
  const classes = useStyles();
  const [type, setType] = useState(CalendarTypes.month);
  const [date, setDate] = useState(new Date());
  const matches = useMediaQuery('(max-width:1600px)');
  const grid = useMemo(
    () => (type === CalendarTypes.month ? getMonthDatesGrid(date) : getWeekDatesGrid(date)),
    [type, date],
  );

  const typeChangeHandler = (newType: CalendarTypes) => {
    setType(newType);
  };

  const dateChangeHandler = (newDate: Date) => {
    setDate(newDate);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header
          date={date}
          type={type}
          onTypeChange={typeChangeHandler}
          onDateChange={dateChangeHandler}
        />
      </Grid>
      <Grid item xs={12}>
        <TableContainer className={className} component={Paper}>
          <Table aria-label="calendar dates table">
            <TableHead>
              <TableRow>
                {dateUtils.getWeekDays(matches).map((day) => (
                  <TableCell key={day} align="center" className={classes.gridHeader}>
                    {day}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {grid.map((row) => (
                <TableRow key={row[0].toString()}>
                  {row.map((recordDate) => (
                    <Cell
                      key={recordDate.toString()}
                      date={recordDate}
                      eventsLimit={type === CalendarTypes.month ? 2 : 8}
                      disabled={date.getMonth() !== recordDate.getMonth()}
                      onClick={() => onCellClick?.()}
                    >
                      <CellContentComponent data={records[recordDate.toString()]} />
                    </Cell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default Calendar;
