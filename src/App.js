import NavigationBar from "./components/NavigationBar";
import ProgressCircle from "./components/ProgressCircle";
import MeditationPractices from "./components/MeditationPractices";
import BenefitsSection from "./components/BenefitSection";
import AboutUs from "./components/AboutUs";


const App = () => {
  
  return (
    <div className="app-container">
      <NavigationBar />
      <section className="container-fluid" id="main"> 
        <ProgressCircle /> 
      </section>
      <section className="container-fluid" id="meditation">
        <MeditationPractices /> 
      </section>
      <section id="benefits">
        <BenefitsSection />
      </section>
      <section id="aboutus">
        <AboutUs />
      </section>
      
    </div>
  );
};

export default App;
