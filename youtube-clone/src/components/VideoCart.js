import React from "react";

const VideoCart = ({ videos }) => {
  console.log(videos);
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

export const AdVideoCart = ({ videos }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCart videos={videos} />
    </div>
  );
};

export default VideoCart;
