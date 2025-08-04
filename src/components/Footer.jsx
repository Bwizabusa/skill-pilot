// // src/components/Footer.jsx
// import React from 'react';
// import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-light pt-5 pb-3 mt-5">
//       <div className="container">
//         <div className="row">

//           {/* Brand/Intro */}
//           <div className="col-md-4 mb-4">
//             <h4 className="fw-bold">SkillPilot</h4>
//             <p>Empowering learners to master coding — step by step.</p>
//           </div>

//           {/* Quick Links */}
//           <div className="col-md-4 mb-4">
//             <h5 className="fw-semibold">Quick Links</h5>
//             <ul className="list-unstyled">
//               <li><a href="#hero" className="text-light text-decoration-none">Home</a></li>
//               <li><a href="#learning-tracks" className="text-light text-decoration-none">Tracks</a></li>
//               <li><a href="#join" className="text-light text-decoration-none">Join Community</a></li>
//               <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div className="col-md-4 mb-4">
//             <h5 className="fw-semibold">Follow Us</h5>
//             <div className="d-flex gap-3 fs-4">
//               <a href="#" className="text-light"><BsFacebook /></a>
//               <a href="#" className="text-light"><BsTwitter /></a>
//               <a href="#" className="text-light"><BsInstagram /></a>
//               <a href="#" className="text-light"><BsLinkedin /></a>
//             </div>
//           </div>

//         </div>

//         <hr className="border-light" />

//         <div className="text-center small">
//           © {new Date().getFullYear()} SkillPilot. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container" data-aos="fade-up">
        <div className="row text-center text-md-start align-items-center">
          {/* Logo and About */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h4 className="fw-bold mb-2">SkillPilot</h4>
            <p className="mb-0 small">
              Empowering learners with tools, tracks, and community support to grow their skills.
            </p>
          </div>

          {/* Quick Links (optional) */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="fw-semibold mb-2">Quick Links</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#features" className="text-white text-decoration-none">Features</a>
              </li>
              <li>
                <a href="#tracks" className="text-white text-decoration-none">Learning Tracks</a>
              </li>
              <li>
                <a href="#community" className="text-white text-decoration-none">Community</a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-2">Connect with us</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-white fs-5">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white fs-5">
                <FaTwitter />
              </a>
              <a href="#" className="text-white fs-5">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-white fs-5">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <hr className="border-light mt-4" />
        <p className="text-center small mb-0">
          &copy; {new Date().getFullYear()} SkillPilot. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
