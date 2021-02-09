import { ThemeProvider } from "@emotion/react";
import { Plus } from "heroicons-react";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Heading00,
  Heading1,
  Button,
  GlobalStyle,
  Text,
  Heading4,
  Anchor,
  Heading2,
  Heading0,
  Heading5,
} from "./components";
import { Input } from "./components/Input/Input";
import { darkTheme, lightTheme } from "./utils";

const inlineStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  maxWidth: "100%",
};

const App = () => {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useState(isDarkMode ? darkTheme : lightTheme);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      setTheme(e.matches ? darkTheme : lightTheme);
    });

  return (
    <ThemeProvider theme={theme}>
      <br />
      <Heading00 style={{ margin: "0" }}>Nord UI</Heading00>
      <Heading4 style={{ margin: "0" }} subtitle>
        A small react component library based on the{" "}
        <Anchor href="https://www.nordtheme.com/">nord color scheme</Anchor>
      </Heading4>
      <section about="buttons">
        <Heading1>Buttons</Heading1>
        <div style={inlineStyle}>
          <Button>Button</Button>
          <Button rounded>Rounded</Button>
          <Button rounded>
            <Plus />
            Rounded
          </Button>
          <Button fab>
            <Plus />
          </Button>
          <Button outlined>Button</Button>
          <Button outlined rounded>
            Button
          </Button>
          <Button outlined rounded>
            <Plus />
            Button
          </Button>
          <Button fab outlined>
            <Plus />
          </Button>
        </div>
      </section>
      <section about="input">
        <Heading1>Inputs</Heading1>
        <Input placeholder="test" prefix={<Plus />} />
        <br />
        <br />
        <Input placeholder="test" />
      </section>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
