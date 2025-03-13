import { memo } from "react"
import Hero from "@/components/dedicated/HomePage/Hero"
import AboutMe from "@/components/dedicated/HomePage/AboutMe"
import MyServices from "@/components/dedicated/HomePage/MyServices"
import TechStack from "@/components/dedicated/HomePage/TechStack"
import Footer from "@/components/shared/Footer"
import MyJourney from "@/components/dedicated/HomePage/MyJourney"
import Menu from "@/components/shared/Menu"

const HomePage = memo(function HomePage() {
  return (
    <div className="w-full h-full bg-[var(--primary-background-color)]">
      <div className=" relative mx-auto container flex flex-col rubik scroll-smooth text-[var(--primary-text-color)]">
        <Menu className="m-6 z-50 sticky top-6 " />
        <div className="mx-auto container flex flex-col  overflow-hidden">
          <Hero />
          <AboutMe />
          <MyServices />
          <TechStack />
          <MyJourney />
          <Footer />
        </div>
      </div>
    </div>
  )
})

export default HomePage
