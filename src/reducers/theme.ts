import { ThemeAction, ThemeActionTypes } from "../actions/theme";
import theme from "../config/theme";
import { Theme } from "../model/Theme";

export const themeReducer = (state: Theme, action: ThemeAction) => {
  switch (action.type) {
    case ThemeActionTypes.CHANGE_THEME:
      return state === theme.dark ? theme.light : theme.dark;
    default:
      return state;
  }
};
