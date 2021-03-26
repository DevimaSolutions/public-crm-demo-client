import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { ISettingsState, SAVE_SIDEBAR, SAVE_THEME, SettingsAction } from './types';

const initialState: ISettingsState = {
  sidebar: true,
  theme: 'light',
};

export function reducer(
  state: ISettingsState = initialState,
  action: SettingsAction,
): ISettingsState {
  switch (action.type) {
    case SAVE_SIDEBAR:
      return { ...state, sidebar: action.payload };
    case SAVE_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}

export default persistReducer(
  {
    key: 'settings',
    storage,
    stateReconciler: autoMergeLevel2,
  },
  reducer,
);
