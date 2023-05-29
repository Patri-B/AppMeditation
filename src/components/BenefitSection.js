import './BenefitSection.css'
import React from 'react';
import myImage from '../images/crop-woman-meditating-home.jpg'


const BenefitsSection = () => {
  return (
   <div className="">
    <div class="container-fluid benefits-section">
    <div class="row" id="section3">
        <div class="col text-section">
          <h2>Benefits of Meditation</h2>
          <p>Meditation is a practice that has been around for thousands of years and is known for its ability to calm the mind and reduce stress. But did you know that meditation has many other benefits as well?</p>
          <ul>
            <li>Reduces stress and anxiety</li>
            <li>Improves focus and concentration</li>
            <li>Enhances emotional well-being</li>
            <li>Boosts immune system</li>
            <li>Promotes better sleep</li>
            <li>Lowers blood pressure</li>
          </ul>
        </div>

  
        <div className="col button-section">
          <h3>Ready to get started?</h3>
          <p>Try our guided meditation today and experience the benefits for yourself.</p>
          <button className="btn">Get Started</button>
        </div>

        <div className="col image-section">
          <img src={myImage} alt="MyImage" style={{width: '300px', height:'auto'}} />    
        </div>
    </div>
    </div>
  </div>
    

  );
};

export default BenefitsSection;
