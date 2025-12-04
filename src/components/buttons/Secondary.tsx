import { cn } from "@/lib/utils";

const SecondaryBtn = ({
  className,
  text,
  icon,
  bgcolor,
  textColor,
  onClick,
}: {
  className?: string;
  text: string;
  icon: React.ReactNode;
  bgcolor?: string;
  textColor?: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "py-2 px-3 gap-2 flex justify-between items-center rounded-lg border font-semibold text-sm md:text-base",
        bgcolor,
        textColor,
        "ltr:font-montserrat",
        "md:p-2",
        className
      )}
    >
      {text}
      {icon}
    </button>
  );
};

export default SecondaryBtn;
