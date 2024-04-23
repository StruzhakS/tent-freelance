import React, { useState } from 'react';
import s from './VideoTutorials.module.css';


const Video = ({ videoId, title }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
    
   return (
     <>
       <div className={s.videoItem} onClick={openModal}>
         <img
           className={s.imageOfVideo}
           alt="Video Thumbnail"
           src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
         />
         <h3 className={s.videoTitle}>{title}</h3>
       </div>
       {modalOpen && (
         <div
           className="modal"
           onClick={closeModal}
           style={{ display: modalOpen ? 'block' : 'none' }}
         >
           <div className="modal-content" onClick={e => e.stopPropagation()}>
             <span className="close" onClick={closeModal}>
               &times;
             </span>
             <iframe
               width="100%"
               height="315"
               src={`https://www.youtube.com/embed/${videoId}`}
               frameBorder="0"
               allowFullScreen
               title="YouTube Video"
             ></iframe>
           </div>
         </div>
       )}
     </>
   );
};

export default Video;
