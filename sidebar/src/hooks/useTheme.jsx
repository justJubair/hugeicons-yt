import { DarkTheme } from "../Theme/DarkTheme";
import { LightTheme } from "../Theme/LightTheme";

const useTheme = (theme) => {
  switch (theme) {
    case "light":
      return LightTheme;
    case "dark":
      return DarkTheme;
    default:
      return DarkTheme;
  }
};

export default useTheme;
