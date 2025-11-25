import { useTranslation } from "react-i18next";
import { techStackSvgsPart1, techStackSvgsPart2 } from "@/constants/teckStack";
import Slider from "../sliders/Slider";
import Section from "../shared/Section";
function Technologies() {
  const [t] = useTranslation();
  return (
    <section>
      <div className="container mx-auto flex flex-col">
        <div className="p-4">
          <Section string={t("headers.myTech")} />
        </div>
        <Slider
          rtl={true}
          className="mb-[20px] md:mb-[10px]"
          direction={1}
          scales={{
            large: { width: 200, height: 200 },
            medium: { width: 150, height: 150 },
            small: { width: 100, height: 100 },
          }}
          data={techStackSvgsPart1}
        />
        <Slider
          rtl={false}
          direction={-1}
          scales={{
            large: { width: 150, height: 150 },
            medium: { width: 100, height: 100 },
            small: { width: 50, height: 100 },
          }}
          data={techStackSvgsPart2}
        />
      </div>
    </section>
  );
}

export default Technologies;
