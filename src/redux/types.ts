import { IAuthorizationState } from './authorization/types';
import { ISettingsState } from './settings/types';

export interface IApplicationState {
  settings: ISettingsState;
  authorization: IAuthorizationState;
}
