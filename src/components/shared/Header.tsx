import { useEffect, useRef } from "react"

function Header() {
  const headerRef = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    if(headerRef && headerRef.current){
      let header = headerRef.current
      let trackHeight = () =>{
          const headerHeight = header.offsetHeight
          document.documentElement.style.setProperty("--header-height",`${headerHeight}px`)
      }
      let observer = new ResizeObserver(()=>trackHeight())
      observer.observe(header)
      return () =>{
        observer.unobserve(header)
        observer.disconnect()
      }
    }
  },[])
  return (
  <div ref={headerRef} className="p-[3%] montserrat container mx-auto flex justify-center  ">
    <h1 className="font-semibold">alicoder.</h1>
  </div>
  )
}

export default Header