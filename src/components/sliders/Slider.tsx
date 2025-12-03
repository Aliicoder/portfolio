import useTheme from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import React from "react";

const Gradient = () => {
  const { theme } = useTheme();
  return (
    <div
      className={cn(
        "absolute inset-0 z-10 ",
        theme === "black" ? "md:black-gradient" : "md:gray-gradient"
      )}
    />
  );
};
interface SliderProps {
  direction?: number;
  data: React.ReactNode[];
  className?: string;
  rtl?: boolean;
  scales: {
    large: { width: number; height: number };
    medium: { width: number; height: number };
    small: { width: number; height: number };
  };
}
const Slider = ({
  direction = 1,
  data,
  className,
  scales,
  rtl,
}: SliderProps) => {
  return (
    <div
      className={cn("slider ", className)}
      style={
        {
          "--quntity": data.length,
          "--width-large": `${scales.large.width}px`,
          "--height-large": `${scales.large.height}px`,
          "--width-medium": `${scales.medium.width}px`,
          "--height-medium": `${scales.medium.height}px`,
          "--width-small": `${scales.small.width}px`,
          "--height-small": `${scales.small.height}px`,
        } as React.CSSProperties
      }
    >
      <Gradient />
      <div className="list">
        {data.map((svg, index) => (
          <div
            style={
              {
                "--index": index,
                "--direction": direction,
              } as React.CSSProperties
            }
            key={index}
            className={cn(rtl ? "item-rtl" : "item-ltr")}
          >
            {svg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
