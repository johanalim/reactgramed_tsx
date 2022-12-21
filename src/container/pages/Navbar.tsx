import React from "react";
import { Button } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Navbar.css'
export class Navbar extends React.Component{
    render() {
        return (
            <div className='navbar-container'>
                <div className="left-side">
                    <div className="left-side-logo">
                        Logo
                    </div>
                </div>
                <div className="center-side">
                    <div className="center-side-search-box">
                        <input placeholder="Cari di Gramedia"/>
                    </div>
                </div>
                <div className="right-side">
                    <div className="right-side-menu">
                        <NotificationsIcon />
                    </div>
                    <div className="right-side-menu">
                        <Button variant="contained" href="/Subscribe">Langganan</Button>
                        <Button variant="contained" href="/Login">Masuk</Button>
                    </div>
                </div>
            </div>
        )
    }
}