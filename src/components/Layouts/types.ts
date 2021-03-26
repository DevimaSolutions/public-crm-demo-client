import { ReactNode } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface LayoutProps extends RouteComponentProps {
  children: ReactNode;
}
