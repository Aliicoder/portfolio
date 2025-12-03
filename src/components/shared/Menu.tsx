import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { cn } from "@/lib/utils";
import useLanguage from "@/hooks/useLanguage";
import useMenu from "@/hooks/useMenu";
import useTheme from "@/hooks/useTheme";

const UnderLine = () => {
  return (
    <div
      className={cn("w-full h-2 bg-tertiary-color", "absolute bottom-0 z-10")}
    />
  );
};
const Language = ({ lang }: { lang: string }) => {
  const props: { [key: string]: string } = {
    en: "English",
    ar: "العربية",
  };
  const { language, changeLanguage } = useLanguage();
  return (
    <div
      className={cn("w-fit flex justify-center", "relative cursor-pointer")}
      onClick={() => changeLanguage(lang)}
    >
      <h1 className={cn("relative z-20")}>{props[lang]}</h1>
      {language == lang && <UnderLine />}
    </div>
  );
};
const Separator = () => {
  return <div className={cn("mx-4 h-[15px] w-[0.5px] bg-gray-100")} />;
};
function Menu() {
  useMenu();
  const { theme, handleChangeTheme } = useTheme();
  return (
    <div
      id="menu"
      className={cn(
        "flex items-center justify-center",
        "absolute z-50 top-0 left-1/2 transform -translate-x-1/2",
        "rtl:flex-row-reverse"
      )}
    >
      <div
        className={cn(
          "px-4 py-2 flex items-center text-primary-text-color bg-primary-bg-color",
          "sticky top-6 rounded-b-xl ",
          "rtl:flex-row-reverse"
        )}
      >
        <div
          id="languages"
          className={cn("gap-4 flex l", "rtl:flex-row-reverse")}
        >
          <Language lang="en" />
          <Language lang="ar" />
        </div>
        <Separator />
        <div onClick={handleChangeTheme}>
          {theme === "black" ? <CiLight /> : <CiDark />}
        </div>
      </div>
    </div>
  );
}

export default Menu;
