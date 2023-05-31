import './AboutUs.css'

const AboutUs = () => {
    return (
    <section id="about-us">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <h2>About Us</h2>
            <p>
              Welcome to our meditation Website, where we believe in the power of mindfulness and inner peace.
              Our goal is to help you achieve a state of tranquility and balance through guided meditation sessions and resources.
              Whether you're a beginner or an experienced practitioner, we have something to offer for everyone.
            </p>
          </div>
          <div className="col">
            <i className="fa-solid fa-om"></i>
          </div>
          <div className="col">
            <h2>Contact Us</h2>
            <p>
              If you have any questions or inquiries, feel free to reach out to us. Our dedicated support team is here to assist you.
            </p>
            <p>
              Email: info@meditationbrand.com<br />
              Phone: 123-456-7890<br />
              Address: 123 Main Street, City, State, Country
            </p>
          </div>
          <div className="col">
            <i class="fa-solid fa-phone"></i>
          </div>
        </div>
      </div>
    </section>
    );

};

export default AboutUs