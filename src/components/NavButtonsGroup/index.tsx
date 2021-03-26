import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import { Periods } from '@/types/periods';
import useStyles from './styles';
import { INavButtonGroupProps } from './types';

const NavButtonsGroup: React.FC<INavButtonGroupProps> = ({
  state,
  setChanges,
  ...domProps
}: INavButtonGroupProps) => {
  const classes = useStyles();
  return (
    <div className={classes.navBlock}>
      <ButtonGroup size="large" className={classes.btnGroup} color="primary">
        {Object.values(Periods).map((key) => (
          <Button
            key={key}
            className={state === key ? classes.activeBtn : classes.btn}
            onClick={() => setChanges(key)}
          >
            {key}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default NavButtonsGroup;
