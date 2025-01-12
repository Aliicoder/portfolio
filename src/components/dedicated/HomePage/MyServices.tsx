import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Lottie from "lottie-react";
import uxui from "@/lottie/UXUI.json"
import web from "@/lottie/WEB.json"
import mob from "@/lottie/MOB.json"
import { Squircle } from "corner-smoothing";
import { useTranslation } from "react-i18next";
function MyServices() {
  const [t] = useTranslation()
  return (
    <div className="">
    <div className="p-[6%]">
      <div className="px-[1%]  relative flex justify-center w-fit ">
        <h1 className="relative c8 md:c4 font-semibold z-20 ">{t("headers.myServices")}</h1>
        <div className="absolute bottom-0 h-2 w-full z-10 bg-[var(--tertiary-background-color)]" />
      </div>
    </div>
    <div className=" p-[6px] ">
      <Carousel className="">    
        <CarouselContent className="-ml-1">
          <CarouselItem  className=" hidden md:block opacity-0 basis-2/12  md:basis-1/2 lg:basis-2/12">
            <Card className=" border-0 shadow-none bg-white">
              <CardContent className=" p-6 ">
                <div className="p-[6%] flex flex-col gap-3 rounded-md  ">
                  <div className="">
                   <Lottie className="p-[12%]" animationData={uxui} />
                  </div>            
                  <h1 className="c3 font-bold ">UX & UI design</h1>
                  <h2 className=" line-clamp-4">
                    the focus lies in crafting seamless, intuitive, and visually engaging experiences 
                    that resonate with users. ensures that interactions with a product are effortless, enjoyable, 
                    and meaningful, addressing user needs while minimizing friction 
                  </h2>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem  className=" shrink-0 basis-8/12  md:basis-1/2 lg:basis-4/12">
            <Card className=" border-0 shadow-none bg-transparent">
              <CardContent className="md:p-6 ">
                <Squircle cornerRadius={16} className="p-[1px] bg-[var(--secondary-background-color)]">
                <Squircle cornerRadius={16} className="p-[6%] flex flex-col gap-3 rounded-md bg-[var(--primary-background-color)] text-[--primary-text-color]">
                  <div className="md:p-6">
                   <Lottie className="p-[12%]" animationData={uxui} />
                  </div>            
                  <h1 className=" c7 md:c3 font-bold ">{t("services.uxUiDesign.title")}</h1>
                  <h2 className=" c5 md:c3 line-clamp-4 text balance">
                  {t("services.uxUiDesign.description")}
                  </h2>
                </Squircle>
                </Squircle>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem  className=" basis-8/12  md:basis-1/2 lg:basis-4/12">
            <Card className=" border-0 shadow-none bg-transparent">
              <CardContent className=" md:p-6">
                <Squircle cornerRadius={16} className="p-[1px] bg-[var(--secondary-background-color)]">
                <Squircle cornerRadius={16} className="p-[6%] flex flex-col gap-3 rounded-md bg-[var(--primary-background-color)] text-[--primary-text-color] ">
                  <div className="">
                   <Lottie className="p-[12%]" animationData={web} />
                  </div>            
                  <h1 className="c7 md:c3 font-bold ">{t("services.webDevelopment.title")}</h1>
                  <h2 className="c5 md:c3 line-clamp-4 text-balance">
                  {t("services.uxUiDesign.description")}
                  </h2>
                </Squircle>
                </Squircle>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem  className=" basis-8/12  md:basis-1/2 lg:basis-4/12">
            <Card className=" border-0 shadow-none bg-transparent">
              <CardContent className="md:p-6">
                <Squircle cornerRadius={16} className="p-[1px] bg-[var(--secondary-background-color)] ">
                <Squircle cornerRadius={16} className="p-[6%] flex flex-col gap-3 rounded-md bg-[var(--primary-background-color)] text-[--primary-text-color]">
                  <div className="">
                   <Lottie className="p-[12%]" animationData={mob} />
                  </div>            
                  <h1 className="c7 md:c3 font-bold ">{t("services.mobileDevelopment.title")}</h1>
                  <h2 className="c5 md:c3 line-clamp-4 text-balance">
                    {t("services.mobileDevelopment.description")}
                  </h2>
                </Squircle>
                </Squircle>
              </CardContent>
            </Card>
          </CarouselItem>
        
        </CarouselContent>
        <CarouselPrevious className=""  />
        <CarouselNext className="" />
      </Carousel>
    </div>
  </div>
  )
}

export default MyServices