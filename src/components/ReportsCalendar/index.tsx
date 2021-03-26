import React, { HTMLAttributes } from 'react';
import { Card, CardContent } from '@material-ui/core';
import Calendar from '@/components/Calendar';
import ReportContent from '@/components/ReportContent';
import useStyles from './styles';
import { IRecord } from '../ReportContent/types';

const initRecordsState: Record<string, IRecord[]> = {
  [new Date().toISOString()]: [
    {
      time: new Date(),
      title: 'Test Title',
      description: 'Some test description',
    },
  ],
};
const ReportCellComponent = () => {
  return <ReportContent recordsLimit={2} />;
};

const ReportsCalendar: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Calendar cellContentComponent={ReportCellComponent} records={initRecordsState} />
      </CardContent>
    </Card>
  );
};

export default ReportsCalendar;
