// import React from 'react';
// import 'aos/dist/aos.css';
// import { BsChatDots, BsPeople, BsWhatsapp } from 'react-icons/bs';

// const JoinCommunity = () => {
//   return (
//     <section className="py-5 bg-primary text-white" id="join-community">
//       <div className="container">
//         <div className="row align-items-center gy-4">
//           {/* Text Section */}
//           <div className="col-md-7" data-aos="fade-right">
//             <h2 className="fw-bold mb-3">
//               Join the <span className="text-warning">SkillPilot</span> Community
//             </h2>
//             <p className="lead">
//               You're not alone on your learning journey. Connect with fellow learners, get support,
//               share ideas, and celebrate wins. We grow better together!
//             </p>
//             <ul className="list-unstyled mt-3">
//               <li className="mb-2">
//                 <BsPeople className="me-2" /> Collaborate on projects
//               </li>
//               <li className="mb-2">
//                 <BsChatDots className="me-2" /> Ask questions and get help
//               </li>
//               <li className="mb-2">
//                 <BsWhatsapp className="me-2" /> Active WhatsApp group for discussions
//               </li>
//             </ul>
//             <a
//               href="https://chat.whatsapp.com/YOUR-GROUP-LINK"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn btn-warning mt-4 fw-bold"
//             >
//               Join Now
//             </a>
//           </div>

//           {/* Image or Illustration */}
//           <div className="col-md-5 text-center" data-aos="fade-left">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/3898/3898089.png"
//               alt="Join community"
//               className="img-fluid"
//               style={{ maxHeight: '300px' }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JoinCommunity;

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./JoinCommunity.css"; // optional custom styles
// import communityImg from "../assets/community.jpg"; // replace with your image path

// const JoinCommunity = () => {
//   useEffect(() => {
//     AOS.init({ duration: 700 });
//   }, []);

//   return (
//     <section id="community" className="py-5 bg-white">
//       <div className="container">
//         <div className="row align-items-center">
//           {/* Text */}
//           <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
//             <h2 className="fw-bold mb-3">Join Our Learning Community</h2>
//             <p className="mb-4">
//               Be part of a growing community of learners, coders, and future tech leaders. 
//               Collaborate, share resources, and grow together — wherever you are.
//             </p>
//             <a
//               href="https://chat.whatsapp.com/your-group-link"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn btn-primary"
//             >
//               Join the Community
//             </a>
//           </div>

//           {/* Image */}
//           <div className="col-md-6 text-center" data-aos="fade-left">
//             <img
//               src={communityImg}
//               alt="Join our community"
//               className="img-fluid rounded"
//               style={{ maxHeight: "350px", objectFit: "cover" }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JoinCommunity;

// import React, { useState } from "react";
// import "aos/dist/aos.css";

// const JoinTheCommunity = () => {
//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);

//   return (
//     <section
//       className="py-5 position-relative"
//       id="community"
//       style={{ backgroundColor: "#f4f8ff" }}
//     >
//       {/* Decorative Floating Circles */}
//       <span className="floating-icon bg-primary"></span>
//       <span className="floating-icon bg-success"></span>
//       <span className="floating-icon bg-danger"></span>

//       <div className="container text-center" data-aos="fade-up">
//         <h2 className="fw-bold mb-4">Join the SkillPilot Community</h2>
//         <p className="mb-4">
//           Connect with like-minded learners, mentors, and tech professionals. Be
//           part of a thriving network built on growth and support.
//         </p>
//         <button className="btn btn-primary px-4 py-2" onClick={openModal}>
//           Join Now
//         </button>
//       </div>

//       {/* Modal */}
//       {showModal && (
        
//          <div
//             className="modal-backdrop show"
//             onClick={closeModal}
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               height: "100vh",
//               width: "100vw",
//               backgroundColor: "rgba(0, 0, 0, 0.6)", // <- Darker background
//               zIndex: 1040,
//            }}
//          >

//           <div
//             className="modal d-block"
//             tabIndex="-1"
//             role="dialog"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="modal-dialog modal-dialog-centered" role="document">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <h5 className="modal-title">Join the Community</h5>
//                   <button
//                     type="button"
//                     className="btn-close"
//                     onClick={closeModal}
//                   ></button>
//                 </div>
//                 <div className="modal-body">
//                   <form>
//                     <div className="mb-3">
//                       <label htmlFor="name" className="form-label">
//                         Name
//                       </label>
//                       <input type="text" className="form-control" id="name" />
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="email" className="form-label">
//                         Email
//                       </label>
//                       <input type="email" className="form-control" id="email" />
//                     </div>
//                     <button type="submit" className="btn btn-primary">
//                       Submit
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default JoinTheCommunity;
import React, { useState } from "react";

const JoinTheCommunity = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="community" className="py-5 position-relative">
      <div className="container text-center">
        <h2 className="fw-bold mb-4" data-aos="fade-up">
          Join the SkillPilot Community
        </h2>
        <p className="mb-4" data-aos="fade-up" data-aos-delay="100">
          Connect with fellow learners, share your progress, and grow together.
        </p>
        <button
          className="btn btn-outline-primary btn-lg"
          onClick={() => setShowModal(true)}
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Join Now
        </button>
      </div>

      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1040,
          }}
        >
          <div
            className="rounded shadow p-4"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(4px)",
              zIndex: 1050,
              position: "relative",
              maxWidth: "500px",
              width: "90%",
            }}
            data-aos="zoom-in"
          >
            <h5 className="mb-3">Join the Community</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Join
              </button>
              <button
                type="button"
                className="btn btn-link text-danger float-end"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default JoinTheCommunity;
