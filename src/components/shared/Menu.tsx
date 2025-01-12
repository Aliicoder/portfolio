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
  useEffect(()=>{
    console.log(darkTheme)
  },[darkTheme])
  return (
    <FlexRow  className={`${className} items-center justify-end`}>

      <h1 className=" mr-auto ml-10 c5 font-semibold">
        alicoder
        <span className="text-[--tertiary-background-color]">.</span>
      </h1>

      <FlexRow className=" gap-6 px-3 py-2 sticky top-6  | rounded-xl items-center border border-slate-900 bg-[var(--blur-color)]">

        <FlexRow className="gap-6 ">
          <div 
            onClick={()=>changeLanguage("en")}
            className={`${language == "en" ? "font-bold":""} px-[1%] relative flex justify-center w-fit cursor-pointer `}>
            <h1 className="relative c8 md:c4 z-20 text-whit">English</h1>
          </div>
          <div 
            onClick={()=>changeLanguage("ar")}
            className={`${language == "ar" ? "font-bold":""} aref-ruqaa px-[1%] relative flex justify-center w-fit cursor-pointer `}>
            <h1 className="relative c8 md:c4 z-20 text-whit"> عربي</h1>
          </div>
        </FlexRow>
        <div onClick={()=>setDarkTheme(prev => !prev)} className=" p-3 | flex justify-center items-center cursor-pointer  " >
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