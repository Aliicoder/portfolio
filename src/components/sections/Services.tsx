import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";
import Section from "../shared/Section";
import { cn } from "@/lib/utils";
import { services } from "@/constants/services";
import ServiceCard from "../cards/Service";
const Scroll = () => {
  return (
    <Carousel className="overflow-auto" style={{ direction: "ltr" }}>
      <CarouselContent
        className={cn("flex items-center -ml-1", "md:justify-center")}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            className={index == 1 ? "md:max-w-[450px]" : ""}
            animation={service.animation}
            title={service.title}
            description={service.description}
          />
        ))}
      </CarouselContent>
    </Carousel>
  );
};
function Services() {
  const [t] = useTranslation();
  return (
    <section className="mt-12 container mx-auto">
      <Section
        className="ltr:font-montserrat font-bold"
        string={t("headers.myServices")}
      />
      <Scroll />
    </section>
  );
}

export default Services;
