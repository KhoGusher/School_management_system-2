import React from 'react'
import "./HomeContents.css"
import { FaChalkboardTeacher, FaCodeBranch, FaUserGraduate } from 'react-icons/fa'
import { MdSubject, MdClass, MdPeople, MdNotificationImportant, MdReport, MdTimer } from 'react-icons/md'
import { Link } from "react-router-dom"

export default function HomeContents() {
    return (
        <div className="home">
            <div className="HomeContents">
                <Link to="/Teachers" style={{ textDecoration: 'none' }}>
                    <div className="homeContentIterm">
                        {/* className="card-img-top" */}
                        {/* <img src={Teacher} alt="" /> */}
                        <FaChalkboardTeacher size="8em" />
                        <span className="homeContentitermTitle">Teachers</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Males:12</span>
                        </div>
                        <span className="homeContenterContentsSub">Females:12</span>
                    </div>
                </Link>
                <Link to="/Students" style={{ textDecoration: 'none' }}>
                    <div className="homeContentIterm">
                        {/* <img src={Student} alt="" /> */}
                        <MdPeople size="8em" />
                        <span className="homeContentitermTitle">Students</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Males:22</span>
                        </div>
                        <span className="homeContenterContentsSub">Females:2</span>
                    </div>
                </Link>
                <Link to="/Candidates" style={{ textDecoration: 'none' }}>
                    <div className="homeContentIterm">
                        {/* <img src={Student} alt="" /> */}
                        <FaUserGraduate size="8em" />
                        <span className="homeContentitermTitle">Candidates</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Males:1</span>
                        </div>
                        <span className="homeContenterContentsSub">Females:12</span>
                    </div>
                </Link>

            </div>
            <div className="HomeContents" style={{ textDecoration: 'none' }}>
                <Link to="/Subjects">
                    <div className="homeContentIterm">
                        {/* <img src={Subjects} alt="" /> */}
                        <MdSubject size="8em" />
                        <span className="homeContentitermTitle">Subjects</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Total:10</span>
                        </div>

                    </div>
                </Link>
                <Link to="/Classes" style={{ textDecoration: 'none' }}>
                    <div className="homeContentIterm">
                        <MdClass size="8em" />
                        <span className="homeContentitermTitle">Classes</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Total:10</span>
                        </div>

                    </div>
                </Link>
                <Link to="/Ranks" style={{ textDecoration: 'none' }}>
                    <div className="homeContentIterm">
                        <FaCodeBranch size="8em" />
                        <span className="homeContentitermTitle">Ranks</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Total:13</span>
                        </div>

                    </div>
                </Link>
            </div>
            <div className="HomeContents" style={{ textDecoration: 'none' }}>
                <Link to="/Notifications">
                    <div className="homeContentIterm">
                        {/* <img src={Subjects} alt="" /> */}
                        <MdNotificationImportant size="8em" />
                        <span className="homeContentitermTitle">Notices</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Total:10</span>
                        </div>

                    </div>
                </Link>
                <Link to="/Reports" style={{ textDecoration: 'none' }}>
                    <div className="homeContentIterm">
                        {/* <img src={Ranking} alt="" /> */}
                        <MdReport size="8em" />
                        <span className="homeContentitermTitle">Reports</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">School Report Generation</span>
                        </div>

                    </div>
                </Link>
                <Link to="/Timetable" style={{ textDecoration: 'none' }}>
                    <div className="homeContentIterm">
                        {/* <img src={School} alt="" /> */}
                        < MdTimer size="8em" />
                        <span className="homeContentitermTitle">Timetable</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">View School Time Table</span>
                        </div>

                    </div>
                </Link>

            </div>

        </div>


    )
}
