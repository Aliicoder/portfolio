import CustomButton from "@/components/buttons/CustomButton"
import FlexCol from "@/components/styled/FlexCol"
import FlexRow from "@/components/styled/FlexRow"
import { useTranslation } from "react-i18next"
import { FaArrowRight } from "react-icons/fa6"
interface IHero {
  className: string
}
function Hero({className}:IHero) {
  const [t] = useTranslation() 
  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/path-to-your-cv.pdf";
    link.download = "Ali_Fahmi_CV.pdf"
    link.click();
  }
  const contactOnWhatsApp = () => {
    const phoneNumber = "+916366313572"
    const message = encodeURIComponent("Hello, I’d like to get in touch!")
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappURL, "_blank");
  };
  return (
    <FlexRow className={`${className}  `}>

      <FlexCol className="relative basis-full | justify-center items-center
        md:basis-1/2">
        <img className="z-10" src="/index/main.png" alt="" />
      </FlexCol>

      <FlexCol className="mt-10 basis-full md:basis-1/2 justify-center">
        <FlexCol className="py-3">
          <h1 className="c9 font-semibold 
            md:c8">
            {t("intro.name")}
          </h1>
          <FlexCol className="py-3 h-fit">
            <h1 className="c7 pb-3 font-semibold
              md:c6">
              {t("intro.title")}
            </h1>
            <p className="c8 w-10/12 | line-clamp-6 
              md:c4">
              {t("intro.summary")}
            </p>
          </FlexCol>
        </FlexCol>
        
        <FlexCol className="py-12 gap-6 mx-auto | w-fit  flex-col-reverse 
          md:flex-row md:m-0">
          <CustomButton text={t("buttons.downloadCV")} 
            onClick={downloadCV}
            className=" c6 p-3 gap-3 flex items-center  shadow-none rounded-lg border
              md:c3 md:p-2   ">
          </CustomButton>
          <CustomButton text={t("buttons.contact")} 
            onClick={contactOnWhatsApp}
            className=" c6 p-3 gap-3 flex items-center bg-[--secondary-background-color] text-[--secondary-text-color] shadow-none rounded-lg border
              md:c3 md:p-2  ">
            <FaArrowRight className="rtl:-scale-x-100" />
          </CustomButton>
        </FlexCol>
      </FlexCol>

  </FlexRow>
  )
}

export default Hero