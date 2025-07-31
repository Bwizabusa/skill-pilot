// // src/components/WhySkillPilot.jsx
// import React from 'react';
// import 'aos/dist/aos.css';
// import { BsLightningCharge, BsPersonCheck, BsGraphUpArrow, BsGlobe2 } from 'react-icons/bs';

// const reasons = [
//   {
//     icon: <BsLightningCharge size={32} className="text-primary" />,
//     title: "Fast-Track Learning",
//     description: "SkillPilot guides you through focused roadmaps to help you learn efficiently and stay on track.",
//   },
//   {
//     icon: <BsPersonCheck size={32} className="text-success" />,
//     title: "Personalized Progress",
//     description: "Track your progress, goals, and skills all in one place, customized for your journey.",
//   },
//   {
//     icon: <BsGraphUpArrow size={32} className="text-warning" />,
//     title: "Career Growth Focus",
//     description: "Every module is designed to boost your portfolio and improve your job-readiness.",
//   },
//   {
//     icon: <BsGlobe2 size={32} className="text-info" />,
//     title: "Community Powered",
//     description: "Learn alongside others and grow your network with learners across the globe.",
//   },
// ];

// const WhySkillPilot = () => {
//   return (
//     <section className="py-5 bg-light" id="why-skillpilot">
//       <div className="container text-center">
//         <h2 className="mb-3 fw-bold" data-aos="fade-up">Why SkillPilot?</h2>
//         <p className="mb-5 text-muted" data-aos="fade-up" data-aos-delay="100">
//           Built for learners, guided by purpose.
//         </p>

//         <div className="row">
//           {reasons.map((reason, index) => (
//             <div
//               className="col-md-6 col-lg-3 mb-4"
//               key={index}
//               data-aos="fade-up"
//               data-aos-delay={index * 150}
//             >
//               <div className="p-4 border rounded shadow-sm bg-white h-100">
//                 <div className="mb-3">{reason.icon}</div>
//                 <h5 className="fw-bold">{reason.title}</h5>
//                 <p className="text-muted small">{reason.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhySkillPilot;

import React from "react";
import { BsLightningChargeFill, BsPeopleFill, BsGraphUpArrow } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WhySkillPilot.css";

AOS.init();

const reasons = [
  {
    icon: <BsLightningChargeFill className="icon" />,
    title: "Fast-track Learning",
    description: "Skip the fluff and focus on practical skills that matter.",
    aos: "fade-up",
  },
  {
    icon: <BsPeopleFill className="icon" />,
    title: "Community Driven",
    description: "Learn with peers and mentors who want to see you grow.",
    aos: "fade-up",
  },
  {
    icon: <BsGraphUpArrow className="icon" />,
    title: "Career Growth",
    description: "Build a solid path toward freelancing or employment.",
    aos: "fade-up",
  },
   {
    icon: <BsGraphUpArrow className="icon" />,
     title: "Community Powered",
     description: "Learn alongside others and grow your network with learners across the globe.",
    aos: "fade-up",
  },

];

const WhySkillPilot = () => {
  return (
    <section className="container my-5" id="why-skillpilot">
      <h2 className="text-center mb-4 fw-bold">Why SkillPilot?</h2>
      <div className="row">
        {reasons.map((item, index) => (
          <div className="col-md-3 mb-4" key={index} data-aos={item.aos} data-aos-delay={index * 100}>
            <div className="card h-100 shadow-sm border-0 text-center">
              <div className="card-body">
                <div className="icon-wrapper mb-3">{item.icon}</div>
                <h5 className="card-title fw-semibold">{item.title}</h5>
                <p className="card-text text-muted">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySkillPilot;
