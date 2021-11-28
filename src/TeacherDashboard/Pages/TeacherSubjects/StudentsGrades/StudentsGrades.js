import React from 'react'
import "./StudentsList.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit, Details } from "@material-ui/icons"
import { Studentrows } from "../../../../dummyData"
import { Link } from "react-router-dom"
import { VscGraphLine } from "react-icons/vsc";
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
        { field: 'dob', headerName: 'Middle Name', width: 115 },
        { field: 'gender', headerName: 'Gender', width: 125 },
        { field: 'district', headerName: 'Registarion Number', width: 220 },
        { field: 'residentialAddress', headerName: 'Grade', width: 130 },
        
        {
            field: 'action', headerName: 'Position', width: 150 }
    ];
    return (
        <div className="teacherList">
            <div className="topTeachers">
                <div className="teachersTitle"><h3>Student Perfomances for chich11-assignment1</h3></div>

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

