import React, { useEffect, useRef, useState } from 'react';
import s from './VideoTutorials.module.css';
import { NavLink } from 'react-router-dom';
import arrowRight from '../../images/moreVideoArrow.png';
import VideoList from './VideoList';
import { isMobile } from 'constants/useMediaQueries';

const videoIds = [
  {
    videoTitle: 'Ремонт тентов с выездом к заказчику',
    videoId: '0X6fZoFcZ6c',
  },
  {
    videoTitle: 'Ремонт автомобильных грузовых тентов с выездом к заказчику',
    videoId: '0hGYJOyUJdw',
  },
  {
    videoTitle: 'Ремонт тентов, замена крыши тента на газель',
    videoId: '8U-sbSv1cbo',
  },
  {
    videoTitle: 'Ремонт тентов грузовых автомобилей',
    videoId: '11UgzJo4sO4',
  }
];

const VideoTutorials = () => {

   const containerRef = useRef(null);
  const [showScrollBack, setShowScrollBack] = useState(false);

const scrollRight = () => {
  if (containerRef.current) {
    containerRef.current.scrollBy({
      left: 400, // Прокручуємо на ширину картки
      behavior: 'smooth', // З анімацією
    });
    setShowScrollBack(true);
  }
};

const scrollLeft = () => {
  if (containerRef.current) {
    containerRef.current.scrollBy({
      left: -400, // Прокручуємо назад на ширину картки
      behavior: 'smooth', // З анімацією
    });
  }
};

useEffect(() => {
  const container = containerRef.current;
  container.addEventListener('mouseenter', () => {
    container.classList.add('hovered');
  });
  container.addEventListener('mouseleave', () => {
    container.classList.remove('hovered');
  });

  const handleScroll = () => {
    setShowScrollBack(container.scrollLeft > 0); // Перевіряємо, чи прокручено вправо
  };

  container.addEventListener('scroll', handleScroll);

  return () => {
    container.removeEventListener('mouseenter', () => {
      container.classList.add('hovered');
    });
    container.removeEventListener('mouseleave', () => {
      container.classList.remove('hovered');
    });
    container.removeEventListener('scroll', handleScroll);
  };
}, []);

const mobileScreen = isMobile()

  return (
    <section className={s.section}>
      {mobileScreen ? (
        <h2 className={s.title}>
          <span className={s.styledTitle}>ВИДЕОУРОКИ</span> <br /> по ремонту
          тента
        </h2>
      ) : (
        <h2 className={s.title}>
          <span className={s.styledTitle}>ВИДЕОУРОКИ</span> по ремонту тента
        </h2>
      )}
      {mobileScreen && (
        <NavLink to={'/videotutorials'} className={s.link}>
          <img src={arrowRight} alt="link to videotutorials" />
        </NavLink>
      )}

      {mobileScreen && (
        <ul className={s.videoList}>
          {videoIds.slice(0, 4).map((el, idx) => (
            <li key={idx} className={s.videoItem}>
              <VideoList i={idx} videoId={el.videoId} title={el.videoTitle} />
            </li>
          ))}
        </ul>
      )}

      {!mobileScreen && (
        <div style={{ position: 'relative' }}>
          <div className={s.container} ref={containerRef}>
            <div className={s.cards}>
              {videoIds.slice(0, 4).map((el, idx) => (
                <VideoList
                  key={idx}
                  i={idx}
                  videoId={el.videoId}
                  title={el.videoTitle}
                />
              ))}
            </div>
            {showScrollBack && (
              <button className={s.scrollButtonLeft} onClick={scrollLeft}>
                <img
                  className={s.arrowLeft}
                  src={arrowRight}
                  width={50}
                  height={40}
                  alt="arrow to left scroll"
                />
              </button>
            )}

            <button className={s.scrollButtonRight} onClick={scrollRight}>
              <img
                src={arrowRight}
                width={50}
                height={40}
                alt="arrow to right scroll"
              />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoTutorials;
