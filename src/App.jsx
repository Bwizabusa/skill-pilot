// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import NavBar from './components/NavBar';
// import HeroSection from './components/HeroSection';
// import Features from './components/Features';
// import WhySkillPilot from './components/WhySkillPilot';
// import LearningTracks from './components/LearningTracks'
// import ScrollToTop from './components/ScrollToTop';
// import JoinCommunity from './components/JoinCommunity';
// import Footer from './components/Footer';
// // import "aos/dist/aos.css";
// // import AOS from "aos";

// AOS.init({ duration: 800, once: true });
// const App = () => {
// // useEffect(() => {
// //     AOS.init({
// //       duration: 800, // Animation duration in ms
// //       once: true,    // Whether animation should happen only once
// //     });
// //   }, []);
//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   return (
//     <>

//      <NavBar
//       isMobileMenuOpen={isMobileMenuOpen}
//       setMobileMenuOpen={setMobileMenuOpen}
//     />
//     <HeroSection isMobileMenuOpen={isMobileMenuOpen} />
//     <main>
      
//       <Features/>
//       <WhySkillPilot />
//       <LearningTracks/>
//       <JoinCommunity/>
//     </main>
//       <Footer/>
//       <ScrollToTop/>
//       {/* <div className="container mt-5">
//         <div className="row">
//           <div className="col-md-6">
//             <h2>Welcome to SkillPilot!</h2>
//             <p>This is your Bootstrap-powered React app.</p>
//           </div>
//            <div className="col-md-6">
//              <img src="https://via.placeholder.com/300" className="img-fluid" />
//            </div>
//         </div>
//       </div> */}

    
//     </>
    
//   );
// }

// export default App;

import React, { useState } from "react";
 import NavBar from './components/NavBar';
 import HeroSection from './components/HeroSection';
 import Features from './components/Features';
 import WhySkillPilot from './components/WhySkillPilot';
 import LearningTracks from './components/LearningTracks'
 import ScrollToTop from './components/ScrollToTop';
 import JoinCommunity from './components/JoinCommunity';
 import Footer from './components/Footer';

const App = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <NavBar
        isMobileMenuOpen={isMobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <HeroSection isMobileMenuOpen={isMobileMenuOpen} />
      <Features />
      <WhySkillPilot />
      <LearningTracks />
      <JoinCommunity />
      <Footer />
       <ScrollToTop/>
       
    </>
  );
};

export default App;


