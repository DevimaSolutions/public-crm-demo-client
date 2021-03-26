import { FC, HTMLAttributes } from 'react';

export enum CalendarTypes {
  month = 'month',
  week = 'week',
}

export interface ICalendarContentProps<T> extends HTMLAttributes<HTMLDivElement> {
  data?: T[];
}

export interface ICalendarProps<T> extends HTMLAttributes<HTMLDivElement> {
  onCellClick?: () => void;
  cellContentComponent: FC<ICalendarContentProps<T>>;
  records: Record<string, T[]>;
}
