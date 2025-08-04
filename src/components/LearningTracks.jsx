// // LearningTracks.jsx
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Tabs, Tab } from 'react-bootstrap';
// import { BsCode, BsFiletypeHtml, BsFiletypeCss, BsFiletypeJs, BsLightningCharge, BsGear, BsBoxArrowInDown, BsCpu, BsWindowSidebar, BsGraphUp, BsClipboardData, BsTools, BsLayers, BsLink45Deg, BsBootstrap, BsArrowRepeat, BsCloudUpload, BsDatabase } from 'react-icons/bs';

// const roadmapContent = {
//   basic: [
//     { icon: <BsFiletypeHtml />, title: "Step 1", desc: "Learn HTML structure and semantic tags." },
//     { icon: <BsFiletypeCss />, title: "Step 2", desc: "Understand CSS styling, layout, and positioning." },
//     { icon: <BsFiletypeJs />, title: "Step 3", desc: "Master JavaScript fundamentals." },
//     { icon: <BsCode />, title: "Step 4", desc: "Practice building small projects." },
//     { icon: <BsLightningCharge />, title: "Step 5", desc: "Learn Git & GitHub basics." },
//     { icon: <BsGear />, title: "Step 6", desc: "Use Bootstrap to build responsive websites." },
//   ],
//   intermediate: [
//     { icon: <BsBoxArrowInDown />, title: "Step 1", desc: "DOM Manipulation with JavaScript" },
//     { icon: <BsCpu />, title: "Step 2", desc: "ES6+ features (arrow functions, modules)" },
//     { icon: <BsWindowSidebar />, title: "Step 3", desc: "Advanced Bootstrap (navbars, modals)" },
//     { icon: <BsGraphUp />, title: "Step 4", desc: "API integration using fetch or axios" },
//     { icon: <BsClipboardData />, title: "Step 5", desc: "Build dynamic web apps" },
//     { icon: <BsTools />, title: "Step 6", desc: "Debugging & DevTools practice" },
//   ],
//   advanced: [
//     { icon: <BsLayers />, title: "Step 1", desc: "React basics: components, props, state" },
//     { icon: <BsLink45Deg />, title: "Step 2", desc: "Routing with React Router" },
//     { icon: <BsBootstrap />, title: "Step 3", desc: "Using Bootstrap in React apps" },
//     { icon: <BsArrowRepeat />, title: "Step 4", desc: "React Hooks: useState, useEffect" },
//     { icon: <BsCloudUpload />, title: "Step 5", desc: "Deploy with GitHub or Netlify" },
//     { icon: <BsDatabase />, title: "Step 6", desc: "Intro to Backend (Node.js or Django)" },
//   ]
// };

// const LearningTracks = () => {
//   const renderCards = (level) => (
//     <div className="row g-4 mt-3">
//       {roadmapContent[level].map((step, index) => (
//         <div className="col-md-4" key={index}>
//           <div className="card text-center shadow-sm h-100" data-aos="fade-up">
//             <div className="card-body">
//               <div className="mb-3 fs-1 text-primary">{step.icon}</div>
//               <h5 className="card-title">{step.title}</h5>
//               <p className="card-text">{step.desc}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <section className="container py-5" id="learning-tracks">
//       <div className="text-center mb-5">
//         <h2 className="fw-bold">Learning Tracks</h2>
//         <p className="text-muted">Progress through beginner to advanced levels with SkillPilot’s guided roadmap.</p>
//       </div>
//       <Tabs defaultActiveKey="basic" id="roadmap-tabs" className="mb-3 justify-content-center">
//         <Tab eventKey="basic" title="Basic Track">
//           {renderCards('basic')}
//         </Tab>
//         <Tab eventKey="intermediate" title="Intermediate Track">
//           {renderCards('intermediate')}
//         </Tab>
//         <Tab eventKey="advanced" title="Advanced Track">
//           {renderCards('advanced')}
//         </Tab>
//       </Tabs>
//     </section>
//   );
// };

