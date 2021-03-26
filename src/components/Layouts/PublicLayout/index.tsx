import React from 'react';
import { LayoutProps } from '../types';
import useStyles from './styles';

const PublicLayout: React.FC<LayoutProps> = ({ children }: LayoutProps): JSX.Element => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};
export default PublicLayout;
