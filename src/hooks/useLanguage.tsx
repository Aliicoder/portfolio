import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const useLanguage = () => {
  const [_, { language, changeLanguage }] = useTranslation();

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.setAttribute(
      "dir",
      language === "ar" ? "rtl" : "ltr"
    );
  }, [language]);

  return { language, changeLanguage };
};
export default useLanguage;
