import React from 'react'
import "./SideBar.css"
import { FaAlignJustify, FaCalendarDay, FaHome, FaChalkboardTeacher,FaCodeBranch, FaUserGraduate } from 'react-icons/fa'
import { MdSubject, MdClass, MdPeople, MdTimer, MdSupport } from 'react-icons/md'
import { Link } from "react-router-dom"
import profile from "./profile.jpg"




function SideBar() {
    return (
        <div className="sidebar">

            <div className="sideBarWrapper">
                <div className="sidebarMenu">
                    <div className="dashbord">
                        <h3 className="sidebarTittle">Dashboard</h3>
                        <FaAlignJustify className=" sidebarIcon hidesidebar" />
                    </div>
                    <div className="userShowTop">
                        <img src={profile} alt="" className="userShowImage"></img>
                    </div>

                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Link to="/Home">
                                <FaHome className="sidebarIcon" />
                                Home
                            </Link>
                        </li>
                        {/* end of home */}
                        <li className="sidebarListItem">
                            <Link to="/Subjects">
                                <MdSubject className="sidebarIcon" />
                                Subjects
                            </Link>

                        </li>
                        <li className="sidebarListItem">
                            <Link to="/Classes">
                                <MdClass className="sidebarIcon" />
                                Classes
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/Teachers">
                                <FaChalkboardTeacher className="sidebarIcon" />
                                Teachers
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/Students">
                                <MdPeople className="sidebarIcon" />
                                Students
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/Guardians">
                                <MdPeople className="sidebarIcon" />
                                Guardians
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/Ranks">
                                <FaCodeBranch className="sidebarIcon" />
                                Ranks
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/Candidates">
                                <FaUserGraduate className="sidebarIcon" />
                                Candidates
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/Calender">
                                <FaCalendarDay className="sidebarIcon" />
                                Calendar
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/Timetable">
                                <MdTimer className="sidebarIcon" />
                                Time Table
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/Support">
                                <MdSupport className="sidebarIcon" />
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
