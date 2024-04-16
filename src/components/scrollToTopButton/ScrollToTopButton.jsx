import React, { useState, useEffect } from 'react';
import s from './ScrollToTopButton.module.css';
import arrowTop from '../../images/arrowTop.png';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Визначення, чи потрібно показувати кнопку при прокручуванні
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > window.innerHeight * 3) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Підйом скролла при кліку на кнопку
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button className={s.scrollToTopBtn} onClick={scrollToTop}>
          <img src={arrowTop} alt="go to top of website" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
