import React from 'react'
import "./NewClass.css"

export default function NewClass() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New Class</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Fist Name</label>
                    <input type="text" placeholder="mabziness" />
                </div>
                <div className="newUserItem">
                    <label>Last Name</label>
                    <input type="text" placeholder="patrick" />
                </div>
                <button className="newUserButton">Add Class</button>
            </form>
        </div>
    )
}
