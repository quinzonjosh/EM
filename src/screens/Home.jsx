import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "./Library";
import Feed from "./Feed";
import Trending from "./Trending";
import Player from "./Player";
import Favorites from "./Favorites";
import "./home.css";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
