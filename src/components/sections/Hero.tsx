import { useTranslation } from "react-i18next";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuArrowUpRight } from "react-icons/lu";
import { cn, contactOnWhatsApp, downloadCV } from "@/lib/utils";
import MainBtn from "@/components/buttons/Main";
import SecondaryBtn from "@/components/buttons/Secondary";
import HeroImage from "@/assets/hero.png";
const Image = () => {
  return (
    <div
      className={cn(
        "basis-full flex justify-center items-center",
        "md:basis-1/2"
      )}
    >
      <img
        fetchPriority="high"
        className="size-[200px] object-cover md:size-auto "
        src={HeroImage}
        alt="hero-image"
      />
    </div>
  );
};
const Text = () => {
  const [t] = useTranslation();
  return (
    <div className={cn("flex flex-col")}>
      <div className={cn("gap-2 py-4 flex flex-col")}>
        <h6
          className={cn(
            "text-sm text-tertiary-color font-bold",
            "ltr:font-montserrat",
            "md:text-base"
          )}
        >
          🖐️ {t("intro.welcome")}
        </h6>
        <h6
          className={cn(
            "text-md font-bold",
            "md:text-lg",
            "ltr:font-montserrat"
          )}
        >
          {t("intro.name")}
        </h6>
      </div>
      <h1
        className={cn(
          "text-sm mt-4 w-10/12 line-clamp-6 font-semibold opacity-90",
          "md:text-base",
          "ltr:font-montserrat"
        )}
      >
        {t("intro.summary")}
      </h1>
    </div>
  );
};
const Buttons = () => {
  const [t] = useTranslation();
  return (
    <div
      className={cn(
        "py-12 gap-4 mx-auto flex flex-col-reverse w-full ",
        "md:flex-row md:m-0 md:w-fit"
      )}
    >
      <SecondaryBtn
        text={t("buttons.downloadCV")}
        icon={<MdOutlineFileDownload className="rtl:-scale-x-100" />}
        onClick={downloadCV}
      />
      <MainBtn
        text={t("buttons.contact")}
        bgcolor="bg-secondary-bg-color"
        textColor="text-secondary-text-color"
        icon={<LuArrowUpRight className="rtl:-scale-x-100" />}
        onClick={contactOnWhatsApp}
      />
    </div>
  );
};
function Hero() {
  return (
    <section className={cn("pt-16 bg-blur-color")}>
      <div
        className={cn(
          "container  mx-auto flex flex-wrap ",
          "md:h-[calc(100svh-150px)]"
        )}
      >
        <Image />
        <div
          className={cn(
            "mt-8 p-4 flex flex-col basis-full justify-center",
            "md:basis-1/2 "
          )}
        >
          <Text />
          <Buttons />
        </div>
      </div>
    </section>
  );
}

export default Hero;
