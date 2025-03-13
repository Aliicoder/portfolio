import { useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { CiDark } from "react-icons/ci"
import { CiLight } from "react-icons/ci"
import { ThemeContext } from "@/context/ThemeContext"
import { useWindowScroll } from "react-use"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
interface IMenu {
  className: string
}
function Menu({ className }: IMenu) {
  const [, { language, changeLanguage }] = useTranslation()
  const { y: currentYScroll } = useWindowScroll()
  const { darkTheme, setDarkTheme } = useContext(ThemeContext)
  const [isShowHeader, setIsShowHeader] = useState(true)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])
  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.setAttribute(
      "dir",
      language === "ar" ? "rtl" : "ltr"
    )
  }, [language])
  useEffect(() => {
    if (currentYScroll == 0) {
      setIsShowHeader(true)
    } else if (currentYScroll > lastScrollPosition) {
      setIsShowHeader(false)
    } else if (currentYScroll < lastScrollPosition) {
      setIsShowHeader(true)
    }
    setLastScrollPosition(currentYScroll)
  }, [currentYScroll, lastScrollPosition])
  useGSAP(() => {
    if (isShowHeader === false) {
      gsap.to("#header-frame", {
        y: "-150%",
      })
    } else {
      gsap.to("#header-frame", {
        y: " 0%",
      })
    }
  }, [isShowHeader])
  return (
    <div
      id="header-frame"
      className={`${className} flex flex-row items-center justify-end
      rtl:flex-row-reverse`}
    >
      <div
        className={`sticky gap-6 px-3 py-2 top-6 flex  rounded-xl items-center border  bg-[var(--blur-color)]
          ${darkTheme && "border-black"}
        rtl:flex-row-reverse`}
      >
        <div
          className="gap-6 flex
          rtl:flex-row-reverse"
        >
          <div
            onClick={() => changeLanguage("en")}
            className={`px-[1%] relative flex justify-center w-fit cursor-pointer `}
          >
            <h1 className="relative c8 md:c4 z-20 text-whit">english</h1>
            {language == "en" && (
              <div className="absolute bottom-0 h-2 w-full z-10 bg-[--tertiary-background-color]" />
            )}
          </div>
          <div
            onClick={() => changeLanguage("ar")}
            className={`aref-ruqaa px-[1%] relative flex justify-center w-fit cursor-pointer `}
          >
            <h1 className="relative c8 md:c4 z-20 text-whit"> عربي</h1>
            {language == "ar" && (
              <div className="absolute bottom-0 h-2 w-full z-10 bg-[--tertiary-background-color]" />
            )}
          </div>
        </div>
        <div
          onClick={() => setDarkTheme((prev) => !prev)}
          className={` ${darkTheme ? "bg-[#ffffff05]" : "bg-slate-50"}
            p-3 | flex justify-center items-center cursor-pointer  rounded-full `}
        >
          {darkTheme ? <CiLight /> : <CiDark />}
        </div>
      </div>
    </div>
  )
}

export default Menu