// export default LearningTracks;


// LearningTracks.jsx
// import React, { Suspense, lazy } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../index.css';
// import { Tabs, Tab } from 'react-bootstrap';
// import {
//   BsCode, BsFiletypeHtml, BsFiletypeCss, BsFiletypeJs, BsLightningCharge,
//   BsGear, BsBoxArrowInDown, BsCpu, BsWindowSidebar, BsGraphUp,
//   BsClipboardData, BsTools, BsLayers, BsLink45Deg, BsBootstrap,
//   BsArrowRepeat, BsCloudUpload, BsDatabase
// } from 'react-icons/bs';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// AOS.init({ duration: 800 });

// const roadmapContent = {
//   basic: [
//     { icon: <BsFiletypeHtml />, title: "Step 1", desc: "Learn HTML structure and semantic tags." },
//     { icon: <BsFiletypeCss />, title: "Step 2", desc: "Understand CSS styling, layout, and positioning." },
//     { icon: <BsFiletypeJs />, title: "Step 3", desc: "Master JavaScript fundamentals." },
//     { icon: <BsCode />, title: "Step 4", desc: "Practice building small projects." },
//     { icon: <BsLightningCharge />, title: "Step 5", desc: "Learn Git & GitHub basics." },
//     { icon: <BsGear />, title: "Step 6", desc: "Use Bootstrap to build responsive websites." },
//   ],
//   intermediate: [
//     { icon: <BsBoxArrowInDown />, title: "Step 1", desc: "DOM Manipulation with JavaScript" },
//     { icon: <BsCpu />, title: "Step 2", desc: "ES6+ features (arrow functions, modules)" },
//     { icon: <BsWindowSidebar />, title: "Step 3", desc: "Advanced Bootstrap (navbars, modals)" },
//     { icon: <BsGraphUp />, title: "Step 4", desc: "API integration using fetch or axios" },
//     { icon: <BsClipboardData />, title: "Step 5", desc: "Build dynamic web apps" },
//     { icon: <BsTools />, title: "Step 6", desc: "Debugging & DevTools practice" },
//   ],
//   advanced: [
//     { icon: <BsLayers />, title: "Step 1", desc: "React basics: components, props, state" },
//     { icon: <BsLink45Deg />, title: "Step 2", desc: "Routing with React Router" },
//     { icon: <BsBootstrap />, title: "Step 3", desc: "Using Bootstrap in React apps" },
//     { icon: <BsArrowRepeat />, title: "Step 4", desc: "React Hooks: useState, useEffect" },
//     { icon: <BsCloudUpload />, title: "Step 5", desc: "Deploy with GitHub or Netlify" },
//     { icon: <BsDatabase />, title: "Step 6", desc: "Intro to Backend (Node.js or Django)" },
//   ]
// };

// // Lazy-load roadmap tab content
// const LazyTrack = ({ level }) => (
//   <div className="row g-4 mt-3">
//     {roadmapContent[level].map((step, index) => (
//       <div className="col-md-4" key={index}>
//         <div
//           className="card text-center shadow-sm h-100"
//           data-aos="fade-up"
//           data-aos-delay={index * 100}
//         >
//           <div className="card-body d-flex flex-column justify-content-between">
//             <div>
//               <div className="mb-3 fs-1 text-primary">{step.icon}</div>
//               <h5 className="card-title">{step.title}</h5>
//               <p className="card-text">{step.desc}</p>
//             </div>
//             <a href="#start" className="btn btn-outline-primary mt-3">
//               Start Learning
//             </a>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// );

// const LearningTracks = () => {
//   return (
//     <section className="container py-5" id="learning-tracks">
//       <div className="text-center mb-5">
//         <h2 className="fw-bold">Learning Tracks</h2>
//         <p className="text-muted">
//           Progress through beginner to advanced levels with SkillPilot’s guided roadmap.
//         </p>
//       </div>

