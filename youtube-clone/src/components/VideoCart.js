import React from "react";

const VideoCart = ({ videos }) => {
  const { snippet, statistics } = videos;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt="thumbnails"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCart;
