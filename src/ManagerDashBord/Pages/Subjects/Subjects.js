import React from 'react'
import "./Subjects.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Details } from "@material-ui/icons"
import { Subjectrows } from "../../../dummyData"
import { Link } from "react-router-dom"
import { useState } from "react"
import NewSubject from './NewSubject/NewSubject';

export default function Subjects() {
    const [teachers, setTeachers] = useState(Subjectrows);
    //delete subject function
    const handleTecherDelete = (id) => {
        setTeachers(teachers.filter((item) => item.id !== id));
    };

    //    defining colums for the subjects
    const columns = [

        { field: 'subjectName', headerName: 'Subject Name', width: 200 },
        { field: 'SubjectCode', headerName: 'Subject Code', width: 200 },
        { field: 'TotalSubjectTeachers', headerName: 'Total Teachers', width: 200 },
        { field: 'TotalStudents', headerName: 'Total Students', width: 200 },
        {
            field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/Subject/" + params.row.id}>
                            <Details className="teacherDetail" />
                        </Link>
                        <Link to={"/Subject/" + params.row.id}>
                            <Edit className="teacherEdit" />
                        </Link>
                        <DeleteOutline className="teacherDelete" onClick={() => handleTecherDelete(params.row.id)} />
                    </>

                )
            }
        },

    ];
    return (
        <>

            <div className="teacherList">
                <div className="newUser">
                    <h2 className="newUserTitle">Adding Subject</h2>
                    <form className="newUserForm">
                        <div className="newUserItem">
                            <label>Subject Name</label>
                            <input className="subjectDetailsAddFeild" type="text" placeholder="chichewa" />
                        </div>
                        <div className="newUserItem">
                            <label>Subject Code</label>
                            <input className="subjectDetailsAddFeild" type="text" placeholder="chich111" />
                        </div>
                        <button className="newUserButton">Add Subject</button>
                    </form>
                </div>

                <div className="topTeachers">
                    <div className="teachersTitle"><h3>Subjects Listing</h3></div>
                    <button className="newSubject">Export Subjects</button>
                    <button className="newSubject">Import Subjects</button>
                    <button className="newSubject">Print Preview</button>
                    <div className="btn-search">

                        <input className="search-teacher form-control" value="Search Subject" />
                    </div>

                </div>

                <div style={{ height: 700, width: '100%' }}>
                    <DataGrid className="subjectsTable"
                        rows={teachers}
                        disableSelectionOnClick
                        columns={columns}
                        pageSize={11}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            </div>
        </>

    )
}
