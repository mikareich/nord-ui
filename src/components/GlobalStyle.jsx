/**  @jsxsourse @emotion/react */
import { css, Global, useTheme } from "@emotion/react";
import React from "react";

export function GlobalStyle() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }
        body {
          width: 100vw;
          padding: 0;
          font-family: ${theme.font};
          color: ${theme.textColor};
          background-color: ${theme.backgroundColor};
          transition: 200ms;
        }
      `}
    />
  );
}
