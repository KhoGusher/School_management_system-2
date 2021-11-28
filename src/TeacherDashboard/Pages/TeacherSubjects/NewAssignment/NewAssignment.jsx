import React from 'react'
import "./NewAssignment.css"

export default function NewSubject() {
    return (
        <div className="newUser">
            <h2 className="newUserTitle">Adding Assignment</h2>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Assignment Name</label>
                    <input type="text" placeholder="Assignment 1" />
                </div>
                <div className="newUserItem">
                    <label>TOtal Marks</label>
                    <input type="text" placeholder="100" />
                </div>

                <button className="newUserButton">Add Assignment</button>
            </form>
        </div>
    )
}
