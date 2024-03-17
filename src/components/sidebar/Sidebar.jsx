import React from 'react'
import "./sidebar.css"
import SidebarButton from './SidebarButton'
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <img src='public/images/pfp1.jpg' className='profile-img' alt='pfp'/>
        <div>
            <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />}/>
            <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />}/>
            <SidebarButton title="Player" to="/player" icon={<FaPlay />}/>
            <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />}/>
            <SidebarButton title="Library" to="/library" icon={<IoLibrary />}/>
        </div>
        <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />}/>
    </div>

  )
}

export default Sidebar