import { useWindowScroll } from "react-use";
import { useState } from "react";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const useMenu = () => {
  const { y: currentYScroll } = useWindowScroll();
  const [isShowMenu, setIsShowMenu] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    if (currentYScroll == 0) {
      setIsShowMenu(true);
    } else if (currentYScroll > lastScrollPosition) {
      setIsShowMenu(false);
    } else if (currentYScroll < lastScrollPosition) {
      setIsShowMenu(false);
    }
    setLastScrollPosition(currentYScroll);
  }, [currentYScroll, lastScrollPosition]);
  useGSAP(() => {
    if (isShowMenu === false) {
      gsap.to("#menu", {
        y: "-350%",
      });
    } else {
      gsap.to("#menu", {
        y: " 0%",
      });
    }
  }, [isShowMenu]);
};
export default useMenu;
