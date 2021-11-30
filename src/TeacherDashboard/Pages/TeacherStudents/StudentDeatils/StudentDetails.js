import React from 'react'
import "./StudentDetails.css"
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

export default function StudentDetails() {
    return (

        <div className="teacher">
            <div className="teacherTitleContainer">
                <h3 className="teacherTitle">Student Details</h3>


            </div>
            <div className="teacherContaine">
                <div className="teacherShow">
                    <div className="userShowTop">
                        <img src={profile} alt="" className="userShowImage"></img>
                    </div>
                    <div className="userShowBottom"></div>
                    <div className="userShowTopTitle">
                        <span className="userShowUserName">Stepahno junior patrick</span>

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
                        <span className="userShowTitle">Classes /Subjects</span>

                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">Std 8-</span>
                            <span className="userShowInfoTitle">Subjects : chichewa,english,</span>

                        </div>
                        <span className="userShowTitle">Guardian Details</span>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                Guardian Name :<Link> patrick mabziness</Link>
                            </span>

                            <span> -Phone Number :98447484</span>

                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}
