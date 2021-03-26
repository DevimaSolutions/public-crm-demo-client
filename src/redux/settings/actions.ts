import { SaveSidebarAction, SaveThemeAction, SAVE_SIDEBAR, SAVE_THEME } from './types';

export function saveSidebar(payload: boolean): SaveSidebarAction {
  return {
    type: SAVE_SIDEBAR,
    payload,
  };
}

export function saveTheme(payload: string): SaveThemeAction {
  return {
    type: SAVE_THEME,
    payload,
  };
}
