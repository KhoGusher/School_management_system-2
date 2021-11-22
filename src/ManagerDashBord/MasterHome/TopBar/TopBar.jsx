import React from 'react'
import "./TopBar.css"
import "jquery"
import "popper.js/dist/umd/popper"
import "bootstrap/dist/js/bootstrap"//importing bpptstrap
import "bootstrap/dist/css/bootstrap.css"
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import Pic from "./mab.jpg"

export default function TopBar() {
    return (
        <div className="topbar">

            <div className="topbarWrapper">

                <div className="topLeft">
                    <span className="logo">SkyLabs360</span>
                    <input type="text" className="form-control" value="Search Here" />
                </div>
                <div className="navBarTitle"><h3>School Management System</h3></div>

                <div className="topRight">

                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src={Pic} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
        // <div>
        //     <nav className="navbar navbar-expand-lg navbar-style">
        //         <div className="container-fluid">
        //             <a className="navbar-brand" href="#">SkyLab360</a>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#">Home</a>
        //                     </li>

        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#">Services</a>
        //                     </li>
        //                 </ul>


        //             </div>
        //         </div>
        //     </nav>
        //     <div className="test">hie</div>
        // </div>
    )
}
