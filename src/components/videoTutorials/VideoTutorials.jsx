import React from 'react';
import s from './VideoTutorials.module.css';
import { NavLink } from 'react-router-dom';
import arrowRight from '../../images/moreVideoArrow.png';
import VideoList from './VideoList';

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
 
  return (
    <section className={s.section}>
      <h2 className={s.title}>
        <span className={s.styledTitle}>ВИДЕОУРОКИ</span> <br /> по ремонту
        тента
      </h2>
      <NavLink to={'/videotutorials'} className={s.link}>
        <img src={arrowRight} alt="link to videotutorials" />
      </NavLink>
      <ul className={s.videoList}>
        {videoIds.slice(0, 4).map((el, idx) => (
          <li key={idx} className={s.videoContainer}>
            <VideoList i={idx} videoId={el.videoId} title={el.videoTitle} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default VideoTutorials;
