import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useWindowScroll } from "react-use"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { FaArrowUp } from "react-icons/fa6";
function ScrollUp() {
  const [, { language }] = useTranslation()
  const { y: currentYScroll } = useWindowScroll()
  const [isShowScroll, setIsShowScroll] = useState(true)
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
      setIsShowScroll(false)
    } else if (currentYScroll > lastScrollPosition) {
        setIsShowScroll(false)
    } else if (currentYScroll < lastScrollPosition) {
        setIsShowScroll(true)
    }
    setLastScrollPosition(currentYScroll)
  }, [currentYScroll, lastScrollPosition])
  useGSAP(() => {
    if (isShowScroll === false) {
      gsap.to("#scroll-frame", {
        y: "150",
      })
    } else {
      gsap.to("#scroll-frame", {
        y: "0%",
      })
    }
  }, [isShowScroll])
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (

      <div
        id="scroll-frame"
        onClick={handleScrollUp}
        className={`fixed z-50  bottom-6 right-6 flex  rounded-xl items-center text-[--secondary-text-color] bg-[var(--secondary-background-color)]
        rtl:flex-row-reverse`}
      >
        <div
          className={`p-3 flex justify-center items-center cursor-pointer  rounded-full `}
        >
          <FaArrowUp  />

        </div>
      </div>
  )
}

export default ScrollUp
