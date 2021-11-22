import React from 'react'
import "./SideBar.css"
import { LineStyle } from '@material-ui/icons';
import { Link } from "react-router-dom"

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sideBarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTittle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Link to="/Home">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </Link>
                        </li>
                        {/* end of home */}
                        <li className="sidebarListItem">
                            <Link to="/Subjects">
                                <LineStyle className="sidebarIcon" />
                                Subjects
                            </Link>

                        </li>
                        <li className="sidebarListItem">
                            <Link to="/Classes">
                                <LineStyle className="sidebarIcon" />
                                Classes
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/Teachers">
                                <LineStyle className="sidebarIcon" />
                                Teachers
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/Students">
                                <LineStyle className="sidebarIcon" />
                                Students
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/Guardians">
                                <LineStyle className="sidebarIcon" />
                                Guardians
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/Ranks">
                                <LineStyle className="sidebarIcon" />
                                Ranks
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/Candidates">
                                <LineStyle className="sidebarIcon" />
                                Candidates
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/Calender">
                                <LineStyle className="sidebarIcon" />
                                Calendar
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/Timetable">
                                <LineStyle className="sidebarIcon" />
                                Time Table
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/Support">
                                <LineStyle className="sidebarIcon" />
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SideBar
