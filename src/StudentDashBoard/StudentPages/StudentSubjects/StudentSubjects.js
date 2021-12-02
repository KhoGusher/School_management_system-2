import React from 'react'
import "./Subjects.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Details } from "@material-ui/icons"
import { Subjectrows } from "../../../dummyData"
import { Link } from "react-router-dom"
import { useState } from "react"


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
        { field: 'TotalSubjectTeachers', headerName: 'Teachers', width: 200 },
        { field: 'TotalStudents', headerName: 'Assignments', width: 200 },
        {
            field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/StudentSubjectDetails/" + params.row.id}>
                            <Details className="teacherDetail" />
                        </Link>

                    </>

                )
            }
        },

    ];
    return (
        <>

            <div className="teacherList">
                <div className="topTeachers">
                    <div className="teachersTitle"><h3>Subjects Listing</h3></div>

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
