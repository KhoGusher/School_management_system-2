import React from 'react'
import "./GuardianDetails.css"
import profile from "./profile.jpg"
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
import { Link } from '@material-ui/core';

export default function TeacherGuardians() {
    return (

        <div className="teacher">
            <div className="teacherTitleContainer">
                <h3 className="teacherTitle">Guardian Details</h3>

            </div>
            <div className="teacherContaine">
                <div className="teacherShow">
                    <div className="userShowTop">
                        <img src={profile} alt="" className="userShowImage"></img>
                    </div>
                    <div className="userShowBottom"></div>
                    <div className="userShowTopTitle">
                        <span className="userShowUserName">macheda junior patrick</span>

                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">D.O.B : 10.12.1999</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">Gender : Male</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">District : Zomba</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">Village : khuvinda</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">Residential Address : chikanda</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">Nationality : Malawi</span>
                        </div>

                        <span className="userShowTitle">Contact Details</span>

                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">Phone : 56 67</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">Email : patrickmabziness@gmail.com</span>
                        </div>
                        <span className="userShowTitle">Students</span>

                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">Std 8-</span>
                            <Link to="/Student">
                                <span className="userShowInfoTitle">1.Steohano patrick</span>
                            </Link>

                            <span className="userShowInfoTitle">Std 5-</span>
                            <Link to="/Student">
                                <li className="userShowInfoTitle">2.Maxon Gomeka</li>
                            </Link>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}
