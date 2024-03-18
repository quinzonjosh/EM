import React, { useEffect, useState } from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../spotify";
import SongCard from "../components/songcard/SongCard";
import Queue from "../components/queue/Queue";

const Player = () => {
  const location = useLocation();
  // console.log(location); 

  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);

  useEffect(() => {
    if (location?.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          // console.log(res.data);
          setTracks(res.data.items);
          setCurrentTrack(res.data.items[0].track)
        });
    }
  }, [location.state]);

  return (
    <div className="screen-container flex">
      <div className="left-player-body"></div>
      <div className="right-player-body">
        {console.log(currentTrack)}
        <SongCard album={currentTrack.album}/>
        <Queue album/>
      </div>
    </div>
  );
};

export default Player;
