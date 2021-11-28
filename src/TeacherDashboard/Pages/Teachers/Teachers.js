import React from 'react'
import "./Teachers.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Details } from "@material-ui/icons"
import { Teacherrows } from "../../../dummyData"
import { Link } from "react-router-dom"
import { useState } from "react"


function Teachers() {
    const [teachers, setTeachers] = useState(Teacherrows);
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
                        <Link to={"/Teacher/" + params.row.id}>
                            <Details className="teacherDetail" />
                        </Link>
                        <Link to={"/Teacher/" + params.row.id}>
                            <Edit className="teacherEdit" />
                        </Link>
                        <DeleteOutline className="teacherDelete" onClick={() => handleTecherDelete(params.row.id)} />
                    </>

                )
            }
        },
        // {field: 'nationality', headerName: 'Last name', width: 130 },
        // {
        //     field: 'fullName',
        //     headerName: 'Full name',
        //     description: 'This column has a value getter and is not sortable.',
        //     sortable: false,
        //     width: 160,

        // },
    ];
    return (
        <div className="teacherList">
            <div className="topTeachers">
                <div className="teachersTitle"><h3>Teachers</h3></div>
                <Link to="/NewTeacher">
                    <button className="newTeacher">New Teacher</button>

                </Link>

                <button className="newTeacher">Print Preview</button>
                <button className="newTeacher">Import Teachers</button>
                <button className="newTeacher">Export Teachers</button>
                <div className="btn-search">

                    <input className="search-teacher form-control" value="Search Teacher" />
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
export default Teachers