//       <Tabs
//         defaultActiveKey="basic"
//         id="roadmap-tabs"
//         className="mb-3 justify-content-center custom-tabs"
//         justify
//         variant="underline"
//       >
//         <Tab eventKey="basic" title="Basic Track">
//           <Suspense fallback={<div>Loading Basic Track...</div>}>
//             <LazyTrack level="basic" />
//           </Suspense>
//         </Tab>
//         <Tab eventKey="intermediate" title="Intermediate Track">
//           <Suspense fallback={<div>Loading Intermediate Track...</div>}>
//             <LazyTrack level="intermediate" />
//           </Suspense>
//         </Tab>
//         <Tab eventKey="advanced" title="Advanced Track">
//           <Suspense fallback={<div>Loading Advanced Track...</div>}>
//             <LazyTrack level="advanced" />
//           </Suspense>
//         </Tab>
//       </Tabs>
//     </section>
//   );
// };

// export default LearningTracks;

// import React, { useState, useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const LearningTracks = () => {
//   const [activeTab, setActiveTab] = useState('basic');

//   useEffect(() => {
//     AOS.init({ duration: 800, once: false });
//   }, []);

//   // Refresh AOS whenever tab changes to animate new content
//   useEffect(() => {
//     AOS.refresh();
//   }, [activeTab]);

//   const roadmapData = {
//     basic: [
//       { title: 'HTML & CSS', description: 'Build static web pages' },
//       { title: 'Responsive Design', description: 'Make websites mobile-friendly' },
//       { title: 'JavaScript Basics', description: 'Add interactivity to your site' },
//       { title: 'DOM Manipulation', description: 'Handle elements dynamically' },
//       { title: 'Version Control', description: 'Use Git and GitHub' },
//       { title: 'Portfolio Project', description: 'Build and deploy your first project' },
//     ],
//     intermediate: [
//       { title: 'Advanced JS', description: 'ES6+, async, callbacks, closures' },
//       { title: 'API Integration', description: 'Fetch and display dynamic data' },
//       { title: 'React Basics', description: 'Build interactive UIs' },
//       { title: 'React Router', description: 'Create multi-page apps' },
//       { title: 'State Management', description: 'Hooks and Context API' },
//       { title: 'Mid-size Projects', description: 'Real-world mini apps' },
//     ],
//     advanced: [
//       { title: 'Performance Optimization', description: 'Lazy loading, memoization' },
//       { title: 'TypeScript', description: 'Add strong typing to your code' },
//       { title: 'Testing', description: 'Unit & integration testing with Jest' },
//       { title: 'CI/CD & Deployment', description: 'Automate your workflow' },
//       { title: 'Authentication', description: 'User login & protected routes' },
//       { title: 'Capstone Project', description: 'Full-featured web app' },
//     ],
//   };

//   const currentData = roadmapData[activeTab];

//   return (
//     <section id="learning-tracks" className="container py-5">
//       <div className="text-center mb-4">
//         <h2>Learning Tracks</h2>
//         <p className="text-muted">Choose your level and start learning step-by-step.</p>
//       </div>

//      <div className="d-flex justify-content-center mb-4 gap-3">
//         {['basic', 'intermediate', 'advanced'].map((tab) => (
//             <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`track-tab ${activeTab === tab ? 'active' : ''}`}
//             >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//         ))}
//       </div>

//       <div className="row" key={activeTab}>
//         {currentData.map((item, index) => (
//           <div
//             key={index}
//             className="col-md-4 mb-4"
//             data-aos="fade-up"
//             data-aos-delay={index * 100}
//           >
//             <div className="card h-100 shadow-sm border-0">
//               <div className="card-body">
//                 <h5 className="card-title">{item.title}</h5>
//                 <p className="card-text">{item.description}</p>
//                 <button className="btn btn-outline-primary mt-2">
//                   Start Learning
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default LearningTracks;

