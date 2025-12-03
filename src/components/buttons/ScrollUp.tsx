import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowUp } from "react-icons/fa6";
import { cn } from "@/lib/utils";
function ScrollUp() {
  const { y: currentYScroll } = useWindowScroll();
  const [isShowScroll, setIsShowScroll] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    if (currentYScroll == 0) {
      setIsShowScroll(false);
    } else if (currentYScroll > lastScrollPosition) {
      setIsShowScroll(false);
    } else if (currentYScroll < lastScrollPosition) {
      setIsShowScroll(true);
    }
    setLastScrollPosition(currentYScroll);
  }, [currentYScroll, lastScrollPosition]);
  useGSAP(() => {
    if (isShowScroll === false) {
      gsap.to("#scrollUp-button", {
        y: "150",
      });
    } else {
      gsap.to("#scrollUp-button", {
        y: "0%",
      });
    }
  }, [isShowScroll]);
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      id="scrollUp-button"
      onClick={handleScrollUp}
      className={cn(
        "fixed z-50  bottom-6 right-6 flex  rounded-xl items-center text-secondary-text-color bg-secondary-bg-color",
        "rtl:flex-row-reverse"
      )}
    >
      <div
        className={cn(
          "p-3 flex justify-center items-center cursor-pointer rounded-full"
        )}
      >
        <FaArrowUp />
      </div>
    </button>
  );
}

export default ScrollUp;
