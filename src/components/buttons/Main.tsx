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
        "py-2 px-3 gap-2 flex justify-between items-center shadow-none rounded-lg border",
        "ltr:font-montserrat",
        "md:p-2",
        bgcolor,
        textColor,
        className
      )}
    >
      {text}
      {icon}
    </Comp>
  );
};

export default MainBtn;
