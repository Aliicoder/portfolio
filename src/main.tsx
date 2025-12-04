import "./styles/globals.css";
import "./utils/i18n.ts";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import ThemeProvider from "./context/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);
