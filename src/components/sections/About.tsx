import Lottie from "lottie-react";
import study from "@/constants/lottie/STUDY.json";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import Section from "../shared/Section";

const Image = () => {
  return (
    <div
      className={cn(
        "basis-full flex justify-center items-center",
        "md:basis-1/2"
      )}
    >
      <Lottie className="h-[400px]" animationData={study} />
    </div>
  );
};
const Text = () => {
  const [t] = useTranslation();
  return (
    <header
      className={cn(
        "basis-full flex justify-center items-center ",
        "md:basis-1/2"
      )}
    >
      <h1 className={cn("p-4 basis-full", " md:text-lg md:basis-4/6")}>
        {t("aboutMe")}
      </h1>
    </header>
  );
};

function About() {
  const [t] = useTranslation();
  return (
    <section>
      <div className={cn("p-4 mx-auto container")}>
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
      </div>
    </section>
  );
}

export default About;
