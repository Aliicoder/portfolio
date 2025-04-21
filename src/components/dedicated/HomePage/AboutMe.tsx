import Lottie from "lottie-react"
import study from "@/lottie/STUDY.json"
import { useTranslation } from "react-i18next"

function AboutMe() {
  const [t, {}] = useTranslation()
  return (
    <div className="mt-8 container mx-auto bg-[var(--main-color)] overflow-hidden">
      <div className="p-8">
        <div className="flex justify-center w-fit ">
          <h1 className="relative text-lg md:text-xl font-semibold z-20 ">
            {t("headers.aboutMe")}
          </h1>
        </div>
      </div>
      <div className="p-4 flex flex-col-reverse md:flex-row flex-wrap">
        <div className="basis-full md:basis-1/2 flex justify-center items-center  ">
          <h1 className="p-4 md:p-0 text-lg md:text-xl basis-full md:basis-4/6 ">
            {t("aboutMe")}
          </h1>
        </div>

        <div className=" basis-full md:basis-1/2">
          <Lottie className="p-12" animationData={study} />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