// import React, { useState } from 'react';
// import 'aos/dist/aos.css';
// import { BsRocket, BsLightningCharge, BsStars } from 'react-icons/bs';

// const LearningTracks = () => {
//   const [activeTab, setActiveTab] = useState('basic');

//   const basicTrack = [
//     { title: 'HTML & CSS', description: 'Learn to structure and style your websites.' },
//     { title: 'JavaScript Basics', description: 'Understand core programming with JS.' },
//     { title: 'Responsive Design', description: 'Make your site mobile-friendly using Bootstrap.' },
//     { title: 'Git & GitHub', description: 'Track changes and collaborate on code.' },
//     { title: 'Basic Projects', description: 'Build simple websites to apply your skills.' },
//     { title: 'Portfolio Setup', description: 'Publish your work and create your brand.' },
//   ];

//   const intermediateTrack = [
//     { title: 'JavaScript DOM', description: 'Manipulate elements and build dynamic UIs.' },
//     { title: 'ES6+ & Modules', description: 'Write modern, scalable JavaScript code.' },
//     { title: 'React Fundamentals', description: 'Build component-based UIs.' },
//     { title: 'Routing & State', description: 'Handle navigation and data flow in React.' },
//     { title: 'APIs & Fetch', description: 'Consume APIs to show real data.' },
//     { title: 'Intermediate Projects', description: 'Build interactive apps like to-do lists or blogs.' },
//   ];

//   const advancedTrack = [
//     { title: 'Authentication', description: 'Implement login/signup features securely.' },
//     { title: 'React Performance', description: 'Optimize speed and load time.' },
//     { title: 'Backend with Django', description: 'Connect frontend to powerful backends.' },
//     { title: 'Full-stack Projects', description: 'Create full web applications with React + Django.' },
//     { title: 'Deployment & CI/CD', description: 'Publish your apps and automate workflows.' },
//     { title: 'Job Preparation', description: 'Prepare for freelance & job opportunities.' },
//   ];

//   const tabs = [
//     { id: 'basic', label: 'Basic Track', icon: <BsRocket /> },
//     { id: 'intermediate', label: 'Intermediate Track', icon: <BsLightningCharge /> },
//     { id: 'advanced', label: 'Advanced Track', icon: <BsStars /> },
//   ];

//   const trackData = {
//     basic: basicTrack,
//     intermediate: intermediateTrack,
//     advanced: advancedTrack,
//   };

//   return (
//     <section className="py-5 bg-light" id="learning-tracks">
//       <div className="container">
//         <div className="text-center mb-5" data-aos="fade-up">
//           <h2 className="fw-bold">Learning Tracks</h2>
//           <p className="text-muted">Choose your path and grow your skills step by step.</p>
//         </div>

//         {/* Tabs */}
//         <div className="d-flex justify-content-center mb-4">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`btn me-3 position-relative ${
//                 activeTab === tab.id ? 'text-primary fw-bold border-0' : 'text-secondary'
//               }`}
//               style={{
//                 background: 'none',
//                 fontSize: '1.1rem',
//               }}
//             >
//               <span className="me-1">{tab.icon}</span>
//               {tab.label}
//               {activeTab === tab.id && (
//                 <div
//                   className="position-absolute start-0 bottom-0 w-100"
//                   style={{ height: '3px', background: '#0d6efd', borderRadius: '2px' }}
//                 ></div>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Cards */}
//         <div className="row g-4">
//           {trackData[activeTab].map((step, index) => (
//             <div
//               key={index}
//               className="col-md-6 col-lg-4"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <div className="card h-100 shadow-sm border-0">
//                 <div className="card-body">
//                   <div className="mb-3 text-primary fs-2">
//                     {activeTab === 'basic' && <BsRocket />}
//                     {activeTab === 'intermediate' && <BsLightningCharge />}
//                     {activeTab === 'advanced' && <BsStars />}
//                   </div>
//                   <h5 className="card-title">{step.title}</h5>
//                   <p className="card-text">{step.description}</p>
//                   <button className="btn btn-outline-primary mt-3">Start Learning</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LearningTracks;

