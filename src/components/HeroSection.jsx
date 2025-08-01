// import React from 'react';
// // import './HeroSection.css'; // for custom styles(to be done later)
// import remoteWorkerImg from '../assets/remoteWorkerImg.svg';
// function HeroSection() {
//   return (
//     <section className="container-fluid bg-light py-5">
//       <div className="container">
//         <div className="row align-items-center">
          
//           {/* Left Side: Text */}
//           <div className="col-md-6 text-center text-md-start mb-4 mb-md-0"
//           data-aos="fade-right"
//           // data-aos-delay="300"//to stagger elements in one column?
//           data-aos-duration="1000"
//           >
//             <h1 className="display-4 fw-bold">
//               Plan your learning journey with <span className="text-primary">SkillPilot</span>
//             </h1>
//             <p className="lead mt-3">
//               Your personalized progress tracker for mastering tech skills. Stay focused, track growth, and reach your goals.
//             </p>
             
//             <button
//               className="btn btn-primary btn-lg custom-btn d-flex align-items-center gap-2"
//               data-aos="zoom-in"
//               data-aos-delay="300"
//             >
//               <span>Start Planning</span>
//               <i className="bi bi-journal-code"></i>
//             </button>

           
            
//           </div>

//           {/* Right Side: Image */}
//           <div className="col-md-6 text-center"
//           data-aos="fade-left"
//           // data-aos-delay="300"//to stagger elements in one column?
//           data-aos-duration="1000"
//           >
//             <img
//               src={remoteWorkerImg}
//               alt="Learning Illustration"
//               className="img-fluid"
//               style={{ maxHeight: '400px' }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;

// import React from "react";
// import { BsRocketTakeoff } from "react-icons/bs";
// import heroImg from "../assets/hero-image.svg"; // Use your actual image path

// const HeroSection = () => {
//   return (
//     <section id="hero" className=" container-fluid py-5 bg-light hero-section">
//       <div className="container">
//         <div className="row align-items-center g-5">
//           {/* Text Column */}
//           <div
//             className="col-lg-6"
//             data-aos="fade-right"
//             data-aos-duration="1000"
//           >
//             <h1 className="display-4 fw-bold mb-3">
//               Your Gateway to <span className="text-primary">Tech Mastery</span>
//             </h1>
//             <p className="lead mb-4">
//               SkillPilot empowers learners, especially in underserved
//               communities, to master front-end development and unlock new
//               opportunities.
//             </p>
//             <a href="#tracks" className="btn btn-primary btn-lg">
//               <BsRocketTakeoff className="me-2" />
//               Get Started
//             </a>
//           </div>

//           {/* Image Column */}
//           <div
//             className="col-lg-6 text-center"
//             data-aos="fade-left"
//             data-aos-duration="1000"
//           >
//             <img
//               src={heroImg}
//               alt="SkillPilot Hero"
//               className="img-fluid"
//               style={{ maxHeight: "400px" }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import heroImg from "../assets/hero-image.svg"; // Use your actual image path


const HeroSection = ({ isMobileMenuOpen }) => {
  return (
    <section
      id="hero"
      className={`hero-section py-5 ${isMobileMenuOpen ? "menu-expanded" : ""}`}
    >
      <div className="container mt-5 pt-5 text-center text-lg-start">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold">
              Unlock Your Future with <span className="text-primary">SkillPilot</span>
            </h1>
            <p className="lead mt-3">
              Start your tech journey with step-by-step guidance and build real-world skills — no experience required.
            </p>
            <a href="#tracks" className="btn btn-primary btn-lg mt-4">
              Explore Tracks
            </a>
          </div>
          <div className="col-lg-6">
            <img
              src={heroImg}
              alt="Learning Journey"
              className="img-fluid hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
