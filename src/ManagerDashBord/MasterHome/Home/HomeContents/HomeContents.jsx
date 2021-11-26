import React from 'react'
import "./HomeContents.css"
import { FaChalkboardTeacher, FaCodeBranch, FaUserGraduate } from 'react-icons/fa'
import { MdSubject, MdClass, MdPeople } from 'react-icons/md'
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


                {/* <div class="card" >
                <img src={Pic} class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}
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
                        {/* <img src={School} alt="" /> */}
                        <MdClass size="8em" />
                        <span className="homeContentitermTitle">Classes</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Total:10</span>
                        </div>

                    </div>
                </Link>
                <Link to="/Ranks" style={{ textDecoration: 'none' }}>
                    <div className="homeContentIterm">
                        {/* <img src={Ranking} alt="" /> */}
                        <FaCodeBranch size="8em" />
                        <span className="homeContentitermTitle">Ranks</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Total:13</span>
                        </div>

                    </div>
                </Link>
            </div>

        </div>

    )
}
