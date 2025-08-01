// // 
// import React, { useState } from "react";
// import { BiMenu, BiX } from "react-icons/bi";
// // import "./Navbar.css"; 

// const NavBar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen((prev) => !prev);
//   };

//   const handleNavClick = (e, targetId) => {
//     e.preventDefault();
//     const target = document.getElementById(targetId);
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth" });
//       setMobileMenuOpen(false);
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-sm">
//       <div className="container">
//         <a className="navbar-brand fw-bold" href="/">
//           SkillPilot
//         </a>

//         <button
//           className="btn d-lg-none"
//           onClick={toggleMobileMenu}
//           aria-label="Toggle menu"
//         >
//           {isMobileMenuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
//         </button>

//         <div
//           className={`collapse navbar-collapse justify-content-end ${
//             isMobileMenuOpen ? "show d-block mt-3" : "d-none d-lg-block"
//           }`}
//         >
//           <ul className="navbar-nav text-center text-lg-start gap-lg-3">
//             <li className="nav-item">
//               <a
//                 href="#hero"
//                 className="nav-link"
//                 onClick={(e) => handleNavClick(e, "hero")}
//               >
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 href="#features"
//                 className="nav-link"
//                 onClick={(e) => handleNavClick(e, "features")}
//               >
//                 Features
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 href="#why"
//                 className="nav-link"
//                 onClick={(e) => handleNavClick(e, "why")}
//               >
//                 Why SkillPilot
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 href="#tracks"
//                 className="nav-link"
//                 onClick={(e) => handleNavClick(e, "tracks")}
//               >
//                 Tracks
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 href="#community"
//                 className="nav-link"
//                 onClick={(e) => handleNavClick(e, "community")}
//               >
//                 Community
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 href="#footer"
//                 className="nav-link"
//                 onClick={(e) => handleNavClick(e, "footer")}
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React from "react";
import { BiMenu, BiX } from "react-icons/bi";

const NavBar = ({ isMobileMenuOpen, setMobileMenuOpen }) => {
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          SkillPilot
        </a>

        <button
          className="btn d-lg-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${
            isMobileMenuOpen ? "show d-block mt-3" : "d-none d-lg-block"
          }`}
        >
          <ul className="navbar-nav text-center text-lg-start gap-lg-3">
            {[
              ["hero", "Home"],
              ["features", "Features"],
              ["why", "Why SkillPilot"],
              ["tracks", "Tracks"],
              ["community", "Community"],
              ["footer", "Contact"],
            ].map(([id, label]) => (
              <li className="nav-item" key={id}>
                <a
                  href={`#${id}`}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, id)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
