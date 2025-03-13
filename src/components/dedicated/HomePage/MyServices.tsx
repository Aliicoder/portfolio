import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Lottie from "lottie-react"
import uxui from "@/lottie/UXUI.json"
import web from "@/lottie/WEB.json"
import mob from "@/lottie/MOB.json"
import { useTranslation } from "react-i18next"
function MyServices() {
  const [t] = useTranslation()
  return (
    <section className="my-10">
      <div className="p-6 py-12">
        <div className="px-[1%]  relative flex justify-center w-fit ">
          <h1 className="relative c8 md:c4 font-semibold z-20 ">
            {t("headers.myServices")}
          </h1>
        </div>
      </div>
      <Carousel style={{ direction: "ltr" }}>
        <CarouselContent className="-ml-1">
          <CarouselItem className=" hidden md:block opacity-0 basis-2/12  md:basis-1/2 lg:basis-2/12">
            <Card className=" border-0 shadow-none bg-white">
              <CardContent className=" p-6 ">
                <div className="p-[6%] flex flex-col gap-3 rounded-md  ">
                  <div className="">
                    <Lottie className="p-[12%]" animationData={uxui} />
                  </div>
                  <h1 className="c3 font-bold ">UX & UI design</h1>
                  <h2 className=" line-clamp-4">
                    the focus lies in crafting seamless, intuitive, and visually
                    engaging experiences that resonate with users. ensures that
                    interactions with a product are effortless, enjoyable, and
                    meaningful, addressing user needs while minimizing friction
                  </h2>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className=" shrink-0 basis-8/12  md:basis-1/2 lg:basis-4/12">
            <Card className=" border-0 shadow-none bg-transparent">
              <CardContent className="p-2 text-[--primary-text-color] border rounded-xl">
                <div className="p-3">
                  <Lottie className="p-[12%]" animationData={uxui} />
                </div>
                <div className="p-3 gap-5 flex flex-col rounded-lg  bg-[--blur-color]">
                  <h1 className=" c7 md:c3 font-bold line-clamp-1 ">
                    {t("services.uxUiDesign.title")}
                  </h1>
                  <h2 className=" c5 md:c3 line-clamp-4 text balance">
                    {t("services.uxUiDesign.description")}
                  </h2>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className=" basis-8/12  md:basis-1/2 lg:basis-4/12">
            <Card className=" border-0 shadow-none bg-transparent">
              <CardContent className="p-2 text-[--primary-text-color] border rounded-xl ">
                <div className="p-3">
                  <Lottie className="p-[12%]" animationData={web} />
                </div>
                <div className="p-3 gap-5 flex flex-col rounded-lg  bg-[--blur-color]">
                  <h1 className="c7 md:c3 font-bold line-clamp-1">
                    {t("services.webDevelopment.title")}
                  </h1>
                  <h2 className="c5 md:c3 line-clamp-4 text-balance">
                    {t("services.webDevelopment.description")}
                  </h2>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className=" basis-8/12  md:basis-1/2 lg:basis-4/12">
            <Card className=" border-0 shadow-none bg-transparent">
              <CardContent className="p-2 text-[--primary-text-color] border rounded-xl">
                <div className="p-3">
                  <Lottie className="p-[12%]" animationData={mob} />
                </div>
                <div className="p-3 gap-5 flex flex-col rounded-lg  bg-[--blur-color]">
                  <h1 className="c7 md:c3 font-bold line-clamp-1">
                    {t("services.mobileDevelopment.title")}
                  </h1>
                  <h2 className="c5 md:c3 line-clamp-4 text-balance">
                    {t("services.mobileDevelopment.description")}
                  </h2>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="" />
        <CarouselNext className="" />
      </Carousel>
    </section>
  )
}

export default MyServices
