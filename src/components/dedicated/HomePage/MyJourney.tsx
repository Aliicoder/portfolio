import { ThemeContext } from "@/context/ThemeContext"
import { useContext } from "react"
import { useTranslation } from "react-i18next"

function MyJourney() {
  const [t] = useTranslation()
  const { darkTheme } = useContext(ThemeContext)
  return (
    <section className="mt-10">
      <div className="p-8 ">
        <div className="flex justify-center w-fit ">
          <h1 className="text-lg md:text-xl font-semibold">
            {t("headers.myJourney")}
          </h1>
        </div>
      </div>
      <div className="p-8 pt-0 flex ">
        <div
          className={` w-[0.12rem] shrink-0 bg-[--gray-color] radial-gray 
          ${darkTheme ? "black-gradient" : "gray-gradient"}`}
        />
        <div className="montserrat flex flex-col gap-8 ">
          <div>
            <h1 className="relative p-8  text-nowrap">
              <h1 className=" text-lg md:text-xl font-bold">
                {" "}
                {t("journey.graphicDesign.title")}{" "}
              </h1>
              <h1 className="mt-2 text-sm md:text-lg text-nowrap">
                {t("journey.graphicDesign.years")}
              </h1>
              <div className="absolute w-1 scale-110 origin-center h-1/2 -translate-x-full  left-0 top-0  " />
              <div
                className="absolute z-10 left-0  top-1/2 w-2 aspect-square md:w-6  rounded-full bg-[--fill-color] opacity-50
                border border-[--gray-color]  -translate-x-[calc(50%+0.07rem)] -translate-y-1/2
                rtl:right-0 rtl:translate-x-[calc(50%+0.07rem)] "
              />
            </h1>
            <div className="px-8">
              <p className="c7 md:c4 md:line-clamp-5 text-balance">
                {t("journey.graphicDesign.description")}
              </p>
            </div>
          </div>
          <div>
            <h1 className="relative p-6 md:p-[3%] text-nowrap">
              <h1 className="text-lg md:text-xl font-bold">
                {" "}
                {t("journey.frontEnd.title")}
              </h1>
              <h1 className="mt-2 text-sm md:text-lg text-nowrap">2021 - 2022</h1>
              <div
                className="absolute z-10 left-0  top-1/2 w-2 aspect-square md:w-6 rounded-full bg-[--fill-color] 
                border border-[--gray-color]  -translate-x-[calc(50%+0.07rem)] -translate-y-1/2 opacity-80
                rtl:right-0 rtl:translate-x-[calc(50%+0.07rem)]"
              />
            </h1>
            <div className="px-8">
              <p className="c7 md:c4 md:line-clamp-5 text-balance">
                {t("journey.frontEnd.description")}
              </p>
            </div>
          </div>
          <div>
            <h1 className="relative p-6 md:p-[3%] text-nowrap">
              <h1 className="text-lg md:text-xl font-bold">
                {" "}
                {t("journey.backEnd.title")}{" "}
              </h1>
              <h1 className="mt-2 text-sm md:text-lg text-nowrap">2022 - 2023</h1>
              <div
                className="absolute z-10 left-0 top-1/2 w-2 aspect-square md:w-6 rounded-full bg-[--fill-color] 
                border border-[--gray-color]  -translate-x-[calc(50%+0.07rem)] -translate-y-1/2 
              rtl:right-0 rtl:translate-x-[calc(50%+0.07rem)]"
              />
            </h1>
            <div className="px-8">
              <p className="c7 md:c4 md:line-clamp-5 text-balance">
                {t("journey.backEnd.description")}
              </p>
            </div>
          </div>
          <div>
            <h1 className="relative p-6 md:p-[3%] text-nowrap">
              <h1 className="text-lg md:text-xl font-bold">
                {" "}
                {t("journey.fullStack.title")}{" "}
              </h1>
              <h1 className="mt-2 text-sm md:text-lg text-nowrap">2023 - 2024</h1>
              <div
                className="absolute z-10 left-0  top-1/2 w-2 aspect-square md:w-6 rounded-full bg-[--fill-color] 
                border border-[--gray-color]  -translate-x-[calc(50%+0.07rem)] -translate-y-1/2 opacity-80
              rtl:right-0 rtl:translate-x-[calc(50%+0.07rem)]"
              />
            </h1>
            <div className="px-8">
              <p className="c7 md:c4 md:line-clamp-5 text-balance">
                {t("journey.fullStack.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyJourney
