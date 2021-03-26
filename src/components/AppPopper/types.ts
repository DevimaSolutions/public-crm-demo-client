import { PopperPlacementType } from '@material-ui/core';
import { HTMLAttributes, ReactElement, MouseEvent } from 'react';

export interface AppPopperProps extends HTMLAttributes<HTMLDivElement> {
  content: ReactElement;
  children: ReactElement;
  open: boolean;
  onClose?: (e?: MouseEvent<Document>) => void;
  arrow?: boolean;
  placement?: PopperPlacementType;
}
