import React from 'react';
// import './HeroSection.css'; // for custom styles(to be done later)
import remoteWorkerImg from '../assets/remoteWorkerImg.svg';
function HeroSection() {
  return (
    <section className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Side: Text */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0"
          data-aos="fade-right"
          // data-aos-delay="300"//to stagger elements in one column?
          data-aos-duration="1000"
          >
            <h1 className="display-4 fw-bold">
              Plan your learning journey with <span className="text-primary">SkillPilot</span>
            </h1>
            <p className="lead mt-3">
              Your personalized progress tracker for mastering tech skills. Stay focused, track growth, and reach your goals.
            </p>
             
            <button
              className="btn btn-primary btn-lg custom-btn d-flex align-items-center gap-2"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <span>Start Planning</span>
              <i className="bi bi-journal-code"></i>
            </button>

           
            
          </div>

          {/* Right Side: Image */}
          <div className="col-md-6 text-center"
          data-aos="fade-left"
          // data-aos-delay="300"//to stagger elements in one column?
          data-aos-duration="1000"
          >
            <img
              src={remoteWorkerImg}
              alt="Learning Illustration"
              className="img-fluid"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
