import React, { useState, useEffect } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';
// import './ScrollToTop.css';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button className="scroll-top-btn" onClick={scrollToTop}>
        <BsArrowUpCircleFill size={36} />
      </button>
    )
  );
};

export default ScrollToTop;
