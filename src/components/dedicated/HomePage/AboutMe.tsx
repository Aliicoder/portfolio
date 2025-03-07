import Lottie from "lottie-react"
import study from "@/lottie/STUDY.json"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion";

function AboutMe() {
  const [t,{}] = useTranslation()
  return (
  <div className="container mx-auto bg-[var(--main-color)] overflow-hidden">
    <div className="p-[6%]">
      <div className="px-[1%]  relative flex justify-center w-fit ">
        <h1 className="relative c8 md:c4 font-semibold z-20 ">{t("headers.aboutMe")}</h1>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{duration:2}}
          viewport={{ once: true, amount: 0.5 }}
          className="absolute origin-left w-full bottom-0 h-2 z-10 bg-[var(--tertiary-background-color)] 
          rtl:ori" />
      </div>
    </div>
      <div className="flex flex-col-reverse md:flex-row flex-wrap">
      <div className="basis-full md:basis-1/2 flex justify-center items-center  ">
        <h1 className="p-[6%] md:p-0 c8 md:c4 basis-full md:basis-4/6 "> 
          {t("aboutMe")}
        </h1>
      </div>

      <div className=" basis-full md:basis-1/2">  
        <Lottie className="p-[12%]" animationData={study} />
      </div>

    </div>
  </div>
  )
}

export default AboutMe