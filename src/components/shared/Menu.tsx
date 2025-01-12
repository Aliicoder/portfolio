import { useContext, useEffect } from "react"
import FlexRow from "../styled/FlexRow"
import { useTranslation } from "react-i18next"
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { ThemeContext } from "@/context/ThemeContext";
interface IMenu {
  className: string
}
function Menu({className}:IMenu) {
  const [,{language,changeLanguage}] = useTranslation()
  const {darkTheme,setDarkTheme} = useContext(ThemeContext)
  useEffect(()=>{
    localStorage.setItem('language', language)
  },[language])
  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.setAttribute("dir", language === "ar" ? "rtl" : "ltr")
  }, [language]);

  return (
    <FlexRow  className={`${className} items-center justify-end`}>

      <FlexRow className=" gap-6 px-3 py-2 sticky top-6  | rounded-xl items-center border border-slate-900 bg-[var(--blur-color)]">

        <FlexRow className="gap-6 ">
          <div 
            onClick={()=>changeLanguage("en")}
            className={`px-[1%] relative flex justify-center w-fit cursor-pointer `}>
            <h1 className="relative c8 md:c4 z-20 text-whit">English</h1>
            { 
            language == "en" && <div className="absolute bottom-0 h-2 w-full z-10 bg-[--tertiary-background-color]" />
            }
          </div>
          <div 
            onClick={()=>changeLanguage("ar")}
            className={ `aref-ruqaa px-[1%] relative flex justify-center w-fit cursor-pointer `}>
            <h1 className="relative c8 md:c4 z-20 text-whit"> عربي</h1>
            { 
            language == "ar" && <div className="absolute bottom-0 h-2 w-full z-10 bg-[--tertiary-background-color]" />
            }
          </div>
        </FlexRow>
        <div onClick={()=>setDarkTheme(prev => !prev)} 
          className={` ${ darkTheme ? "bg-[#ffffff05]" : "bg-slate-50" }
            p-3 | flex justify-center items-center cursor-pointer  rounded-full `} >
          {
            darkTheme ?
            <CiLight />
            :
            <CiDark />
          }
        </div>
      </FlexRow>
    </FlexRow>
  )
}

export default Menu