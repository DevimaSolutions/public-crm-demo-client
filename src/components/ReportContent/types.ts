import { ICalendarContentProps } from '@/components/Calendar/types';

export interface IRecord {
  time: Date;
  title: string;
  description: string;
}

export interface IReportContentProps extends ICalendarContentProps<IRecord> {
  recordsLimit: number;
}
