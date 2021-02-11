import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { black, lightTheme } from "../../utils";

const types = ["contained", "outlined", "rounded", "fab", "error"];

const outlinedStyle = (props) => css`
  background-color: transparent;
  border-color: ${props.theme.primaryColor || lightTheme.primaryColor};
  color: ${props.theme.textColor || lightTheme.textColor};

  &:not(:disabled) {
    &:hover,
    &:active {
      background-color: ${props.theme.primaryColorAccent1 ||
      lightTheme.primaryColorAccent1}1A;
      border-color: ${props.theme.primaryColorAccent1 ||
      lightTheme.primaryColorAccent1};
    }
    &:focus {
      background-color: ${props.theme.primaryColorAccent1 ||
      lightTheme.primaryColorAccent1}4D;
      border-color: ${props.theme.primaryColorAccent1 ||
      lightTheme.primaryColorAccent1};
    }
  }
`;

const containedStyle = (props) => css`
  background-color: ${props.theme.primaryColor || lightTheme.primaryColor};

  &:not(:disabled) {
    &:hover,
    &:active {
      background-color: ${props.theme.primaryColorAccent1 ||
      lightTheme.primaryColorAccent1};
    }
    &:focus {
      border-color: ${props.theme.primaryColor || lightTheme.primaryColor};
      background-color: ${props.theme.primaryColorAccent2 ||
      lightTheme.primaryColorAccent2};
    }
  }
`;

const fabStyle = css`
  padding: 8px;
  border-radius: 50%;
`;

const roundedStyle = css`
  border-radius: 99999px;
`;

const disabledStyle = css`
  opacity: 50%;
  cursor: not-allowed;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ${(props) => props.theme.font || lightTheme.font};
  color: ${black};
  font-size: ${(props) => props.theme.fontSize || lightTheme.fontSize};
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 200ms;
  border: 3px solid transparent;
  user-select: none;
  position: relative;

  ${(props) => props.disabled && disabledStyle};
  ${(props) => props.rounded && roundedStyle};
  ${(props) => props.rounded && containedStyle}
  ${(props) => props.fab && fabStyle}
  ${(props) => props.fab && containedStyle}

  ${(props) => props.outlined && outlinedStyle};
  ${(props) =>
    (types.every((type) => !props[type]) || props.contained) && containedStyle}
`;

export { Button };
