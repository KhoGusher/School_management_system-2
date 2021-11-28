import React from 'react'
import "./HomeContents.css"
import { FaChalkboardTeacher, FaCodeBranch, FaUserGraduate } from 'react-icons/fa'
import { MdSubject, MdSupport, MdPeople } from 'react-icons/md'
import { Link } from "react-router-dom"

export default function HomeContents() {
    return (
        <div className="home">
            <div className="HomeContents">
                <Link to="/TeacherStudents" style={{ textDecoration: 'none' }}>
                    <div className="homeContentIterm">
                        <MdPeople size="8em" />
                        <span className="homeContentitermTitle">Students</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Males:22</span>
                        </div>
                        <span className="homeContenterContentsSub">Females:2</span>
                    </div>
                </Link>
                <Link to="/TeacherGuardians" style={{ textDecoration: 'none' }}>
                    <div className="homeContentIterm">
                        <MdPeople size="8em" />
                        <span className="homeContentitermTitle">Calendar</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">School Calender</span>
                        </div>

                    </div>
                </Link>
                <Link to="/TeacherClasses" style={{ textDecoration: 'none' }}>
                    <div className="homeContentIterm">

                        <MdSupport size="8em" />
                        <span className="homeContentitermTitle">Support</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Contact Support</span>
                        </div>

                    </div>
                </Link>

            </div>


        </div>

    )
}
