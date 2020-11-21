import React, { createContext, useReducer } from "react";

import { ThemeAction } from "../actions/theme";
import { light } from "../config/theme";
import { Theme } from "../model/Theme";
import { themeReducer } from "../reducers/theme";

export const defaultThemeState: Theme = light;

export type ThemeListContext = {
  ThemeState: Theme;
  ThemeDispatch: React.Dispatch<ThemeAction>;
};

export const ThemeState = createContext<Theme | undefined>(undefined);

export const ThemeDispatch = React.createContext<
  React.Dispatch<ThemeAction> | undefined
>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, defaultThemeState);
  return (
    <ThemeState.Provider value={state}>
      <ThemeDispatch.Provider value={dispatch}>
        {children}
      </ThemeDispatch.Provider>
    </ThemeState.Provider>
  );
};

export const useThemeState = (): Theme => {
  const context = React.useContext(ThemeState);
  if (!context) {
    throw new Error("Please use within ThemeStateProvider");
  }
  return context;
};

export const useThemeDispatch = (): React.Dispatch<ThemeAction> => {
  const context = React.useContext(ThemeDispatch);
  if (!context) {
    throw new Error("Please use within ThemeDispatchProvider");
  }
  return context;
};
