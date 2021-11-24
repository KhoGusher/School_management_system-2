import React from 'react'
import "./HomeContents.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import Pic from "./mab.jpg"
import { Link } from "react-router-dom"

export default function HomeContents() {
    return (
        <div>
            <div className="HomeContents">
                <Link to="/Teachers">
                    <div className="homeContentIterm">
                        <img src={Pic} className="card-img-top" alt="" />
                        <span className="homeContentitermTitle">Teachers</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Males:12</span>
                        </div>
                        <span className="homeContenterContentsSub">Females:12</span>
                    </div>
                </Link>
                <Link to="/Students">
                    <div className="homeContentIterm">
                        <img src={Pic} className="card-img-top" alt="" />
                        <span className="homeContentitermTitle">Students</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Males:22</span>
                        </div>
                        <span className="homeContenterContentsSub">Females:2</span>
                    </div>
                </Link>
                <Link to="/Candidates">
                    <div className="homeContentIterm">
                        <img src={Pic} className="card-img-top" alt="" />
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
            <div className="HomeContents">
                <Link to="/Subjects">
                    <div className="homeContentIterm">
                        <img src={Pic} className="card-img-top" alt="" />
                        <span className="homeContentitermTitle">Subjects</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Total:10</span>
                        </div>

                    </div>
                </Link>
                <Link to="/Classes">
                    <div className="homeContentIterm">
                        <img src={Pic} className="card-img-top" alt="" />
                        <span className="homeContentitermTitle">Classes</span>
                        <div className="homeContenterContents">
                            <span className="homeContenterContentsSub">Total:</span>
                        </div>

                    </div>
                </Link>
                <Link to="/Ranks">
                    <div className="homeContentIterm">
                        <img src={Pic} className="card-img-top" alt="" />
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
