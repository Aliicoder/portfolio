import IconButton from "../buttons/IconButton"
import { RiSendPlaneFill } from "react-icons/ri";
function Footer() {
  return (
    <div className="container  mx-auto bg-[var(--main-color)] overflow-hidden">

      <div className="p-[6%]">
        <div className="px-[1%]   relative flex justify-center w-fit ">
          <h1 className="relative c8 md:c4 font-semibold z-20 ">Get in touch</h1>
          <div className="absolute bottom-0 h-2 w-full z-10 bg-[--tertiary-background-color]" />
        </div>
      </div>

      <div className="p-[6%] grid grid-cols-1  md:grid-cols-3 gap-6  border border-b-0  ">

        <div className="order-2 md:order-1 flex md:flex-col justify-center gap-6">

          <div>
            <h1 className="c4">Phone number</h1>
            <h1 className="c3 p-[3%]">
              +91 6366313572
            </h1>
          </div>

          <div>
            <h1 className="c4">Email address</h1>
            <h1 className="c3 p-[3%] ">
              alifahmiofficialacc
              <br />@gmail.com
            </h1>
          </div>

        </div>

        <div className="order-1 md:order-2 flex items-center md:items-start flex-col montserrat font-bold md:col-span-2 gap-3">
          <h1 className="c9">Contact me</h1>
          <h1 className=" c5 md:c3 font-light"> I`d love to hear from you.</h1>
          <div className="mt-3">
            <IconButton className=" c7 bg-[--third-color] " text="Email me" direction={"left"}>
              <RiSendPlaneFill />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="p-[3%] bg-[--primary-background-color] flex justify-center">  
        <h1 className="c5">© 2024 Stunning Portfolio Co. All rights reserved.</h1>
      </div>
    </div>
  )
}

export default Footer