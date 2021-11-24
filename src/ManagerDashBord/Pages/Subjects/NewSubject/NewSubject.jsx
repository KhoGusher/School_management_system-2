import React from 'react'
import "./NewSubject.css"

export default function NewSubject() {
    return (
        <div className="newUser">
            <h2 className="newUserTitle">Adding Subject</h2>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Subject Name</label>
                    <input type="text" placeholder="chichewa" />
                </div>
                <div className="newUserItem">
                    <label>Subject Code</label>
                    <input type="text" placeholder="chich111" />
                </div>
                <button className="newUserButton">Add Subject</button>
            </form>
        </div>
    )
}
