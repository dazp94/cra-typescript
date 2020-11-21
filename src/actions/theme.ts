import { Theme } from "../model/Theme";

// Type of Actions allowed
export enum ThemeActionTypes {
  CHANGE_THEME = "CHANGE_THEME"
}

export type ThemeAction = {
  type: ThemeActionTypes;
  payload?: Theme;
};

// Action Generator for CHANGE
export const changeTheme = () => {
  return {
    type: ThemeActionTypes.CHANGE_THEME
  };
};