// import React, { useState, useEffect } from "react";
// import "./LearningTracks.css"; // optional for extra styling

// const tracks = [
//   {
//     id: "frontend",
//     title: "Front-End Development",
//     content:
//       "Learn HTML, CSS, JavaScript, React, and responsive design to build stunning user interfaces.",
//   },
//   {
//     id: "backend",
//     title: "Back-End Development",
//     content:
//       "Master databases, Django, REST APIs, and server-side logic to power your applications.",
//   },
//   {
//     id: "data",
//     title: "Data Analysis",
//     content:
//       "Get started with Python, Excel, SQL, and data visualization techniques.",
//   },
//   {
//     id: "ai",
//     title: "AI & Machine Learning",
//     content:
//       "Explore machine learning, neural networks, and practical AI applications.",
//   },
// ];




// const LearningTracks = () => {
//   const [activeTab, setActiveTab] = useState("frontend");
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section id="tracks" className="py-5 bg-light">
//       <div className="container">
//         <h2 className="text-center mb-4 fw-bold">Explore Learning Tracks</h2>

//         {isMobile ? (
//           // Mobile view: Accordion
//           <div className="accordion" id="trackAccordion">
//             {tracks.map((track) => (
//               <div className="accordion-item" key={track.id}>
//                 <h2 className="accordion-header" id={`heading-${track.id}`}>
//                   <button
//                     className={`accordion-button ${
//                       activeTab !== track.id ? "collapsed" : ""
//                     }`}
//                     type="button"
//                     onClick={() =>
//                       setActiveTab((prev) => (prev === track.id ? "" : track.id))
//                     }
//                   >
//                     {track.title}
//                   </button>
//                 </h2>
//                 <div
//                   id={`collapse-${track.id}`}
//                   className={`accordion-collapse collapse ${
//                     activeTab === track.id ? "show" : ""
//                   }`}
//                   aria-labelledby={`heading-${track.id}`}
//                   data-bs-parent="#trackAccordion"
//                 >
//                   <div className="accordion-body">{track.content}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           // Desktop view: Tabs
//           <>
//             <ul className="nav nav-tabs justify-content-center mb-3">
//               {tracks.map((track) => (
//                 <li className="nav-item" key={track.id}>
//                   <button
//                     className={`nav-link ${activeTab === track.id ? "active" : ""}`}
//                     onClick={() => setActiveTab(track.id)}
//                   >
//                     {track.title}
//                   </button>
//                 </li>
//               ))}
//             </ul>

//             <div className="tab-content bg-white p-4 border rounded shadow-sm">
//               {tracks.map(
//                 (track) =>
//                   activeTab === track.id && (
//                     <div className="tab-pane fade show active" key={track.id}>
//                       <p>{track.content}</p>
//                     </div>
//                   )
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default LearningTracks;
// import React, { useState, useEffect } from "react";
// import "./LearningTracks.css";

// const tracks = [
//   {
//     id: "frontend",
//     icon: "bi bi-laptop",
//     title: "Front-End Development",
//     content:
//       "Learn HTML, CSS, JavaScript, React, and responsive design to build stunning user interfaces.",
//   },
//   {
//     id: "backend",
//     icon: "bi bi-server",
//     title: "Back-End Development",
//     content:
//       "Master databases, Django, REST APIs, and server-side logic to power your applications.",
//   },
//   {
//     id: "data",
//     icon: "bi bi-bar-chart-line",
//     title: "Data Analysis",
//     content:
//       "Get started with Python, Excel, SQL, and data visualization techniques.",
//   },
//   {
//     id: "ai",
//     icon: "bi bi-robot",
//     title: "AI & Machine Learning",
//     content:
//       "Explore machine learning, neural networks, and practical AI applications.",
//   },
// ];

