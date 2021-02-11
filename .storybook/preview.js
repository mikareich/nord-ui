import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-emotion-theme";
import { lightTheme, darkTheme } from "../utils";

addDecorator(withThemesProvider([lightTheme, darkTheme]));

export const parameters = {
  backgrounds: {
    default: "twitter",
    values: [
      {
        name: "Light Theme",
        value: lightTheme.backgroundColor,
      },
      {
        name: "Dark Theme",
        value: darkTheme.backgroundColor,
      },
    ],
  },
};
