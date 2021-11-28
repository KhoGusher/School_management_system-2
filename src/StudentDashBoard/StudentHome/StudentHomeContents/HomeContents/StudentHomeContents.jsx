import React from 'react'
import "./HomeContents.css"
import { FaChalkboardTeacher, FaCodeBranch, FaUserGraduate } from 'react-icons/fa'
import { MdSubject, MdClass, MdPeople,MdPayments } from 'react-icons/md'
import { Link } from "react-router-dom"
import { GrDocumentPerformance } from "react-icons/gr";
import { VscGraphLine } from "react-icons/vsc";
//VscAccount

export default function HomeContents() {
    return (
        <div className="home">
            <div className="HomeContents">

                <Link to="/StudentSubjects">
                    <div className="homeContentIterm">
                        <MdSubject size="8em" />
                        <span className="homeContentitermTitle">Subjects</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Total:10</span>
                        </div>

                    </div>
                </Link>
                <Link to="/StudentPerfomance">
                    <div className="homeContentIterm">

                        <VscGraphLine size="8em" />
                        <span className="homeContentitermTitle">Perfomance</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Assessments/Exam Results</span>
                        </div>

                    </div>
                </Link>
                <Link to="/StudentPayments">
                    <div className="homeContentIterm">
                        <MdPayments size="8em" />
                        <span className="homeContentitermTitle">Payments</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">School Payments</span>
                        </div>

                    </div>
                </Link>


            </div>

        </div>

    )
}
