export const SAVE_SIDEBAR = 'settings/SAVE_SIDEBAR';
export const SAVE_THEME = 'settings/SAVE_THEME';

export type SaveSidebarAction = {
  type: typeof SAVE_SIDEBAR;
  payload: boolean;
};

export type SaveThemeAction = {
  type: typeof SAVE_THEME;
  payload: string;
};

export type SettingsAction = SaveSidebarAction | SaveThemeAction;

export interface ISettingsState {
  sidebar: boolean;
  theme: string;
}
