import React from "@/components/customIcons/React";
import Mongo from "@/components/customIcons/Mongo";
import Express from "@/components/customIcons/Express";
import Node from "@/components/customIcons/Node";
import Aws from "@/components/customIcons/Aws";
import Git from "@/components/customIcons/Git";
import Docker from "@/components/customIcons/Docker";
import { motion } from "framer-motion";
import Github from "@/components/customIcons/Github";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import FlexRow from "@/components/styled/FlexRow";
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
      <div className="p-6 py-12">
        <div className="relative flex justify-center w-fit ">
          <h1 className="relative c8  font-semibold z-20 
            md:c4">
            {t("headers.myTech")} 
          </h1>
          <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{duration:2}}
          viewport={{ once: true, amount: 0.5 }}
          className="absolute origin-left w-full bottom-0 h-2 z-10 bg-[var(--tertiary-background-color)] 
          rtl:origin-right" />
        </div>
      </div>

      <FlexRow className=" mx-12 | relative wrapper overflow-x-auto pointer-events-none ">
        <div  ref={bigWrapperRef}  className='topPartnerWrapper flex w-full h-full'>
          <div className=" p-6 basis-1/12   shrink-0  flex justify-center items-center
            md:basis-1/4">
            <React/>
          </div> 
          <div className=" p-6 | basis-2/12  md:basis-1/4  shrink-0 flex justify-center items-center">
            <Mongo/>
          </div>
          <div className=" p-6 | basis-2/12  md:basis-1/4  shrink-0 flex justify-center items-center">
            <Express/>
          </div>
          <div className=" p-6 | basis-2/12  md:basis-1/4 shrink-0 flex justify-center items-center">
            <Node/>
          </div>  

          <div
            style={{right: "var(--big-wrapper-width)"}}  
            className={`absolute flex w-full   h-full pointer-events-none`}>
            <div className="p-6 |  basis-2/12  md:basis-1/4  shrink-0  flex justify-center items-center">
              <React/>
            </div> 
            <div className="p-6 |  basis-2/12  md:basis-1/4   shrink-0 flex justify-center items-center">
              <Mongo/>
            </div>
            <div className=" p-6 | basis-2/12  md:basis-1/4   shrink-0 flex justify-center items-center">
              <Express/>
            </div>
            <div className=" p-6 | basis-2/12  md:basis-1/4   shrink-0 flex justify-center items-center">
              <Node />
            </div>
          </div>
        </div>
      </FlexRow>
      
      <FlexRow className="mx-16 relative  flex wrapper  overflow-x-auto   pointer-events-none">
        <div ref={smallWrapperRef} className='downPartnerWrapper flex w-full h-full'>
          <div className=" p-6 | basis-1/4   shrink-0  flex justify-center items-center">
            <Aws/>
          </div> 
          <div className="p-6 | basis-1/4     shrink-0 flex justify-center items-center">
            <Git/>
          </div>
          <div className="p-6 | basis-1/4    shrink-0 flex justify-center items-center">
            <Docker/>
          </div>
          <div className="p-6 | basis-1/4     shrink-0 flex justify-center items-center">
            <Github/>
          </div>   

          <div  
            style={{right: "var(--small-wrapper-width)"}}  
            className={`absolute flex w-full h-full pointer-events-none`}>
            <div className="p-6 | basis-1/4 shrink-0  flex justify-center items-center">
              <Aws/>
            </div> 
            <div className="p-6 | basis-1/4  shrink-0 flex justify-center items-center">
              <Git/>
            </div>
            <div className="p-6 | basis-1/4  shrink-0 flex justify-center items-center">
              <Docker/>
            </div>
            <div className="p-6 | basis-1/4  shrink-0 flex justify-center items-center">
              <Github />
            </div>
          </div>
        </div>
      </FlexRow>
    </div>
  )
}

export default TechStack