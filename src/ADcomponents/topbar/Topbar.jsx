import React from "react";
import './Topbar.css';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import Lamborghini from './Lamborghini.jpg'

const Topbar = () => {

    return (
      <div className="topbar">
        <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin Panel</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src={Lamborghini} alt="Lamborghini" className="lamborghini" />
                </div>
        </div>
      </div>
    )
    };
    
    export default Topbar;