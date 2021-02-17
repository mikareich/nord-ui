import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { black, getThemeProperty } from "../../utils";

const types = ["filled", "outlined", "rounded", "fab", "error"];

const outlinedStyle = (props) => css`
  background-color: transparent;
  border-color: ${getThemeProperty("primaryColor", props.theme)};
  color: ${getThemeProperty("textColor", props.theme)};

  &:not(:disabled) {
    &:hover,
    &:active {
      background-color: ${getThemeProperty(
        "primaryColorAccent1",
        props.theme
      )}1A;
      border-color: ${getThemeProperty("primaryColorAccent1", props.theme)};
    }
    &:focus {
      background-color: ${getThemeProperty(
        "primaryColorAccent1",
        props.theme
      )}4D;
      border-color: ${getThemeProperty("primaryColorAccent1", props.theme)};
    }
  }
`;

const filledStyle = (props) => css`
  background-color: ${getThemeProperty("primaryColor", props.theme)};

  &:not(:disabled) {
    &:hover,
    &:active {
      background-color: ${getThemeProperty("primaryColorAccent1", props.theme)};
    }
    &:focus {
      border-color: ${getThemeProperty("primaryColor", props.theme)};
      background-color: ${getThemeProperty("primaryColorAccent2", props.theme)};
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
  font-family: ${(props) => getThemeProperty("font", props.theme)};
  color: ${black};
  font-size: ${(props) => getThemeProperty("fontSize", props.theme)};
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
  ${(props) => props.rounded && filledStyle}
  ${(props) => props.fab && fabStyle}
  ${(props) => props.fab && filledStyle}

  ${(props) => props.outlined && outlinedStyle};
  ${(props) =>
    (types.every((type) => !props[type]) || props.filled) && filledStyle}
`;

export { Button };
