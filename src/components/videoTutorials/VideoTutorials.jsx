import React from 'react'
import s from './VideoTutorials.module.css'
import { NavLink } from 'react-router-dom';
import arrowRight from '../../images/moreVideoArrow.png'
import VideoList from './VideoList';


const videoIds = ['0X6fZoFcZ6c', '0hGYJOyUJdw', '8U-sbSv1cbo', '11UgzJo4sO4']

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
              {videoIds.map((el, idx) => 
               (
          <li key={idx} className={s.videoContainer}>
            <VideoList i={idx} videoId={el} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default VideoTutorials