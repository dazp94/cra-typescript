import React, { ReactNode } from "react";
import styled from "styled-components";

import { changeTheme } from "../actions/theme";
import { useThemeDispatch, useThemeState } from "../context/Theme";
import Button from "./Button";

export const Themer = () => {
  const themeDispatch = useThemeDispatch();
  const onClick = () => themeDispatch(changeTheme());
  return (
    <Button style={{ background: "cyan", width: 100 }} onClick={onClick}>
      Try me
    </Button>
  );
};

export const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const theme = useThemeState();

  const ThemeWrapper = styled.div`
    ${theme}
  `;

  return <ThemeWrapper>{children}</ThemeWrapper>;
};
