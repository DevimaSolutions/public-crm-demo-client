import { User } from '@/types/user';

export const AUTHORIZE = 'authorization/AUTHORIZE';
export const LOG_OUT = 'authorization/LOG_OUT';

export type AuthorizeAction = {
  type: typeof AUTHORIZE;
  payload: User;
};

export type LogoutAction = {
  type: typeof LOG_OUT;
};

export type AuthorizationAction = AuthorizeAction | LogoutAction;

export interface IAuthorizationState {
  user: User | null;
}
