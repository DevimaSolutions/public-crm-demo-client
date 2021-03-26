import { createSelector } from 'reselect';
import { IApplicationState } from '../types';

const authorizationSelector = (state: IApplicationState) => state.authorization;

export const userSelector = createSelector(
  authorizationSelector,
  (authorization) => authorization.user,
);

export const userRoleSelector = createSelector(
  authorizationSelector,
  (authorization) => authorization.user?.role,
);
