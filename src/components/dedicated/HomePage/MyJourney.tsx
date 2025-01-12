import { useTranslation } from "react-i18next"

function MyJourney() {
  const [t] = useTranslation()
  return (
    <div className="container  mx-auto  overflow-hidden">
      <div className="p-[6%]">
        <div className="px-[1%]   relative flex justify-center w-fit ">
          <h1 className="relative c8 md:c4 font-semibold z-20 ">{t("headers.myJourney")}</h1>
          <div className="absolute bottom-0 h-2 w-full z-10 bg-[--tertiary-background-color]" />
        </div>
      </div>
      <div className="p-[6%] px-[12%] flex ">
        <div className="w-[0.12rem] shrink-0 bg-[--gray-color]">

        </div>
        <div className="flex flex-col gap-6 ">
          <div >
            <h1 className="relative p-6 md:p-[3%] text-nowrap">
              <h1 className="montserrat c8 md:c5 font-bold"> {t("journey.graphicDesign.title")} </h1>
              <h1 className="c6 md:c3 text-nowrap">{t("journey.graphicDesign.years")}</h1>
              <div className="absolute w-1 scale-110 origin-center h-1/2 -translate-x-full  left-0 top-0 " />  
              <div className="absolute z-10 left-0 top-1/2 w-2 aspect-square md:w-6  rounded-full bg-[--fill-color] border border-[--gray-color]  -translate-x-[calc(50%+0.07rem)] -translate-y-1/2" />
            </h1>
            <div className="px-[12%]">
              <p className="c7 md:c4 md:line-clamp-5 text-balance">
                {t("journey.graphicDesign.description")}
              </p>
            </div>
          </div>
          <div>
            <h1 className="relative p-6 md:p-[3%] text-nowrap">
              <h1 className="montserrat c8 md:c5 font-bold"> {t("journey.frontEnd.title")}</h1>
              <h1 className="c6 md:c3 text-nowrap">2021 - 2022</h1>
              <div className="absolute z-10 left-0 top-1/2 w-2 aspect-square md:w-6 rounded-full bg-[--fill-color] border border-[--gray-color]  -translate-x-[calc(50%+0.07rem)] -translate-y-1/2" />
            </h1>
            <div className="px-[12%]">
              <p className="c7 md:c4 md:line-clamp-5 text-balance">
                {t("journey.frontEnd.description")} 
              </p>
            </div>
          </div>
          <div>
            <h1 className="relative p-6 md:p-[3%] text-nowrap">
              <h1 className="montserrat c8 md:c5 font-bold"> {t("journey.backEnd.title")} </h1>
              <h1 className="c6 md:c3 text-nowrap">2021 - 2022</h1>
              <div className="absolute z-10 left-0 top-1/2 w-2 aspect-square md:w-6 rounded-full bg-[--fill-color] border border-[--gray-color]  -translate-x-[calc(50%+0.07rem)] -translate-y-1/2" />
            </h1>
            <div className="px-[12%]">
              <p className="c7 md:c4 md:line-clamp-5 text-balance">
                {t("journey.backEnd.description")} 
              </p>
            </div>
          </div>
          <div>
            <h1 className="relative p-6 md:p-[3%] text-nowrap">
              <h1 className="montserrat c8 md:c5 font-bold"> {t("journey.fullStack.title")} </h1>
              <h1 className="c6 md:c3 text-nowrap">2022 - 2023</h1>
              <div className="absolute z-10 left-0 top-1/2 w-2 aspect-square md:w-6 rounded-full bg-[--fill-color] border border-[--gray-color]  -translate-x-[calc(50%+0.07rem)] -translate-y-1/2" />
            </h1>
            <div className="px-[12%]">
              <p className="c7 md:c4 md:line-clamp-5 text-balance">
                {t("journey.fullStack.description")} 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyJourney