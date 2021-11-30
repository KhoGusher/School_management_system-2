import React from 'react'
import "./Guardians.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Details } from "@material-ui/icons"
import { Guardianrows } from "../../../dummyData"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Guardians() {
    const [teachers, setTeachers] = useState(Guardianrows);
    //delete teacher function
    const handleTecherDelete = (id) => {
        setTeachers(teachers.filter((item) => item.id !== id));
    };

    // `(`manager_id`, `firstName`, `lastName`, `middle_name`, `DOB`, `gender`, `district`, `village`, `current_Address`, `email`,
    //  `phoneNumber`, `rank`, `password`, `school_id`, `master_id`, `nationality`)
    const columns = [
        // { field: 'id', headerName: 'ID', width: 70 },

        {
            field: 'firstName', headerName: 'First name', width: 160, renderCell: (params) => {
                return (
                    <div className="teacherListFirst">
                        <img className="teachersPic" scr={params.row.avator} alt="img" />
                        {params.row.firstName}
                    </div>
                )
            }
        },
        { field: 'lastName', headerName: 'Last name', width: 160 },
        { field: 'dob', headerName: 'D.O.B', width: 115 },
        { field: 'gender', headerName: 'Gender', width: 125 },
        { field: 'district', headerName: 'District', width: 120 },
        { field: 'residentialAddress', headerName: 'Address', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'phoneNumber', headerName: 'Phone', width: 130 },
        {
            field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/TeacherGuardianDetails/" + params.row.id}>
                            <Details className="teacherDetail" />
                        </Link>


                    </>

                )
            }
        },

    ];
    return (
        <div className="teacherList">
            <div className="topTeachers">
                <div className="teachersTitle"><h3>Teacher Guardians</h3></div>
                <button className="newTeacher">Print Preview</button>
                <button className="newTeacher">Import Guardians</button>
                <button className="newTeacher">Export Guardians</button>
                <div className="btn-search">

                    <input className="search-teacher form-control" value="Search Guardian" />
                </div>

            </div>

            <div style={{ height: 700, width: '100%' }}>
                <DataGrid className="teachersTable"
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
