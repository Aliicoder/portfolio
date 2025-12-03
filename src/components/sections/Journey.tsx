import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface Milestone {
  title: string;
  description: string;
}

const Milestones: Milestone[] = [
  {
    title: "journey.graphicDesign.title",
    description: "journey.graphicDesign.description",
  },
  {
    title: "journey.frontEnd.title",
    description: "journey.frontEnd.description",
  },
  {
    title: "journey.backEnd.title",
    description: "journey.backEnd.description",
  },
  {
    title: "journey.fullStack.title",
    description: "journey.fullStack.description",
  },
];

const Milestone = ({
  title,
  description,
  index,
}: Milestone & { index: number }) => {
  return (
    <div
      className={cn(
        "relative -mt-[1px] pb-12 flex justify-center border-b border-t ",
        index % 2 === 0
          ? "-mr-2 -ml-2 border-l rtl:border-r rtl:border-l-0 rounded-r-lg rounded-l-lg"
          : "-ml-2 -mr-2 border-r rtl:border-l rtl:border-r-0 rounded-l-lg rounded-r-lg",
        "first:border-t-0 last:border-b-0 last:pb-16",
        "first:rounded-t-none last:rounded-b-none",

        index == 0 && "pt-12"
      )}
    >
      <div
        className={cn(
          "absolute bg-primary-bg-color w-[5px] h-full",
          index % 2 === 0
            ? "right-0 rtl:left-0 rtl:right-auto"
            : "left-0 rtl:right-0 rtl:left-auto"
        )}
      ></div>

      <div className={cn("px-8 py-12 flex flex-col gap-4")}>
        <h4 className={cn("py-4 md:text-lg font-bold", "ltr:font-montserrat")}>
          {title}
        </h4>
        <p
          className={cn(
            "max-w-[900px] text-sm line-clamp-5 text-balance",
            "ltr:font-montserrat"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

function Journey() {
  const [t] = useTranslation();
  return (
    <section className="container px-4 md:mx-auto">
      {Milestones.map((milestone, index) => (
        <Milestone
          key={index}
          title={t(milestone.title)}
          description={t(milestone.description)}
          index={index}
        />
      ))}
    </section>
  );
}

export default Journey;
