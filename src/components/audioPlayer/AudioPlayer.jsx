import React from "react";
import "./AudioPlayer.css"
import ProgressCircle from "./ProgressCircle";

const AudioPlayer = ({ currenTrack }) => {
  return (
    <div className="player-body flex">
      <div className="player-left">
        <ProgressCircle
          percentage={75}
          isPlaying={true}
          image={currenTrack?.images[0]?.url}
          size={300}
          color="#c96850"
        />
      </div>
      <div className="player-right-body"></div>
    </div>
  );
};

export default AudioPlayer;
