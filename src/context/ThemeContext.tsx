import {
  PropsWithChildren,
  useState,
  createContext,
  SetStateAction,
  Dispatch,
  useEffect,
} from "react"
interface ThemeContextType {
  darkTheme: boolean
  setDarkTheme: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext<ThemeContextType>({
  darkTheme: false,
  setDarkTheme: () => {},
})
interface ThemeProvider extends PropsWithChildren {}
function ThemeProvider({ children }: ThemeProvider) {
  const [darkTheme, setDarkTheme] = useState(false)
  useEffect(() => {
    let root = document.documentElement.style
    if (darkTheme) {
      root.setProperty("--primary-background-color", "#000000")
      root.setProperty("--secondary-background-color", "#ffffff")
      root.setProperty("--tertiary-background-color", "#1673ff")
      root.setProperty("--primary-text-color", "#ffffff")
      root.setProperty("--secondary-text-color", "#000000")
      root.setProperty("--primary-color", "#bb86fc")
      root.setProperty("--blur-color", "#f1f1f110")
    } else {
      root.setProperty("--primary-background-color", "#f8fafc")
      root.setProperty("--secondary-background-color", "#000000")
      root.setProperty("--primary-text-color", "#000000")
      root.setProperty("--secondary-text-color", "#ffffff")
      root.setProperty("--primary-color", "#6200ee")
      root.setProperty("--blur-color", "#ffffff")
    }
  }, [darkTheme])
  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
