import { cn } from "@/lib/utils";
import { LuArrowUpRight } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import Section from "../shared/Section";

const Latest = () => {
  const [t] = useTranslation();
  return (
    <section className="mt-8 ">
      <div className="">
        <div className="px-4 md:hidden">
          <Section string={t("headers.latest")} />
        </div>
        <div className="relative w-full flex justify-center">
          <div className="absolute w-full h-[50%] left-0 bottom-0 bg-blur-color">
            <div className="hidden p-8 container mx-auto -translate-y-full md:block">
              <Section string={t("headers.latest")} />
            </div>
          </div>
          <img
            className="z-10 relative w-[500px]"
            src="/imgs/latest.png"
            alt=""
          />
        </div>
        <div className="w-full gap-4 p-8 pt-0  flex flex-col items-center bg-blur-color">
          <div className="p-4 pt-0 ">
            <h2 className="font-bold ">{t("latest.title")}</h2>
          </div>
          <p className="p-8 py-0 text-balance text-sm text-center max-w-[700px] line-clamp-3">
            {t("latest.description")}
          </p>
          <button
            onClick={() => {
              window.open("https://threephase.co", "_blank");
            }}
            className={cn(
              " mt-4 py-2 px-3 gap-2 flex justify-between items-center ",
              "rounded-lg border",
              "md:p-2"
            )}
          >
            {t("latest.cta")}
            <LuArrowUpRight className="rtl:-scale-x-100" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Latest;
