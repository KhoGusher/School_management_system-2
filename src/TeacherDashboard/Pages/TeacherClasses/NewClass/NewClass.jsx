import React from 'react'
import "./NewClass.css"

export default function NewClass() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New Class</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Class Name</label>
                    <input className="textfeild" type="text" placeholder="Std7" />
                </div>
                <div className="newUserItem">
                    <label>Class Description</label>
                    <input className="textfeild" type="text" placeholder="Mere" />
                </div>
                <button className="newUserButton">Add Class</button>
            </form>
        </div>
    )
}
