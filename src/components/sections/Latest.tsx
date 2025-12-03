import { cn } from "@/lib/utils";
import { LuArrowUpRight } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import Section from "../shared/Section";

const LatestWork = () => {
  const [t] = useTranslation();
  return (
    <div className="w-full gap-4 p-8 pt-0 flex flex-col items-center bg-blur-color">
      <h2 className={cn("p-4 font-bold", "ltr:font-montserrat")}>
        {t("latest.title")}
      </h2>
      <p
        className={cn(
          "py-0 text-balance text-sm text-center max-w-[700px] line-clamp-3",
          "ltr:font-montserrat"
        )}
      >
        {t("latest.description")}
      </p>
      <button
        onClick={() => {
          window.open("https://threephase.co", "_blank");
        }}
        className={cn(
          "mt-4 py-2 px-3 gap-2 flex justify-between items-center rounded-lg border",
          "ltr:font-montserrat",
          "md:p-2"
        )}
      >
        {t("latest.cta")}
        <LuArrowUpRight className="rtl:-scale-x-100" />
      </button>
    </div>
  );
};
const Latest = () => {
  const [t] = useTranslation();
  return (
    <section className="mt-12 ">
      <Section
        className="md:hidden ltr:font-montserrat font-bold"
        string={t("headers.latest")}
      />
      <div className="relative w-full flex justify-center">
        <div className="absolute w-full h-[50%] left-0 bottom-0 bg-blur-color">
          <Section
            className={cn(
              "hidden p-8 container mx-auto -translate-y-full font-bold",
              "md:block ",
              "ltr:font-montserrat"
            )}
            string={t("headers.latest")}
          />
        </div>
        <img
          className="z-10 relative w-[500px]"
          src="/imgs/latest.png"
          alt=""
        />
      </div>
      <LatestWork />
    </section>
  );
};

export default Latest;
