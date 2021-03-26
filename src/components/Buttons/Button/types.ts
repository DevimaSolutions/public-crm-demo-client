import { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';

export type ColorTypes = MuiButtonProps['color'] | 'error' | 'success' | 'warning' | 'info';
export type ButtonProps = { color?: ColorTypes } & Omit<MuiButtonProps, 'color'>;