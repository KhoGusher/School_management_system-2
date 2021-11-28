import React from 'react'
import "./Ranks.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Details } from "@material-ui/icons"
import { Subjectrows } from "../../../dummyData"
import { Link } from "react-router-dom"
import { useState } from "react"


export default function Ranks() {
    const [teachers, setTeachers] = useState(Subjectrows);
    //delete subject function
    const handleTecherDelete = (id) => {
        setTeachers(teachers.filter((item) => item.id !== id));
    };

    //    defining colums for the subjects
    const columns = [

        { field: 'subjectName', headerName: 'Rank Name', width: 200 },
        { field: 'SubjectCode', headerName: 'Rank Head', width: 200 },
        { field: 'TotalSubjectTeachers', headerName: 'Total Members', width: 200 },
        { field: 'TotalStudents', headerName: 'Rank Description', width: 200 },
        {
            field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/Rank/" + params.row.id}>
                            <Details className="teacherDetail" />
                        </Link>
                        <Link to={"/Rank/" + params.row.id}>
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
                    <h2 className="newUserTitle">Adding Rank</h2>
                    <form className="newUserForm">
                        <div className="newUserItem">
                            <label>Rank Name</label>
                            <input className="subjectDetailsAddFeild" type="text" placeholder="admin" />
                        </div>
                        <div className="newUserItem">
                            <label>Rank Head</label>
                            <input className="subjectDetailsAddFeild" type="text" placeholder="chich111" />
                        </div>
                        <button className="newUserButton">Add Rank</button>
                    </form>
                </div>

                <div className="topTeachers">
                    <div className="teachersTitle"><h3>Rank Listing</h3></div>
                    <button className="newSubject">Export Ranks</button>
                    <button className="newSubject">Import Ranks</button>
                    <button className="newSubject">Print Preview</button>
                    <div className="btn-search">

                        <input className="search-teacher form-control" value="Search Rank" />
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

