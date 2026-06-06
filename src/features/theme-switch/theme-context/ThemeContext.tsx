import { createContext } from "react";
import type { ThemeContextType } from "../model/ThemeType";

const ThemeContext = createContext<ThemeContextType | null>(null);

export default ThemeContext;