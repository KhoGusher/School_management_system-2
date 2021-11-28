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
                <h3 className="teacherTitle">Class Details For : Std8 -Cadndidate</h3>
            </div>

            <div className="newUser">
                <h1 className="newUserTitle">Editing Class</h1>
                <form className="newUserForm">
                    <div className="newUserItem">
                        <label>Class Name</label>
                        <input className="textfeild" type="text" placeholder="Std7" />
                    </div>
                    <div className="newUserItem">
                        <label>Class Description</label>
                        <input className="textfeild" type="text" placeholder="Mere" />
                    </div>
                    <div className="newUserItem">
                        <label>Class Subjects</label>
                        <div className="userUpdateItem">

                            <label>chichewa8,english8,english5</label>
                            <label className="defaultSubjectLabel">Default Subjects</label>
                            <select className="newUserSelect" name="active" id="active">
                                <option value="chich1">chich5</option>
                                <option value="chich2">eng6</option>
                                <option value="chich2">eng7</option>
                                <option value="chich2">eng8</option>
                                <option value="chich2">chich2</option>
                                <option value="chich2">chich1</option>
                            </select>
                            <label className="mereSubjectLabel">Mere Subjects</label>
                            <select className="newUserSelect" name="active" id="active">
                                <option value="chich1">chich5</option>
                                <option value="chich2">eng6</option>
                                <option value="chich2">eng7</option>
                                <option value="chich2">eng8</option>
                                <option value="chich2">chich2</option>
                                <option value="chich2">chich1</option>
                            </select>
                        </div>
                    </div>
                    <button className="classUpdatebtn">Update</button>
                </form>

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
