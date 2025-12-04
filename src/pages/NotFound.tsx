import MainBtn from "@/components/buttons/Main";
import { LuArrowRight } from "react-icons/lu";

function NotFoundPage() {
  return (
    <div className=" flex flex-col justify-center items-center h-lvh w-lvw">
      <div>
        <h1 className="font-bold text-center text-8xl md:text-9xl">404</h1>
        <h1 className=" my-4 font-semibold text-xl md:text-2xl text-center">
          Page not found
        </h1>
        <MainBtn
          as="a"
          href="/"
          text="Go back"
          className="mt-12 text-center font-semibold"
          icon={<LuArrowRight className="rtl:-scale-x-100" />}
        />
      </div>
    </div>
  );
}

export default NotFoundPage;
