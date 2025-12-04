import { cn } from "@/lib/utils";
import { LuArrowUpRight } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import Section from "@/components/shared/Section";
import LatestWorkImage from "@/assets/latest-work.png";
import SecondaryBtn from "@/components/buttons/Secondary";

const LatestWork = () => {
  const [t] = useTranslation();
  return (
    <div className="w-full gap-4 p-4 pt-0 flex flex-col items-center bg-blur-color">
      <h2
        className={cn(
          "p-4 font-bold text-md",
          "md:text-lg",
          "ltr:font-montserrat"
        )}
      >
        {t("latest.title")}
      </h2>
      <p
        className={cn(
          "py-0 text-balance text-sm text-center max-w-[700px] line-clamp-3 font-semibold opacity-90",
          "ltr:font-montserrat",
          "md:text-base"
        )}
      >
        {t("latest.description")}
      </p>

      <SecondaryBtn
        className="my-2 w-full md:w-fit"
        text={t("buttons.showWork")}
        icon={<LuArrowUpRight className="rtl:-scale-x-100" />}
        onClick={() => {
          window.open("https://threephase.co", "_blank");
        }}
      />
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
          src={LatestWorkImage}
          alt="latest-work-image"
        />
      </div>
      <LatestWork />
    </section>
  );
};

export default Latest;
