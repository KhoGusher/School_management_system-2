import React from 'react'
import "./SubjectDetails.css"

export default function SubjectDetails() {
    return (

        <div className="subject">
            <div className="subjectTitleContainer">
                <h3 className="subjectTitle">Subject Details For : Chichewa -chich111</h3>
            </div>

            <div className="subjectContaine">
                <div className="subjectShow">
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Students
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
                        <span className="userUpdateTitle">Teachers</span>
                        <input Value="Seach Teacher"></input>
                        <form className="userUpdateForm">
                            <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                    <label>Kondwani Nantchito</label>

                                </div>

                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
