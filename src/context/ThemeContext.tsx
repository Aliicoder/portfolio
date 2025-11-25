import {
  PropsWithChildren,
  useState,
  createContext,
  SetStateAction,
  Dispatch,
  useEffect,
} from "react";
interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "white",
  setTheme: () => {},
});
interface ThemeProvider extends PropsWithChildren {}
function ThemeProvider({ children }: ThemeProvider) {
  const [theme, setTheme] = useState("white");
  useEffect(() => {
    let root = document.documentElement.style;
    if (theme === "black") {
      root.setProperty("--primary-bg-color", "#000000");
      root.setProperty("--secondary-bg-color", "#ffffff");
      root.setProperty("--primary-text-color", "#ffffff");
      root.setProperty("--secondary-text-color", "#000000");
      root.setProperty("--primary-color", "#bb86fc");
      root.setProperty("--blur-color", "#f1f1f110");
    } else {
      root.setProperty("--primary-bg-color", "#f8fafc");
      root.setProperty("--secondary-bg-color", "#000000");
      root.setProperty("--primary-text-color", "#000000");
      root.setProperty("--secondary-text-color", "#ffffff");
      root.setProperty("--primary-color", "#6200ee");
      root.setProperty("--blur-color", "#ffffff");
    }
  }, [theme]);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log(savedTheme);
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
