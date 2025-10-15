import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Projects from "../Projects";
import Work from "../Work";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Work />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}
