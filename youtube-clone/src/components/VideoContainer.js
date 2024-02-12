import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCart, { AdVideoCart } from "./VideoCart";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCart videos={videos[0]} />}
      {videos.map((video) => (
        <Link to={"/watch/?v=" + video.id} key={video.id}>
          <VideoCart videos={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
