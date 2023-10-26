"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = (youtubeId) => {
  const [isOpen, setIsOpen] = useState(true);

  const option = {
    width: 300,
    height: 250,
  };

  const handleVideoPlayer = () => {
    setIsOpen((prev) => !prev);
  };

  const Player = () => {
    return (
      <div className="bottom-2 right-2 fixed">
        <button
          className="text-primary bg-secondary float-right px-3 mb-1"
          onClick={handleVideoPlayer}>
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          onError={() => alert("Video is broken, please try another.")}
          opts={option}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="bottom-5 right-5 bg-primary text-dark hover:bg-accent fixed w-32 text-xl transition-all rounded shadow-xl">
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
