import { ButtonProps } from '../Button/types';

export type ToggleButtonProps = ButtonProps & {
  value: any;
  selected?: boolean;
  onChange?: (event: any, value: any) => void;
};
