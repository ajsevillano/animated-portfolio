import home1 from '../../assets/img/home1.png';

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              Your <span>dreams</span>come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact us for a any photography or videography ideas that you have.
          We have professionals with amazing skills to help you achive it.
        </p>
        <button>Contact us</button>
      </div>
      <img src={home1} alt="guy with camera" />
    </div>
  );
};

export default AboutSection;
