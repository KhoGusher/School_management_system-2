import React from 'react'
import "./SingleTeacher.css"
import profile from "../profile.jpg"
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
import { Link } from '@material-ui/core';

export default function SingleTeacher() {
    return (

        <div className="teacher">
            <div className="teacherTitleContainer">
                <h3 className="teacherTitle">Teacher Details</h3>
                <Link to="/Home">
                    <button className="teacherAddBtn">Create</button>
                </Link>

            </div>
            <div className="teacherContaine">
                <div className="teacherShow">
                    <div className="userShowTop">
                        <img src={profile} alt="" className="userShowImage"></img>
                    </div>
                    <div className="userShowBottom"></div>
                    <div className="userShowTopTitle">
                        <span className="userShowUserName">Stepahno junior patrick</span>
                        <span className="userShowUserTitle">Teacher</span>
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
                            <span className="userShowInfoTitle">Std 5-</span>
                            <span className="userShowInfoTitle">Subjects : english,</span>
                        </div>

                    </div>
                </div>

                <div className="teacherUpdate">
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Edit</span>
                        <form className="userUpdateForm">
                            <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                    <label className="teacherlabes">FistName</label>

                                    <input
                                        type="text"
                                        placeholder="stephano"
                                        className="userUpdateInput"
                                    />

                                </div>
                                <div className="userUpdateItem">
                                    <label>Middle Name</label>
                                    <input
                                        type="text"
                                        placeholder="junior"
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Patrick"
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>D.O.B</label>
                                    <input
                                        type="text"
                                        placeholder="10.12.1999"
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <div className="gender">
                                        <label>Gender</label>
                                        <input className="radio"
                                            type="radio"
                                            name="gender" id="male" value="male"
                                        />
                                        <label for="male">Male</label>
                                        <input className="radio"
                                            type="radio"
                                            name="gender" id="female" value="female"
                                        />
                                        <label for="female">Female</label>
                                    </div>

                                </div>
                                <div className="userUpdateItem">
                                    <label>District</label>
                                    <input
                                        type="text"
                                        placeholder="Zomba"
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Village</label>
                                    <input
                                        type="text"
                                        placeholder="Khuvinda"
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Residential Add</label>
                                    <input
                                        type="text"
                                        placeholder="Chikanda"
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Nationality</label>
                                    <input
                                        type="text"
                                        placeholder="Malawi"
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        placeholder="patrickmabziness@gmail.com"
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Phone</label>
                                    <input
                                        type="text"
                                        placeholder="56 67"
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Subjects : </label>
                                    <label className="label">chichewa8,english8,english5</label>
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
                            <div className="userUpdateRight">
                                <div className="userUpdateUpload">
                                    <img
                                        className="userUpdateImg"
                                        src={profile}
                                        alt=""
                                    />
                                    <label htmlFor="file">
                                        <Publish className="userUpdateIcon" />
                                    </label>
                                    <span >Picture </span>
                                    <input type="file" id="file" style={{ display: "none" }} />
                                </div>

                                <button className="teacherUpdatebtn">Update</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
