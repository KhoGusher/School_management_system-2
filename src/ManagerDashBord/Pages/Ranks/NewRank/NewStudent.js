import React from 'react'
import "./NewStudent.css"

export default function NewTeacher() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New Student</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Fist Name</label>
                    <input type="text" placeholder="mabziness" />
                </div>
                <div className="newUserItem">
                    <label>Last Name</label>
                    <input type="text" placeholder="patrick" />
                </div>
                <div className="newUserItem">
                    <label>Middle Name</label>
                    <input type="text" placeholder="mabziness" />
                </div>
                <div className="newUserItem">
                    <label>Date Of Birth</label>
                    <input type="text" placeholder="14-04-2000" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="patrickmabziness@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+265 999" />
                </div>
                <div className="newUserItem">
                    <label>Nationality</label>
                    <input type="text" placeholder="Malawi" />
                </div>
                <div className="newUserItem">
                    <label>District</label>
                    <input type="text" placeholder="Zomba" />
                </div>

                <div className="newUserItem">
                    <label>Village Of Origin</label>
                    <input type="text" placeholder="Khuvinda" />
                </div>
                <div className="newUserItem">
                    <label>Residential Address</label>
                    <input type="text" placeholder="Chikanda" />
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
                    <input type="password" placeholder="password" />
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
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
