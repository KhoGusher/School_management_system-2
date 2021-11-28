import React from 'react'
import "./SideBar.css"
import { FaAlignJustify, FaCalendarDay, FaHome, FaChalkboardTeacher, FaCodeBranch, FaUserGraduate } from 'react-icons/fa'
import { MdSubject, MdClass, MdPeople, MdTimer, MdSupport } from 'react-icons/md'
import { Link } from "react-router-dom"
import profile from "./profile.jpg"




function TeacherSideBar() {
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
                            <Link to="/StudentHome">
                                <FaHome className="sidebarIcon" />
                                Home
                            </Link>
                        </li>
                        {/* end of home */}
                        <li className="sidebarListItem">
                            <Link to="/StudentSubjects">
                                <MdSubject className="sidebarIcon" />
                                Subjects
                            </Link>

                        </li>

                        <li className="sidebarListItem">
                            <Link to="/StudentAssessments">
                                <MdPeople className="sidebarIcon" />
                                Assessments
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/StudentExamResults">
                                <MdPeople className="sidebarIcon" />
                                Exam Results
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/Calender">
                                <FaCalendarDay className="sidebarIcon" />
                                Payments
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
export default TeacherSideBar
