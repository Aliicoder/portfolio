import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CardContent } from "@/components/ui/card";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";

const Service = ({
  className,
  animation,
  title,
  description,
}: {
  className?: string;
  animation: any;
  title: string;
  description: string;
}) => {
  const [t] = useTranslation();
  return (
    <Card
      className={cn(
        "shrink-0 p-4 max-w-[330px] border-0 shadow-none bg-transparent",
        "md:max-w-[400px]",
        className
      )}
    >
      <CardContent className="p-4 text-[--primary-text-color] border rounded-xl">
        <Lottie className="p-12 md:p-16" animationData={animation} />
        <div className="p-4 gap-4 flex flex-col rounded-lg  bg-[--blur-color]">
          <h2
            className={cn(
              "font-bold line-clamp-1",
              "md:text-lg",
              "rtl:text-right ltr:font-montserrat"
            )}
          >
            {t(title)}
          </h2>
          <h4
            className={cn(
              "text-sm line-clamp-4 text-balance",
              "md:text-normal",
              "rtl:text-right ltr:font-montserrat"
            )}
          >
            {t(description)}
          </h4>
        </div>
      </CardContent>
    </Card>
  );
};

export default Service;