// const LearningTracks = () => {
//   const [activeTab, setActiveTab] = useState("frontend");
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section id="tracks" className="py-5">
//       <div className="container">
//         <h2 className="text-center mb-4 fw-bold">Learning Tracks</h2>

//         {isMobile ? (
//           <div className="accordion" id="learningTracksAccordion">
//             {tracks.map((track, index) => (
//               <div className="accordion-item" key={track.id}>
//                 <h2 className="accordion-header" id={`heading-${track.id}`}>
//                   <button
//                     className={`accordion-button ${
//                       activeTab !== track.id ? "collapsed" : ""
//                     }`}
//                     type="button"
//                     onClick={() =>
//                       setActiveTab(activeTab === track.id ? "" : track.id)
//                     }
//                     aria-expanded={activeTab === track.id}
//                     aria-controls={`collapse-${track.id}`}
//                   >
//                     <i className={`${track.icon} me-2`}></i> {track.title}
//                   </button>
//                 </h2>
//                 <div
//                   id={`collapse-${track.id}`}
//                   className={`accordion-collapse collapse ${
//                     activeTab === track.id ? "show" : ""
//                   }`}
//                   aria-labelledby={`heading-${track.id}`}
//                   data-bs-parent="#learningTracksAccordion"
//                 >
//                   <div className="accordion-body">{track.content}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <>
//             <ul className="nav nav-tabs justify-content-center mb-3">
//               {tracks.map((track) => (
//                 <li className="nav-item" key={track.id}>
//                   <button
//                     className={`nav-link ${
//                       activeTab === track.id ? "active" : ""
//                     }`}
//                     onClick={() => setActiveTab(track.id)}
//                   >
//                     <i className={`${track.icon} me-2`}></i>
//                     {track.title}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             <div className="tab-content p-4">
//               {tracks.map(
//                 (track) =>
//                   activeTab === track.id && (
//                     <div key={track.id} className="tab-pane active show fade">
//                       <p>{track.content}</p>
//                     </div>
//                   )
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default LearningTracks;
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./LearningTracks.css"; // Add styles as needed

const tracksData = {
  basic: [
    {
      title: "HTML & CSS",
      description: "Master the foundation of web development.",
    },
    {
      title: "Responsive Design",
      description: "Make your websites look good on all devices.",
    },
    {
      title: "JavaScript Basics",
      description: "Add interactivity to your pages.",
    },
  ],
  intermediate: [
    {
      title: "JavaScript DOM",
      description: "Manipulate HTML & CSS with JavaScript.",
    },
    {
      title: "Git & GitHub",
      description: "Version control your projects like a pro.",
    },
    {
      title: "ES6+ Features",
      description: "Modern JavaScript tools and syntax.",
    },
  ],
  advanced: [
    {
      title: "React.js",
      description: "Build powerful UIs with React.",
    },
    {
      title: "APIs & Fetch",
      description: "Connect your app with live data.",
    },
    {
      title: "Project Deployment",
      description: "Put your web app live on the internet.",
    },
  ],
};

const LearningTracks = () => {
  const [activeTrack, setActiveTrack] = useState("basic");

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const handleTabClick = (track) => {
    setActiveTrack(track);
    AOS.refresh(); // Re-apply animations on tab switch
  };

  return (
    <section id="tracks" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Learning Tracks</h2>

        {/* Tabs */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
          {["basic", "intermediate", "advanced"].map((track) => (
            <button
              key={track}
              className={`btn ${
                activeTrack === track ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => handleTabClick(track)}
            >
              {track.charAt(0).toUpperCase() + track.slice(1)}
            </button>
          ))}
        </div>

        {/* Track Content */}
        <div className="row g-4">
          {tracksData[activeTrack].map((item, index) => (
            <div
              key={index}
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{item.title}</h5>
                  <p className="card-text flex-grow-1">{item.description}</p>
                  <button className="btn btn-outline-primary mt-3">
                    Start this Track
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTracks;
