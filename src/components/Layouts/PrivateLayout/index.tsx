import React from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { LayoutProps } from '../types';
import useStyles from './styles';

const PrivateLayout: React.FC<LayoutProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <Navbar />
      <div className={classes.root}>
        <Sidebar />
        <main className={classes.contentWrapper}>
          <div className={classes.toolbar} />
          <div className={classes.content}>{children}</div>
        </main>
      </div>
    </div>
  );
};
export default PrivateLayout;
