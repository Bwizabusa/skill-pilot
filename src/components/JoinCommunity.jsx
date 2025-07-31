import React from 'react';
import 'aos/dist/aos.css';
import { BsChatDots, BsPeople, BsWhatsapp } from 'react-icons/bs';

const JoinCommunity = () => {
  return (
    <section className="py-5 bg-primary text-white" id="join-community">
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* Text Section */}
          <div className="col-md-7" data-aos="fade-right">
            <h2 className="fw-bold mb-3">
              Join the <span className="text-warning">SkillPilot</span> Community
            </h2>
            <p className="lead">
              You're not alone on your learning journey. Connect with fellow learners, get support,
              share ideas, and celebrate wins. We grow better together!
            </p>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <BsPeople className="me-2" /> Collaborate on projects
              </li>
              <li className="mb-2">
                <BsChatDots className="me-2" /> Ask questions and get help
              </li>
              <li className="mb-2">
                <BsWhatsapp className="me-2" /> Active WhatsApp group for discussions
              </li>
            </ul>
            <a
              href="https://chat.whatsapp.com/YOUR-GROUP-LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning mt-4 fw-bold"
            >
              Join Now
            </a>
          </div>

          {/* Image or Illustration */}
          <div className="col-md-5 text-center" data-aos="fade-left">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3898/3898089.png"
              alt="Join community"
              className="img-fluid"
              style={{ maxHeight: '300px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
