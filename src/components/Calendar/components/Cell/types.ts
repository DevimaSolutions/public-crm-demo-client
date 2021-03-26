import { HTMLAttributes } from 'react';

export interface ICellProps extends HTMLAttributes<HTMLDivElement> {
  date: Date;
  eventsLimit: number;
  disabled?: boolean;
  onClick?: () => void;
}
