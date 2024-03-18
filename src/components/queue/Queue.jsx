import React from "react";
import "./queue.css";

const Queue = ({ tracks, setCurrentIndex }) => {
  function msToMinutesAndSeconds(ms) {
    const totalSeconds = Math.floor(ms / 1000);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    return minutes + ":" + formattedSeconds;
  }

  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Up Next</p>
        <div className="queue-list">
        {tracks?.map((track, index) => (
            <div
              key={index} 
              className="queue-item flex"
              onClick={() => setCurrentIndex(index)}
            >
              <p className="track-name">{track?.track?.name}</p>
              <p>{msToMinutesAndSeconds(track?.track.duration_ms)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queue;
