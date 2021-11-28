import React from 'react'
import "./TeacherAssignments.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Details } from "@material-ui/icons"
import { Subjectrows } from "../../../../dummyData"
import { Link } from "react-router-dom"
import { useState } from "react"
import { MdGrading } from 'react-icons/md'
import AddAssidnment from "../NewAssignment/NewAssignment"


export default function TeacherAssignments() {
    const [teachers, setTeachers] = useState(Subjectrows);
    //delete subject function
    const handleTecherDelete = (id) => {
        setTeachers(teachers.filter((item) => item.id !== id));
    };

    //    defining colums for the subjects
    const columns = [

        { field: 'subjectName', headerName: 'Assignment Name', width: 200 },
        { field: 'SubjectCode', headerName: 'Assignment Description', width: 230 },
        { field: 'TotalSubjectTeachers', headerName: 'Total Marks', width: 200 },
        { field: 'TotalStudents', headerName: 'Total Students', width: 200 },
        {
            field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/StudendsGrades"}>
                            <Details className="teacherDetail" />
                        </Link>
                        <Edit className="teacherDetail" />

                    </>

                )
            }
        },

    ];
    return (
        <>
            <div className="teacherList">
                <AddAssidnment />
                <div className="topTeachers">
                    <div className="teachersTitle"><h3>Assignments  Listing For Chich111</h3></div>
                    <button className="newSubject">Export </button>
                    <button className="newSubject">Import</button>
                    <button className="newSubject">Print Preview</button>
                    <div className="btn-search">

                        <input className="search-teacher form-control" value="Search Assignments" />
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
