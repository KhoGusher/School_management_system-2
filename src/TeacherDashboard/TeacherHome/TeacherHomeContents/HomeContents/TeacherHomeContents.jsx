import React from 'react'
import "./HomeContents.css"
import { FaChalkboardTeacher, FaCodeBranch, FaUserGraduate } from 'react-icons/fa'
import { MdSubject, MdClass, MdPeople } from 'react-icons/md'
import { Link } from "react-router-dom"

export default function HomeContents() {
    return (
        <div className="home">
            <div className="HomeContents">
                <Link to="/Students" style={{ textDecoration: 'none' }}>
                    <div className="homeContentIterm">

                        <MdPeople size="8em" />
                        <span className="homeContentitermTitle">Students</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Males:22</span>
                        </div>
                        <span className="homeContenterContentsSub">Females:2</span>
                    </div>
                </Link>
                <Link to="/TeacherSubjects">
                    <div className="homeContentIterm">

                        <MdSubject size="8em" />
                        <span className="homeContentitermTitle">Subjects</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Total:10</span>
                        </div>

                    </div>
                </Link>
                <Link to="/TeacherClasses" style={{ textDecoration: 'none' }}>
                    <div className="homeContentIterm">
                        {/* <img src={School} alt="" /> */}
                        <MdClass size="8em" />
                        <span className="homeContentitermTitle">Classes</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Total:10</span>
                        </div>

                    </div>
                </Link>

            </div>
            <div className="HomeContents" style={{ textDecoration: 'none' }}>

                <Link to="/Candidates" style={{ textDecoration: 'none' }}>
                    <div className="homeContentIterm">

                        <MdPeople size="8em" />
                        <span className="homeContentitermTitle">Guardians</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Males:1</span>
                        </div>
                        <span className="homeContenterContentsSub">Females:12</span>
                    </div>
                </Link>

            </div>

        </div>

    )
}
