import React from 'react'
import "./StudentsList.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Details } from "@material-ui/icons"
import { Studentrows } from "../../../dummyData"
import { Link } from "react-router-dom"
import { useState } from "react"


function StudentList() {
    const [teachers, setTeachers] = useState(Studentrows);
    //delete student function
    const handleTecherDelete = (id) => {
        setTeachers(teachers.filter((item) => item.id !== id));
    };

    const columns = [
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
                        <Link to={"/Student/" + params.row.id}>
                            <Details className="teacherDetail" />
                        </Link>
                        <Link to={"/Student/" + params.row.id}>
                            <Details className="teacherEdit" />
                        </Link>

                    </>

                )
            }
        },

    ];
    return (
        <div className="teacherList">
            <div className="topTeachers">
                <div className="teachersTitle"><h3>Students</h3></div>
                <button className="newTeacher">Print Preview</button>
                <button className="newTeacher">Import Students</button>
                <button className="newTeacher">Export Students</button>
                <div className="btn-search">

                    <input className="search-teacher form-control" value="Search Student" />
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
export default StudentList

