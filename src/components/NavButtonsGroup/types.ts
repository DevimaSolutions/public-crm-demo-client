import { Dispatch, HTMLAttributes, SetStateAction } from 'react';
import { Periods } from '@/types/periods';

export interface INavButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  state: string;
  setChanges: Dispatch<SetStateAction<Periods>>;
}
