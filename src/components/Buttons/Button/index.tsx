import React from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import clsx from 'clsx';
import { capitalize } from '@/constants/functions';
import useStyles from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ children, color = 'default', ...props }) => {
  const classes = useStyles();
  const { variant, className } = props;
  const style = classes?.[`${variant}${capitalize(color)}`];
  const colorProp =
    ['default', 'inherit', 'primary', 'secondary'].indexOf(color) > -1
      ? (color as MuiButtonProps['color'])
      : undefined;

  return (
    <MuiButton {...props} color={colorProp} className={clsx(style, className)}>
      {children}
    </MuiButton>
  );
};

Button.displayName = 'Button';
Button.defaultProps = {
  color: 'default',
};

export default Button;
