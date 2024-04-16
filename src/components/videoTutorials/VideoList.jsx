import React, { useState } from 'react';
import s from './VideoTutorials.module.css';

// const API_KEY = 'AIzaSyBUCd719LwtLESc7pELACuFVpfxx0D3wMc';
// const CHANNEL_ID = 'UCqn2rx3wn7f';
// const CHANNEL_NAME = '@user-qn2rx3wn7f';

// const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`;

const VideoList = ({videoId, i}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

    console.log(modalOpen);
    
  return (
    <li className={s.videoContainer}>
      <div onClick={openModal}>
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          width={170}
          alt="Video Thumbnail"
        />
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
    </li>
  );
};


//   const [videos, setVideos] = useState([]);

    
//     const searchChannel = async () => {
//       try {
//         const response = await axios.get(
//           `https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=${CHANNEL_NAME}&key=${API_KEY}`
//         );
//         const channelId = response.data.items;
//         console.log('CHANNEL_ID:', channelId);
//       } catch (error) {
//         console.error('Error searching channel:', error);
//       }
//     };

//     searchChannel();
    
//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//           const response = await axios.get(API_URL);
//         setVideos(response.data.items);
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   return (
//     <div>
//       <h2>Відео з каналу</h2>
//       <ul>
//         {videos.map(video => (
//           <li key={video.id.videoId}>
//             <a
//               href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src={video.snippet.thumbnails.default.url}
//                 alt={video.snippet.title}
//               />
//               <p>{video.snippet.title}</p>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );


export default VideoList;
