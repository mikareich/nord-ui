import { lightTheme } from "./theme";

export function getThemeProperty(propertys, theme, fallbackTheme = lightTheme) {
  
  return theme[propertys] || fallbackTheme[propertys];
}
