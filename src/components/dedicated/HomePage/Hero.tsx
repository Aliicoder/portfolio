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
  return (
    <FlexRow className={`${className}  `}>

      <FlexCol className=" relative  basis-full  | justify-center items-center
        md:basis-1/2">
        <img className="z-10" src="/index/main.png" alt="" />
      </FlexCol>

      <FlexCol className="mt-10 basis-full md:basis-1/2 justify-center ">
        <FlexCol className="py-3">
          <h1 className=" c9  font-semibold 
            md:c8">
            {t("intro.name")}
          </h1>
          <FlexCol className="py-3  h-fit">
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
        
        <div className="py-[8%] flex gap-6 mx-auto md:m-0 flex-col-reverse  md:flex-row  w-fit ">

          <CustomButton text={t("buttons.downloadCV")} 
            className=" c6 p-3 gap-3 flex items-center  shadow-none rounded-lg border
              md:c3 md:p-2   ">
          </CustomButton>
          <CustomButton text={t("buttons.contact")} 
            className=" c6 p-3 gap-3 flex items-center bg-[--secondary-background-color] text-[--secondary-text-color] shadow-none rounded-lg border
              md:c3 md:p-2  ">
            <FaArrowRight />
          </CustomButton>
        </div>
      </FlexCol>

  </FlexRow>
  )
}

export default Hero