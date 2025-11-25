import { useTranslation } from "react-i18next";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuArrowUpRight } from "react-icons/lu";
import { cn, contactOnWhatsApp, downloadCV } from "@/lib/utils";
const Image = () => {
  return (
    <div
      className={cn(
        "basis-full flex justify-center items-center",
        "md:basis-1/2"
      )}
    >
      <img src="/index/main.png" alt="hero-image" />
    </div>
  );
};
const Text = () => {
  const [t] = useTranslation();
  return (
    <div className={cn("flex flex-col")}>
      <div className={cn("gap-2 py-4 flex flex-col")}>
        <h1
          className={cn(
            "text-md font-semibold text-tertiary-color ",
            "md:text-lg"
          )}
        >
          {t("intro.welcome")},
        </h1>
        <h1 className="text-xl font-semibold md:text-2xl">{t("intro.name")}</h1>
      </div>
      <p className={cn("mt-4 w-10/12 line-clamp-6 md:text-lg")}>
        {t("intro.summary")}
      </p>
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
      <button
        onClick={downloadCV}
        className={cn(
          "py-2 px-3 gap-2 flex justify-between items-center ",
          "rounded-lg border",
          "md:p-2"
        )}
      >
        {t("buttons.downloadCV")}
        <MdOutlineFileDownload className="rtl:-scale-x-100 " />
      </button>
      <button
        onClick={contactOnWhatsApp}
        className={cn(
          "py-2 px-3 gap-2 flex justify-between items-center ",
          "bg-secondary-bg-color text-secondary-text-color shadow-none rounded-lg border",
          "md:p-2"
        )}
      >
        {t("buttons.contact")}
        <LuArrowUpRight className="rtl:-scale-x-100" />
      </button>
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
