import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "black" ? "white" : "black";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };
  return { theme, handleChangeTheme };
};
export default useTheme;
