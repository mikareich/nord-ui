/* eslint-disable jsx-a11y/click-events-have-key-events */
/** @jsx jsx */
/* eslint-disable react/jsx-props-no-spreading */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import { useRef } from "react";
import { lightTheme } from "../../utils/theme";
import { getThemeProperty } from "../../utils";

const types = ["clear", "outlined"];

const filledWrapperStyle = (props) => css`
  background-color: ${props.theme.name === "Light Theme"
    ? props.theme.backgroundAccent2
    : getThemeProperty("backgroundAccent1", props.theme)};
  border-bottom: 2px solid
    ${props.props.error
      ? getThemeProperty("errorColor", props.theme)
      : getThemeProperty("border", props.theme)};
  border-radius: 5px 5px 0 0;

  &:focus-within {
    background-color: ${getThemeProperty("backgroundAccent2", props.theme)};
    border-color: ${props.props.error
      ? getThemeProperty("errorColor", props.theme)
      : getThemeProperty("primaryColor", props.theme)};
  }
`;

const InputStyle = styled.input`
  border: unset;
  background-color: unset;
  height: 100%;
  width: 100%;
  outline: none;
  font-family: ${(props) => getThemeProperty("font", props.theme)};
  font-size: ${(props) => getThemeProperty("fontSize", props.theme)};
  color: ${(props) => getThemeProperty("textColor", props.theme)};
  padding: 0;
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 12px 0;

  &::placeholder {
    font-family: ${(props) => getThemeProperty("font", props.theme)};
    font-size: ${(props) => getThemeProperty("fontSize", props.theme)};
    color: ${(props) => getThemeProperty("textColorLight", props.theme)};
  }
`;

const InputWrapper = styled.div`
  padding: 0 16px;
  margin-bottom: 20px;
  min-width: 200px;
  width: fit-content;
  position: relative;
  background-color: unset;
  transition: 200ms;
  display: flex;
  gap: 8px;
  font-family: ${(props) => getThemeProperty("font", props.theme)};
  font-size: ${(props) => getThemeProperty("defaultFontSize", props.theme)};
  color: ${(props) => getThemeProperty("textColor", props.theme)};
  align-items: center;

  ${(props) =>
    (types.every((type) => !props[type]) || props.filled) &&
    filledWrapperStyle};

  &:focus-within {
    & .helper {
      opacity: 1;
    }
  }
`;

const AffixWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  color: ${(props) =>
    props.props.error
      ? getThemeProperty("errorColor", props.theme)
      : getThemeProperty("textColorLight", props.theme)};
  border-radius: 9999999px;
  padding: 8px;
  &:focus {
    background-color: ${(props) =>
      getThemeProperty("backgroundAccent1", props.theme)};
  }
`;

const HelperText = styled.span`
  transition: 200ms;
  position: absolute;
  top: calc(100% + 5px);
  font-size: ${(props) =>
    getThemeProperty("small2", props.theme.typeScale, lightTheme.typeScale)};
  color: ${(props) =>
    props.props.error
      ? getThemeProperty("errorColor", props.theme)
      : getThemeProperty("textColorLight", props.theme)};
  opacity: 0;
`;

const Input = (props) => {
  const { prefix, onPrefix, suffix, onSuffix, theme, error, helper } = props;

  return (
    <InputWrapper props={{ error, theme }}>
      {prefix ? (
        <AffixWrapper
          props={{ error, theme }}
          {...(onPrefix
            ? { role: "button", tabIndex: "0", onClick: onPrefix }
            : "")}
        >
          {prefix}
        </AffixWrapper>
      ) : null}
      <InputStyle {...props} />
      {suffix ? (
        <AffixWrapper
          props={{ error, theme }}
          {...(onSuffix
            ? { role: "button", tabIndex: "0", onClick: onSuffix }
            : "")}
        >
          {suffix}
        </AffixWrapper>
      ) : null}
      {(error || helper) && (
        <HelperText className="helper" props={{ error, ...theme }}>
          {error || helper}
        </HelperText>
      )}
    </InputWrapper>
  );
};
export { Input };
