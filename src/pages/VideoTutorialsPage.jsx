import ListOfVideo from 'components/videoTutorials/ListOfVideo';
import React, { useEffect, useState } from 'react';

const YOU_TUBE_APIKEY = 'AIzaSyC_g6W1DNsfffe3-b8xsbHC7p7uITrEhnQ';
const CHANEL_ID = 'UCCHbfPlV3EVmlViN-2UTPcg';

const VideoTutorialsPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANEL_ID}&key=${YOU_TUBE_APIKEY}`
        );
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    // <div>
    //   <div className="video-container">
    //     {videos.slice(1).map(video => (
    //       // videos.slice(1) вирізаю перше відео, тому що воно не доступне
    //       <div key={video.etag} className="video-wrapper">
    //         <h2>{video.snippet.title }</h2>
    //         <iframe
    //           title={video.snippet.title}
    //           width="560"
    //           height="315"
    //           src={`https://www.youtube.com/embed/${video.id.videoId}`}
    //           frameBorder="0"
    //           allowFullScreen
    //         ></iframe>
    //         <p>
    //           {video.snippet.localized?.description ||
    //             video.snippet.description}
    //         </p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <ListOfVideo videos={videos } />
  );
};

export default VideoTutorialsPage;
