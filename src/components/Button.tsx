import React, { CSSProperties, ReactNode } from "react";
import styled from "styled-components";
import { useThemeState } from "../context/Theme";

type ButtonProps = {
  style?: CSSProperties;
  children: ReactNode;
  onClick: () => void;
};

const Button = ({ style, children, onClick }: ButtonProps) => {
  const theme = useThemeState();
  const StyledButton = styled.button`
    cursor: pointer;
    border-radius: 20px;
    border-style: none;
    color: ${style && style.color ? style.color : theme.background};
    background: ${style && style.background ? style.background : theme.color};
    width: ${style && style.width ? `${style.width}px` : "150px"};
    min-height: 30px;
    &:focus {
      outline: 0;
    }
  `;

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
