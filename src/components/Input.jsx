/** @jsxImportSource @emotion/react */
/* eslint-disable react/jsx-props-no-spreading */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";

const types = ["clear", "outlined"];

const filledStyle = (props) => css`
  background-color: ${props.theme.backgroundAccent1};
  border-bottom: 2px solid ${props.theme.border};
  border-radius: 5px 5px 0 0;
  &:focus {
    background-color: ${props.theme.backgroundAccent2};
    border-color: ${props.theme.primaryColor};
  }
`;

const InputStyle = styled.input`
  padding: 12px 16px;
  min-width: 280px;
  position: relative;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.defaultFontSize};
  color: ${(props) => props.theme.textColor};
  border: unset;
  background-color: unset;
  outline: none;
  transition: 200ms;

  &::placeholder {
    color: ${(props) => props.theme.textColorLight};
  }

  ${(props) => !types.includes(props) && filledStyle}
`;
const InputWrapper = styled.input`
  padding: 12px 16px;
  min-width: 280px;
  position: relative;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.defaultFontSize};
  color: ${(props) => props.theme.textColor};
  border: unset;
  background-color: unset;
  outline: none;
  transition: 200ms;

  &::placeholder {
    color: ${(props) => props.theme.textColorLight};
  }

  ${(props) => !types.includes(props) && filledStyle}
`;

const Input = (props) => {
  <InputWrapper>
    {props.prefix}
    <InputStyle />
  </InputWrapper>;
};
export { Input };
