import { Periods } from '@/types/periods';
import { HTMLAttributes } from 'react';

export interface IChartProps extends HTMLAttributes<HTMLDivElement> {
  period: Periods;
}
