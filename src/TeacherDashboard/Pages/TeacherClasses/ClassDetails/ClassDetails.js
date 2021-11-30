import React from 'react'
import "./ClassDetails.css"
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

export default function ClassDetails() {
    return (

        <div className="teacher">
            <div className="teacherTitleContainer">
                <h3 className="teacherTitle"> Class Details For : Std8 -Cadndidate</h3>
            </div>

            <div className="teacherContaine">
                <div className="teacherShow">

                    <div className="userUpdate">
                        <span className="userUpdateTitle">Student List

                        </span>
                        <input value="Search Student"></input>

                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Princess Luhanga</span>

                    </div>
                </div>

                <div className="teacherUpdate">
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Teacher Listing</span>
                        <input value="Search Teacher"></input>
                        <form className="userUpdateForm">
                            <div className="userUpdateLeft">

                                <label>mabziness patrick</label>

                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
