import { cn } from "@/lib/utils";
const Section = ({
  string,
  className,
}: {
  string: string;
  className?: string;
}) => {
  return (
    <div className={cn("p-4", "md:p-8 md:px-12", className)}>
      <h1
        className={cn(
          "text-md font-bold text-tertiary-color",
          "md:text-lg",
          "ltr:font-montserrat"
        )}
      >
        {string}
      </h1>
    </div>
  );
};

export default Section;
