import React from 'react'
import "./Classes.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Details } from "@material-ui/icons"
import { Teacherrows } from "../../../dummyData"
import { Link } from "react-router-dom"
import { useState } from "react"
import NewClass from './NewClass/NewClass';
import { Classrows } from "../../../dummyData"

export default function Classes() {
    const [teachers, setTeachers] = useState(Classrows);
    //delete class function
    const handleTecherDelete = (id) => {
        setTeachers(teachers.filter((item) => item.id !== id));
    };

    //    defining colums for the subjects
    const columns = [

        { field: 'ClassName', headerName: 'Class Name', width: 200 },
        { field: 'ClassDescription', headerName: 'Class Description', width: 200 },
        { field: 'TotalSubjectTeachers', headerName: 'Total Teachers', width: 200 },
        { field: 'TotalStudents', headerName: 'Total Students', width: 200 },
        {
            field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/Class/" + params.row.id}>
                            <Details className="teacherDetail" />
                        </Link>
                        <Link to={"/Class/" + params.row.id}>
                            <Edit className="teacherEdit" />
                        </Link>
                        <DeleteOutline className="teacherDelete" onClick={() => handleTecherDelete(params.row.id)} />
                    </>

                )
            }
        },

    ];
    return (
        <div className="teacherList">
            <NewClass />
            <div className="topTeachers">
                <div className="teachersTitle"><h3>Class Listing</h3></div>
                <button className="newSubject">Export Classes</button>
                <button className="newSubject">Import Classes</button>
                <button className="newSubject">Print Preview</button>
                <div className="btn-search">

                    <input className="search-teacher form-control" value="Search Class" />
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
    )
}
