import React from 'react'
import "./NewStudent.css"

export default function NewStudent() {
    return (
        //chage all the naming conversions to the specifield names
        <div className="newUser">
            <h1 className="newUserTitle">New Student</h1>
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
                    <label>Registration Number</label>
                    <input className="teacherfield" type="text" placeholder="Bsc/com" />
                </div>
                <div className="newUserItem">
                    <label>Guardian Number</label>
                    <input className="teacherfield" type="text" placeholder="0999 88 35" />
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
                    <label>Number Of Attempts</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">1</option>
                        <option value="yes">2</option>
                        <option value="yes">3</option>
                    </select>
                </div>
                <div className="newUserItem">
                    <label>Class</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">std1</option>
                        <option value="no">std7</option>
                        <option value="no">std8</option>
                        <option value="no">std5</option>
                    </select>
                </div>
                <div className="newUserItem">
                    <label>Add Guardian</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Frola</option>
                        <option value="no">Luka</option>
                        <option value="no">Nantchito</option>
                        <option value="no">Chisopa</option>
                    </select>
                </div>
                <div className="newUserItem">
                    <label>Search Guardian</label>
                    <input className="teacherfield" type="text" placeholder="Guardian" />
                </div>
                <button className="newUserButton">Add</button>
            </form>
        </div>
    )
}
