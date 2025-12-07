import { cn } from "@/lib/utils";

type MainBtnProps = {
  text: string;
  icon?: React.ReactNode;
  bgcolor?: string;
  textColor?: string;
  onClick?: () => void;
  className?: string;

  as?: "button" | "a";
  href?: string;
  target?: string;
};

const MainBtn = ({
  text,
  icon,
  bgcolor,
  textColor,
  onClick,
  className,
  as = "button",
  href,
  target,
}: MainBtnProps) => {
  const Comp = as;

  return (
    <Comp
      {...(as === "a" ? { href, target } : { onClick })}
      className={cn(
        "py-2 px-3 gap-2 flex justify-between items-center shadow-none rounded-lg border font-semibold  text-sm md:text-base",
        "ltr:font-montserrat",
        "md:p-2",
        bgcolor,
        textColor,
        className
      )}
    >
      <span className="rtl:pr-2 ltr:pl-2">{text}</span>
      <span>{icon}</span>
    </Comp>
  );
};

export default MainBtn;
