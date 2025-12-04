import Lottie from "lottie-react";
import study from "@/constants/lottie/STUDY.json";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import Section from "@/components/shared/Section";

const Image = () => {
  return (
    <div
      className={cn(
        "px-8 basis-full flex justify-center items-center",
        "md:basis-1/2 md:p-0"
      )}
    >
      <Lottie className="md:h-[400px]" animationData={study} />
    </div>
  );
};
const Text = () => {
  const [t] = useTranslation();
  return (
    <div
      className={cn(
        "basis-full flex justify-center items-center font-semibold text-sm opacity-90",
        "ltr:font-montserrat",
        "md:basis-1/2 md:text-base"
      )}
    >
      <h5 className={cn("p-4 basis-full", " md:text-lg md:basis-4/6")}>
        {t("aboutMe")}
      </h5>
    </div>
  );
};

function About() {
  const [t] = useTranslation();
  return (
    <section className={cn("mt-12 mx-auto container")}>
      <Section string={t("headers.aboutMe")} />
      <div
        className={cn(
          " flex justify-between flex-col-reverse flex-wrap",
          "md:flex-row "
        )}
      >
        <Text />
        <Image />
      </div>
    </section>
  );
}

export default About;
