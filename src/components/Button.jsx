import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { black, blue } from "../utils";

const types = ["default", "outlined", "rounded", "fab", "error"];

const outlinedStyle = (props) => css`
  background-color: transparent;
  border-color: ${props.theme.primaryColor};
  color: ${props.theme.textColor};

  &:not(:disabled) {
    &:hover,
    &:active {
      background-color: rgba(146, 209, 227, 0.1);
      border-color: ${blue[200]};
    }
    &:focus {
      background-color: rgba(146, 209, 227, 0.3);
      border-color: ${blue[200]};
    }
  }
`;

const containedStyle = (props) => css`
  background-color: ${props.theme.primaryColor};

  &:not(:disabled) {
    &:hover,
    &:active {
      background-color: ${blue[200]};
    }
    &:focus {
      border-color: ${props.theme.primaryColor};
      background-color: ${blue[100]};
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
  font-family: ${(props) => props.theme.font};
  color: ${black};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 200ms;
  border: 3px solid transparent;
  user-select: none;

  ${(props) => props.disabled && disabledStyle};
  ${(props) => props.rounded && roundedStyle};
  ${(props) => props.rounded && containedStyle}
  ${(props) => props.fab && fabStyle}
  ${(props) => props.fab && containedStyle}

  ${(props) => props.outlined && outlinedStyle};
  ${(props) =>
    (types.every((type) => !props[type]) || props.default) && containedStyle}
`;

export { Button };
