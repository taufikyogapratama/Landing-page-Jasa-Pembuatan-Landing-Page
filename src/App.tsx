import Footer from "./components/Footer";
import Header from "./components/Header";
import BenefitSection from "./Sections/BenefitSection";
import ContactSection from "./Sections/ContactSection";
import HeroSection from "./Sections/HeroSection";
import Keunggulan from "./Sections/Keunggulan";
import ProblemSection from "./Sections/ProblemSection";
import ProcessSection from "./Sections/Process";
import ServiceSection from "./Sections/ServiceSection";
import SolutionSection from "./Sections/SolutionSection";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ServiceSection />
        <Keunggulan />
        <ProcessSection />
        <BenefitSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
