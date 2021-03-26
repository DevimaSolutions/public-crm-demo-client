import { User } from '@/types/user';
import { AuthorizationAction, AUTHORIZE, LOG_OUT } from './types';

export const authorized = (user: User): AuthorizationAction => {
  return {
    type: AUTHORIZE,
    payload: user,
  };
};

export const logOut = (): AuthorizationAction => {
  return {
    type: LOG_OUT,
  };
};
