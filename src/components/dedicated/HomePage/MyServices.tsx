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
                  <h1 className=" c7 md:c3 font-bold ">UX & UI design</h1>
                  <h2 className=" c5 md:c3 line-clamp-4 text balance">
                  I focus on creating intuitive and visually appealing designs that enhance the user experience. 
                  I am passionate about understanding the needs and behaviors of users to create seamless, user-centric interfaces. 
                  My skills encompass wireframing, prototyping, and conducting user research to ensure that the final product not
                   only looks great but also serves its purpose effectively.
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
                  <h1 className="c7 md:c3 font-bold ">Web development</h1>
                  <h2 className="c5 md:c3 line-clamp-4 text-balance">
                  I specialize in building dynamic and responsive websites that deliver seamless user experiences across different 
                  devices and platforms. With proficiency in front-end technologies such as React, HTML, CSS, and JavaScript, 
                  I create interactive and engaging interfaces that meet both functional and aesthetic goals. On the back-end, 
                  I work with Node.js, Express, and MongoDB to build scalable, efficient applications.
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
                  <h1 className="c7 md:c3 font-bold ">Mobile development</h1>
                  <h2 className="c5 md:c3 line-clamp-4 text-balance">
                  I create cross-platform mobile applications using React Native. With a strong understanding of 
                  mobile development principles, I build responsive, intuitive, and high-performance apps that work seamlessly 
                  across both iOS and Android platforms. My skills include integrating native modules, optimizing app performance, 
                  and ensuring smooth navigation and UI components that provide a native-like experience
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