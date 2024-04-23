import React from 'react'
import s from './ListOfVideo.module.css'
import { videoIds } from './VideoTutorials';
import Video from './Video';

const ListOfVideo = () => {
  return (
    <div className={s.listOfVideo}>
      <ul className={s.videoList}>
        {videoIds.slice(0, 4).map((el, idx) => (
          <li key={idx} className={s.videoItem}>
            <Video i={idx} videoId={el.videoId} title={el.videoTitle} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfVideo