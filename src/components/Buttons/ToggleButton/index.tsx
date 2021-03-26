import React, { useCallback } from 'react';
import Button from '../Button';
import { ToggleButtonProps } from './types';

const ToggleButton: React.FC<ToggleButtonProps> = ({
  children,
  onChange,
  selected,
  value,
  className,
  ...props
}) => {
  const clickHandler = useCallback(
    (e) => {
      if (onChange) {
        onChange(e, value);
      }
    },
    [value, onChange],
  );
  const variant = selected ? 'contained' : 'outlined';

  return (
    <Button onClick={clickHandler} variant={variant} className={className} {...props}>
      {children}
    </Button>
  );
};

export default ToggleButton;
