import { HTMLAttributes } from 'react';
import { CalendarTypes } from '../../types';

export interface IHeaderProps extends HTMLAttributes<HTMLDivElement> {
  date: Date;
  type: CalendarTypes;
  onTypeChange(newType: CalendarTypes): void;
  onDateChange(newDate: Date): void;
}
