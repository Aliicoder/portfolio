import CustomButton from "@/components/buttons/CustomButton"
import { useTranslation } from "react-i18next"
import { MdOutlineFileDownload } from "react-icons/md"
import { LuArrowUpRight } from "react-icons/lu"
;<LuArrowUpRight />
function Hero() {
  const [t, { language }] = useTranslation()
  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/path-to-your-cv.pdf"
    link.download = "Ali_Fahmi_CV.pdf"
    link.click()
  }
  const contactOnWhatsApp = () => {
    const phoneNumber = "+916366313572"
    const message = encodeURIComponent("Hello, I’d like to get in touch!")
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappURL, "_blank")
  }
  return (
    <div className="p-4 m-4 flex flex-wrap rounded-lg bg-[var(--blur-color)]">
      <div
        className="relative basis-full flex flex-col justify-center items-center
        md:basis-1/2"
      >
        <img className="z-10" src="/index/main.png" alt="" />
      </div>

      <div className="mt-8 p-4 flex flex-col basis-full md:basis-1/2 justify-center">
        <div className="py-4 gap-4 flex flex-col">
          <h1
            className="text-3xl font-semibold 
            md:text-4xl"
          >
            {t("intro.name")}
          </h1>
          <div className="py-4 gap-4 flex flex-col h-fit">
            <h1
              className="text-2xl font-semibold
              md:text-3xl"
            >
              {t("intro.title")}
            </h1>
            <p
              className="text-lg w-10/12 line-clamp-6 
              md:text-xl"
            >
              {t("intro.summary")}
            </p>
          </div>
        </div>

        <div
          className="py-12 gap-4 mx-auto flex flex-col-reverse w-fit  
          md:flex-row md:m-0"
        >
          <CustomButton
            text={t("buttons.downloadCV")}
            onClick={downloadCV}
            className=" text-lg  p-4 gap-3 flex justify-between items-center  shadow-none rounded-lg border
              md:text-sm md:p-2 "
          >
            {language == "en" && (
              <MdOutlineFileDownload className="rtl:-scale-x-100 " />
            )}
          </CustomButton>
          <CustomButton
            text={t("buttons.contact")}
            onClick={contactOnWhatsApp}
            className=" text-lg p-4 gap-2 flex justify-between items-center bg-[--secondary-background-color] text-[--secondary-text-color] shadow-none rounded-lg border
              md:text-sm md:p-2  "
          >
            <LuArrowUpRight className="rtl:-scale-x-100" />
          </CustomButton>
        </div>
      </div>
    </div>
  )
}

export default Hero
