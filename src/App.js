import ProgressCircle from "./components/ProgressCircle";
import MeditationPractices from "./components/MeditationPractices";
import BenefitsSection from "./components/BenefitSection";


const App = () => {
  
  return (
    <div>
      <section className="container-fluid"id="main"> 
        <ProgressCircle /> 
      </section>
      <section className="container-fluid" id="meditation">
        <MeditationPractices /> 
      </section>
      <section>
        <BenefitsSection />
        
      </section>
      
    </div>
  );
};

export default App;
