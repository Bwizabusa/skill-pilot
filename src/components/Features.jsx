
// import React from 'react';
// // import './Features.css'; // in case i will need custom css later

// const features = [
//   {
//     icon: 'bi-map',
//     title: 'Personalized Roadmaps',
//     description: 'Learn based on your goals and current skill level.',
//   },
//   {
//     icon: 'bi-bar-chart-line',
//     title: 'Progress Tracking',
//     description: 'Monitor your learning progress in real-time.',
//   },
//   {
//     icon: 'bi-laptop',
//     title: 'Project-Based Learning',
//     description: 'Build real-world projects to sharpen your skills.',
//   },

//    {
//     icon: "bi bi-award-fill",
//     title: "Milestone Rewards",
//     description: "Celebrate your achievements with badges and certificates after completing each learning stage."
//   },
//   {
//     icon: "bi bi-calendar-check-fill",
//     title: "Flexible Scheduling",
//     description: "Plan and adjust your weekly study schedule according to your availability and energy levels."
//   },

//    {
//     icon: "bi bi-lightbulb-fill",
//     title: "Smart Suggestions",
//     description: "Get automatic recommendations for what to learn next based on your progress and interests."
//   },  

//   {
//     icon: 'bi-journal-bookmark',
//     title: 'Resource Library',
//     description: 'Access curated resources to speed up your learning.',
//   },
// ];

// function Features() {
//   return (
//     <section className="container my-5">
//       <h2 className="text-center mb-4">What SkillPilot Offers</h2>
//       <div className="row">
//         {features.map((feature, index) => (
//           <div className="col-md-6 col-lg-3 mb-4" key={index}>
//             <div className="card h-100 hover-shadow shadow-sm text-center p-3">
//               <i className={`bi ${feature.icon} display-4 text-primary mb-3`}></i>
//               <div className="card-body">
//                 <h5 className="card-title">{feature.title}</h5>
//                 <p className="card-text">{feature.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// export default Features;

import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const features = [
  {
    icon: "bi bi-person-check-fill",
    title: "Personalized Learning Plans",
    description: "Create a custom learning path based on your goals and skill level. Stay focused with structured steps."
  },
  {
    icon: "bi bi-bar-chart-line-fill",
    title: "Progress Tracking",
    description: "Track your course completion and project milestones in one visual dashboard."
  },
  {
    icon: "bi bi-lightbulb-fill",
    title: "Smart Suggestions",
    description: "Get automatic recommendations for what to learn next based on your progress and interests."
  },
  {
    icon: "bi bi-code-square",
    title: "Project-Based Learning",
    description: "Build hands-on projects as you learn. Practice with real-world tasks to boost your portfolio."
  },
  {
    icon: "bi bi-award-fill",
    title: "Milestone Rewards",
    description: "Celebrate your achievements with badges and certificates after completing each learning stage."
  },
  {
    icon: "bi bi-calendar-check-fill",
    title: "Flexible Scheduling",
    description: "Plan and adjust your weekly study schedule according to your availability and energy levels."
  },
];

const Features = () => {
  return (
    <section className="py-5 bg-light" id="features">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Core Features</h2>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-4" key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}  // slight delay per card
            >
              <div className="card h-100 shadow-sm border-0 hover-shadow">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className={`${feature.icon} fs-1 text-primary`}></i>
                  </div>
                  <h5 className="card-title fw-semibold">{feature.title}</h5>
                  <p className="card-text text-muted">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
