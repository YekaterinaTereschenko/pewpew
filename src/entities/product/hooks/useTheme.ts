import { useContext} from "react";
import ThemeContext from '../../../features/theme-switch/theme-context/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme должен использоваться внутри ThemeProvider"
    );
  }

  return context;
};