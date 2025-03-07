import useInitialRendersCounter from "@/hooks/useRendersCount"
import { memo } from "react"
import Hero from "@/components/dedicated/HomePage/Hero";
import AboutMe from "@/components/dedicated/HomePage/AboutMe";
import MyServices from "@/components/dedicated/HomePage/MyServices";
import TechStack from "@/components/dedicated/HomePage/TechStack";
import Footer from "@/components/shared/Footer";
import MyJourney from "@/components/dedicated/HomePage/MyJourney";
import Menu from "@/components/shared/Menu";
import FlexColContainer from "@/components/styled/FlexColContainer";

const HomePage = memo( function HomePage() { useInitialRendersCounter("HomePage")
  return (
    <div className="w-full h-full bg-[var(--primary-background-color)]">
      <FlexColContainer className=" relative rubik scroll-smooth  text-[var(--primary-text-color)]">
        <Menu className="m-6 z-50 sticky top-6  " />
        <FlexColContainer className="mx-auto  overflow-hidden">
          <Hero className="p-6 m-2 | flex flex-wrap  rounded-lg bg-[var(--blur-color)]" />
          <AboutMe />
          <MyServices />
          <TechStack />
          <MyJourney />
          <Footer />
        </FlexColContainer>
      </FlexColContainer>
    </div>
  )
})

export default HomePage