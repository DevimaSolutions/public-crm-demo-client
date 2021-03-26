import { createSelector } from 'reselect';
import { IApplicationState } from '../types';
import { ISettingsState } from './types';

export const settingsSelector = (state: IApplicationState): ISettingsState => state.settings;

export const sidebarSelector = createSelector(settingsSelector, (settings) => settings.sidebar);
export const themeSelector = createSelector(settingsSelector, (settings) => settings.theme);
