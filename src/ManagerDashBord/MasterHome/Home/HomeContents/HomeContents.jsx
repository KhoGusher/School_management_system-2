import React from 'react'
import "./HomeContents.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import Pic from "./mab.jpg"
import Teacher from "./teacher.png"
import Student from "./student.png"
import Subjects from "./subjects.png"
import Classe from "./classes.jpg"
import Ranking from "./ranking.jpg"
import School from "./school.png"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HomeContents() {
    return (
        <div className="home">
            <div className="HomeContents">
                <Link to="/Teachers" style={{ textDecoration: 'none' }}>
                    <div className="homeContentIterm">
                        {/* className="card-img-top" */}
                        <img src={Teacher} alt="" />
                        <span className="homeContentitermTitle">Teachers</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Males:12</span>
                        </div>
                        <span className="homeContenterContentsSub">Females:12</span>
                    </div>
                </Link>
                <Link to="/Students" style={{ textDecoration: 'none' }}>
                    <div className="homeContentIterm">
                        <img src={Student} alt="" />
                        <span className="homeContentitermTitle">Students</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Males:22</span>
                        </div>
                        <span className="homeContenterContentsSub">Females:2</span>
                    </div>
                </Link>
                <Link to="/Candidates" style={{ textDecoration: 'none' }}>
                    <div className="homeContentIterm">
                        <img src={Student} alt="" />
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
                        <img src={Subjects} alt="" />
                        <span className="homeContentitermTitle">Subjects</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Total:10</span>
                        </div>

                    </div>
                </Link>
                <Link to="/Classes" style={{ textDecoration: 'none' }}>
                    <div className="homeContentIterm">
                        <img src={School} alt="" />
                        <span className="homeContentitermTitle">Classes</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Total:</span>
                        </div>

                    </div>
                </Link>
                <Link to="/Ranks" style={{ textDecoration: 'none' }}>
                    <div className="homeContentIterm">
                        <img src={Ranking} alt="" />
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
