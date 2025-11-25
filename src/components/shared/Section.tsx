import { cn } from "@/lib/utils";
const Section = ({
  string,
  className,
}: {
  string: string;
  className?: string;
}) => {
  return (
    <header className={cn("p-4", "md:p-8 md:px-12", className)}>
      <h1
        className={cn(
          "text-lg font-semibold text-tertiary-color",
          "md:text-xl"
        )}
      >
        {string}
      </h1>
    </header>
  );
};

export default Section;
