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
      setIsShowHeader(false)
    }
    setLastScrollPosition(currentYScroll)
  }, [currentYScroll, lastScrollPosition])
  useGSAP(() => {
    if (isShowHeader === false) {
      gsap.to("#header-frame", {
        y: "-350%",
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
      className={`${className}  flex flex-row items-center justify-center
      rtl:flex-row-reverse`}
    >
      <div
        className={`sticky px-4 py-2 top-6 flex  rounded-xl items-center  text-[--secondary-text-color] bg-[var(--secondary-background-color)]
        rtl:flex-row-reverse`}
      >
        <div
          className="gap-4 flex
          rtl:flex-row-reverse"
        >
          <div
            onClick={() => changeLanguage("en")}
            className={`relative flex justify-center w-fit cursor-pointer `}
          >
            <h1 className="relative c8 md:c4 z-20 text-whit">En</h1>
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
        <div className="mx-4 h-[15px] w-[0.5px] bg-gray-100">
          
        </div>
        <div
          onClick={() => setDarkTheme((prev) => !prev)}
          className="flex gap-3"
        >
          {darkTheme ? <CiLight /> : <CiDark />}

        </div>
      </div>
    </div>
  )
}

export default Menu
