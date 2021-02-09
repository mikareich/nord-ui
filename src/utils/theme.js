import { blue, black, white, grey } from "./colors";
import { primaryFont, typeScale } from "./typographie";

export const lightTheme = {
  primaryColor: blue[300],
  textColor: black,
  textColorLight: grey[400],
  border: grey[400],
  backgroundColor: white,
  backgroundAccent1: "#fff",
  backgroundAccent2: "#fff",
  font: primaryFont,
  defaultFontSize: typeScale.paragraph,
  typeScale,
};

export const darkTheme = {
  primaryColor: blue[300],
  textColor: white,
  textColorLight: grey[300],
  border: grey[400],
  backgroundColor: black,
  backgroundAccent1: grey[500],
  backgroundAccent2: grey[400],
  defaultFontSize: typeScale.paragraph,
  font: primaryFont,
  typeScale,
};
