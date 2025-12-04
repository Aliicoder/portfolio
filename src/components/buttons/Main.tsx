import { cn } from "@/lib/utils";

const MainBtn = ({
  text,
  icon,
  bgcolor,
  textColor,
  onClick,
  className,
}: {
  text: string;
  icon: React.ReactNode;
  bgcolor?: string;
  textColor?: string;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "py-2 px-3 gap-2 flex justify-between items-center shadow-none rounded-lg border",
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

export default MainBtn;
