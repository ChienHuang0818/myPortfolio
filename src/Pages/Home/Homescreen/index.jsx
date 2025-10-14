import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import Work from "../Work";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Work />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
