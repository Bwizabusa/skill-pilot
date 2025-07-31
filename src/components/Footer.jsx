// src/components/Footer.jsx
import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Brand/Intro */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">SkillPilot</h4>
            <p>Empowering learners to master coding — step by step.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#hero" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#learning-tracks" className="text-light text-decoration-none">Tracks</a></li>
              <li><a href="#join" className="text-light text-decoration-none">Join Community</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold">Follow Us</h5>
            <div className="d-flex gap-3 fs-4">
              <a href="#" className="text-light"><BsFacebook /></a>
              <a href="#" className="text-light"><BsTwitter /></a>
              <a href="#" className="text-light"><BsInstagram /></a>
              <a href="#" className="text-light"><BsLinkedin /></a>
            </div>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center small">
          © {new Date().getFullYear()} SkillPilot. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
