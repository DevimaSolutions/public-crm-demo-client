import React, { cloneElement, useState } from 'react';
import Box from '@material-ui/core/Box';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import useStyles from './styles';
import { AppPopperProps } from './types';

const AppPopper: React.FC<AppPopperProps> = ({
  placement,
  arrow,
  open,
  className,
  onClose,
  content,
  children,
}) => {
  const classes = useStyles();
  const [arrowRef, setArrowRef] = useState<HTMLElement | null>(null);
  const [childNode, setChildNode] = useState<HTMLElement | null>(null);

  return (
    <div className={className}>
      {cloneElement(children, { ...children.props, ref: setChildNode })}
      <Popper
        open={open}
        anchorEl={childNode}
        placement={placement}
        transition
        className={classes.popper}
        modifiers={{
          flip: {
            enabled: false,
          },
          preventOverflow: {
            enabled: false,
            boundariesElement: 'scrollParent',
          },
          arrow: {
            enabled: arrow,
            element: arrowRef,
          },
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper elevation={0} className={classes.popoverRoot}>
              <ClickAwayListener onClickAway={() => onClose && onClose()}>
                <Paper elevation={0}>
                  {arrow ? <span className={classes.arrow} ref={setArrowRef} /> : null}
                  <Box className={classes.content}>{content}</Box>
                </Paper>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

AppPopper.defaultProps = {
  onClose: () => {},
  arrow: true,
  placement: 'bottom',
};

export default AppPopper;
