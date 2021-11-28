import React from 'react'
import "./NewGuardian.css"

export default function NewTeacher() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New Guardian</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Fist Name</label>
                    <input className="teacherfield" type="text" placeholder="mabziness" />
                </div>
                <div className="newUserItem">
                    <label>Last Name</label>
                    <input className="teacherfield" type="text" placeholder="patrick" />
                </div>
                <div className="newUserItem">
                    <label>Middle Name</label>
                    <input className="teacherfield" type="text" placeholder="mabziness" />
                </div>
                <div className="newUserItem">
                    <label>Date Of Birth</label>
                    <input className="teacherfield" type="text" placeholder="14-04-2000" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input className="teacherfield" type="email" placeholder="patrickmabziness@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input className="teacherfield" type="text" placeholder="+265 999" />
                </div>
                <div className="newUserItem">
                    <label>Nationality</label>
                    <input className="teacherfield" type="text" placeholder="Malawi" />
                </div>
                <div className="newUserItem">
                    <label>District</label>
                    <input className="teacherfield" type="text" placeholder="Zomba" />
                </div>

                <div className="newUserItem">
                    <label>Village Of Origin</label>
                    <input className="teacherfield" type="text" placeholder="Khuvinda" />
                </div>
                <div className="newUserItem">
                    <label>Residential Address</label>
                    <input className="teacherfield" type="text" placeholder="Chikanda" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>

                    </div>
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input className="teacherfield" type="password" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label>Rank</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">admin</option>
                        <option value="yes">PT head</option>
                        <option value="yes">PT member</option>
                    </select>
                </div>
                <div className="newUserItem">
                    <label>Subjects</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Chich1</option>
                        <option value="no">Chich5</option>
                        <option value="no">Eng4</option>
                        <option value="no">Eng8</option>
                    </select>
                </div>
                <div className="newUserItem">
                    <label>Students</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Mabziness</option>
                        <option value="yes">Maxon</option>
                        <option value="yes">Kondwani</option>
                    </select>
                </div>
                <div className="newUserItem">
                    <label>Search A Student</label>
                    <input className="teacherfield" type="password" placeholder="Search Student" />
                </div>
                <button className="newUserButton">Add</button>
            </form>
        </div>
    )
}
