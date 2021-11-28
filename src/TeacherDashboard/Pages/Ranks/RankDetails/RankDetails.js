import React from 'react'
import "./RankDetails.css"
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

export default function RankDetails() {
    return (

        <div className="subject">
            <div className="subjectTitleContainer">
                <h3 className="subjectTitle">Rank Details For : Admin</h3>
            </div>

            <div className="newUser">
                <h2 className="newUserTitle">Editing Rank</h2>
                <form className="newUserForm">
                    <div className="newUserItem">
                        <label>Rank  Name</label>
                        <input className="subjectDetailsFeild" type="text" placeholder="chichewa" />
                    </div>
                    <div className="newUserItem">
                        <label>Rank Head</label>
                        <input className="subjectDetailsFeild" type="text" placeholder="chich111" />
                    </div>
                    <button className="newUserButton">Update</button>
                </form>
            </div>

            <div className="subjectContaine">
                <div className="subjectShow">
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Rank Members
                        </span>
                        <input value="Seach Student "></input>
                    </div>

                    <div className="userShowBottom">
                        <div className="userShowInfo">
                            <span className="userShowInfoTitle">Stephano Patrick</span>

                        </div>
                    </div>
                </div>

                <div className="subjectUpdate">
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Rank Readers</span>
                        <input Value="Seach Teacher"></input>
                        <form className="userUpdateForm">
                            <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                    <label>Kondwani Nantchito -head</label>

                                </div>

                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
