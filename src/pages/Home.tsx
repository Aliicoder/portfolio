import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import { cn } from "@/lib/utils";
import { lazy } from "react";
const Menu = lazy(() => import("@/components/shared/Menu"));
const ScrollUp = lazy(() => import("@/components/buttons/ScrollUp"));
const Services = lazy(() => import("@/components/sections/Services"));
const Technologies = lazy(() => import("@/components/sections/Technologies"));
const Journey = lazy(() => import("@/components/sections/Journey"));
const Footer = lazy(() => import("@/components/shared/Footer"));
const Latest = lazy(() => import("@/components/sections/Latest"));
const HomePage = () => {
  return (
    <div
      className={cn(
        "flex flex-col text-primary-text-color bg-primary-bg-color",
        "relative scroll-smooth overflow-hidden "
      )}
    >
      <Menu />
      <ScrollUp />
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Latest />
      <Journey />
      <Footer />
    </div>
  );
};

export default HomePage;
