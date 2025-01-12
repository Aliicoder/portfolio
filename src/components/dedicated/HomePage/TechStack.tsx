import React from "@/components/customIcons/React";
import Mongo from "@/components/customIcons/Mongo";
import Express from "@/components/customIcons/Express";
import Node from "@/components/customIcons/Node";
import Aws from "@/components/customIcons/Aws";
import Git from "@/components/customIcons/Git";
import Docker from "@/components/customIcons/Docker";
import Github from "@/components/customIcons/Github";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
function TechStack() {
  const [t] = useTranslation()
  const bigWrapperRef = useRef<HTMLDivElement>(null)
  const smallWrapperRef = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    if(smallWrapperRef.current && bigWrapperRef.current){
      let bigWrapper = bigWrapperRef.current
      let smallWrapper = smallWrapperRef.current
      const trackWrapper = () =>{
        let bigWrapperWidth = bigWrapper.scrollWidth
        let smallWrapperWidth = smallWrapper.scrollWidth
        document.documentElement.style.setProperty("--big-wrapper-width",String("-"+bigWrapperWidth+"px"));
        document.documentElement.style.setProperty("--small-wrapper-width",String("+"+smallWrapperWidth+"px"));
      }
      const observer = new ResizeObserver(()=>trackWrapper())
      observer.observe(bigWrapper)
      return () => {
        observer.unobserve(bigWrapper)
        observer.disconnect()
      }
    }
  },[])
  return (
    <div>
      <div className="p-12">
        <div className="px-2  relative flex justify-center w-fit ">
          <h1 className="relative c8  font-semibold z-20 
            md:c4">
            {t("headers.myTech")} 
          </h1>
          <div className="absolute bottom-0 h-2 w-full z-10 bg-[--tertiary-background-color]" />
        </div>
      </div>

      <div className=" mx-[10%] relative wrapper  flex overflow-x-auto pointer-events-none ">
        <div  ref={bigWrapperRef}  className='topPartnerWrapper flex w-full h-full'>
          <div className=" basis-2/12  md:basis-1/4  p-[5%] shrink-0  flex justify-center items-center">
            <React/>
          </div> 
          <div className="basis-2/12  md:basis-1/4    p-[5%] shrink-0 flex justify-center items-center">
            <Mongo/>
          </div>
          <div className=" basis-2/12  md:basis-1/4   p-[5%] shrink-0 flex justify-center items-center">
            <Express/>
          </div>
          <div className="basis-2/12  md:basis-1/4  p-[5%] shrink-0 flex justify-center items-center">
            <Node/>
          </div>  

          <div
            style={{right: "var(--big-wrapper-width)"}}  
            className={`absolute flex w-full   h-full pointer-events-none`}>
            <div className=" basis-2/12  md:basis-1/4  p-[5%] shrink-0  flex justify-center items-center">
              <React/>
            </div> 
            <div className=" basis-2/12  md:basis-1/4   p-[5%] shrink-0 flex justify-center items-center">
              <Mongo/>
            </div>
            <div className=" basis-2/12  md:basis-1/4   p-[5%] shrink-0 flex justify-center items-center">
              <Express/>
            </div>
            <div className=" basis-2/12  md:basis-1/4   p-[5%] shrink-0 flex justify-center items-center">
              <Node />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mx-[20%] relative  flex wrapper  overflow-x-auto   pointer-events-none">
        <div ref={smallWrapperRef} className='downPartnerWrapper flex w-full h-full'>
          <div className=" basis-1/4  p-[5%] shrink-0  flex justify-center items-center">
            <Aws/>
          </div> 
          <div className="basis-1/4    p-[5%] shrink-0 flex justify-center items-center">
            <Git/>
          </div>
          <div className=" basis-1/4   p-[5%] shrink-0 flex justify-center items-center">
            <Docker/>
          </div>
          <div className="basis-1/4    p-[5%] shrink-0 flex justify-center items-center">
            <Github/>
          </div>   

          <div  
            style={{right: "var(--small-wrapper-width)"}}  
            className={`absolute flex w-full h-full pointer-events-none`}>
            <div className=" basis-1/4  p-[5%] shrink-0  flex justify-center items-center">
              <Aws/>
            </div> 
            <div className=" basis-1/4   p-[5%] shrink-0 flex justify-center items-center">
              <Git/>
            </div>
            <div className=" basis-1/4   p-[5%] shrink-0 flex justify-center items-center">
              <Docker/>
            </div>
            <div className=" basis-1/4   p-[5%] shrink-0 flex justify-center items-center">
              <Github />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack