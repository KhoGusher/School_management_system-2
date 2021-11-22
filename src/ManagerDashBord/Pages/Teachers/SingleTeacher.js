import React from 'react'
import "./SingleTeacher.css"
import profile from "./profile.jpg"

export default function SingleTeacher() {
    return (
        <div className="teacher">
            <div className="teacherTitleContainer">
                <h3 className="teacherTitle">User Details</h3>
                <button className="teacherAddBtn">Create</button>
            </div>
            <div className="teacherContaine">
                <div className="teacherShow">
                    <div className="userShowTop">
                        <img src={profile} alt="" className="userShowImage"></img>
                    </div>
                    <div className="userShowBottom"></div>
                    <div className="userShowTopTitle">
                        <span className="userShowUserName">Stepahno patrick</span>
                        <span className="userShowUserTitle">enginer</span>
                    </div>
                </div>
                <div className="teacherUpdate">sd</div>
            </div>

        </div>
    )
}
